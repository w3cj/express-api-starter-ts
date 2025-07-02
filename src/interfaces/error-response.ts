import type MessageResponse from "./message-response.js";

type ErrorResponse = {
  stack?: string;
} & MessageResponse;
export default ErrorResponse;
