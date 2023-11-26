// types/glslCanvas/index.d.ts

declare module "glslCanvas" {
  export default class GlslCanvas {
    constructor(canvas: any, contextOptions?: any, options?: any);
    destroy(): void;
    load(fragString: any, vertString: any): void;
    test(callback: any, fragString: any, vertString: any): void;
    loadTexture(name: any, urlElementOrData: any, options: any): void;
    refreshUniforms(): void;
    setUniform(name: any, ...value: any[]): void;
    setUniforms(uniforms: any): void;
    setMouse(mouse: any): void;
    uniform(method: any, type: any, name: any, ...value: any[]): void;
    uniformTexture(name: any, texture: any, options: any): void;
    resize(): boolean;
    render(): void;
    pause(): void;
    play(): void;
    renderPrograms(): void;
    getBuffers(fragString: any): {};
    loadPrograms(buffers: any): void;
    createSwappableBuffer(
      W: any,
      H: any,
      program: any
    ): {
      input: {
        index: any;
        texture: any;
        buffer: any;
        W: any;
        H: any;
        resize: (W: any, H: any) => void;
      };
      output: {
        index: any;
        texture: any;
        buffer: any;
        W: any;
        H: any;
        resize: (W: any, H: any) => void;
      };
      swap: () => void;
      render: (W: any, H: any, program: any, name: any) => void;
      resize: (W: any, H: any, program: any, name: any) => void;
    };
    createBuffer(
      W: any,
      H: any,
      program: any
    ): {
      index: any;
      texture: any;
      buffer: any;
      W: any;
      H: any;
      resize: (W: any, H: any) => void;
    };
    resizeSwappableBuffers(): void;
    version(): string;
  }
}
