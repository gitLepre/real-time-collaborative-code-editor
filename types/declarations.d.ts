// Add any global types here for imports to work. (e.g. to import png, jpg, svg, etc.)

declare module "*.svg?react" {
  import { FunctionComponent, SVGAttributes } from "react";
  const content: FunctionComponent<SVGAttributes<SVGElement>>;
  export default content;
}
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}