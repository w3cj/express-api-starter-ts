export default interface TestResponse {
  message: string;
  env?: {
    [key: string]: string | undefined;
  };
}
