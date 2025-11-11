FROM node:25-alpine3.21 AS builder

# Set working directory
WORKDIR /build

# Install pnpm
RUN npm install -g pnpm


# Copy package.json and pnpm-lock.yaml
COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy src
COPY ./src ./src

# Build the project
RUN pnpm run build


# Runner
FROM node:25-alpine3.21 AS runner
WORKDIR /app

# Install pnpm package
RUN npm install -g pnpm

# Copy package files and dependencies
COPY --from=builder /build/package.json ./
COPY --from=builder /build/pnpm-lock.yaml ./
COPY --from=builder /build/node_modules ./node_modules/

# Copy built application
COPY --from=builder /build/dist ./dist/


EXPOSE 3000

# Run the app
CMD ["node", "dist/index.js"]