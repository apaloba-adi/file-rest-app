import { MainStack } from "./MainStack";
import { App } from "@serverless-stack/resources";
import { Storage } from "./Storage";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(MainStack).stack(Storage);
}
