declare module "*.jpg" {
  const content: { src: string } | string;
  export default content;
}

declare module "*.jpeg" {
  const content: { src: string } | string;
  export default content;
}

declare module "*.png" {
  const content: { src: string } | string;
  export default content;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.webm" {
  const src: string;
  export default src;
}
