import TestResponse from './TestResponse';

export default interface ErrorResponse extends TestResponse {
  stack?: string;
}
