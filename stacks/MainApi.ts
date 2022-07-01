import { Api, StackContext, use } from "@serverless-stack/resources";
import { Storage } from "./Storage";

export function MainApi({ stack } : StackContext) {
  const table = use(Storage).table;

  // Create the API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        permissions: [table],
        environment: {
          table_name: table.tableName,
        },
      },
    },
    routes: {
      "POST /notes": "functions/upload.main",
    },
  });

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    api,
  };
}