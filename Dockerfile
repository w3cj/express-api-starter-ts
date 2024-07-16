# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 5000

# Run the app with nodemon
CMD ["npm", "run", "dev"]
