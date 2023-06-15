declare module "*.svg" {
  const content:
    | React.FunctionComponent<React.SVGAttributes<SVGElement>>
    | string;
  export default content;
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
