import { StackContext, Api } from "@serverless-stack/resources";

export function MainStack({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "POST /files": "functions/upload.main",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url
  });
}
