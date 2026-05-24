declare module 'dom-to-image-more' {
  interface Options {
    width?: number;
    height?: number;
    bgcolor?: string;
    cacheBust?: boolean;
    style?: Partial<CSSStyleDeclaration>;
    quality?: number;
    scale?: number;
  }
  function toPng(node: HTMLElement, options?: Options): Promise<string>;
  function toJpeg(node: HTMLElement, options?: Options): Promise<string>;
  function toBlob(node: HTMLElement, options?: Options): Promise<Blob>;
  const _default: { toPng: typeof toPng; toJpeg: typeof toJpeg; toBlob: typeof toBlob };
  export default _default;
  export { toPng, toJpeg, toBlob };
}
