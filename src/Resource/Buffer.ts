import GLResource from "./GLResource";

export default class Buffer extends GLResource<WebGLBuffer> {
  /**
   * If this flag was true, buffer instance will keep Float32Array on class field.
   */
  public keepSource = false;

  public get bufferSource(): BufferSource {
    if (this.keepSource) {
      return this._bufferSource;
    } else {
      throw new Error("Accessing bufferSource getter of Buffer class instance require keepSource flag being enabled before updating Buffer.");
    }
  }

  private _bufferSource: BufferSource = null;

  constructor(gl: WebGLRenderingContext, public readonly target: number = WebGLRenderingContext.ARRAY_BUFFER, public usage: number = WebGLRenderingContext.STATIC_DRAW) {
    super(gl, gl.createBuffer());
  }

  public update(length: number): void;
  public update(buffer: BufferSource): void;
  public update(offset: number, buffer: BufferSource): void;
  public update(length: number | BufferSource, subBuffer?: BufferSource): void {
    this.bind();
    this._bufferSource = null;
    if (subBuffer) {
      if (!this.valid) {
        this.gl.bufferData(this.target, length as number + subBuffer.byteLength, this.usage);
      }
      this.gl.bufferSubData(this.target, length as number, subBuffer);
    } else {
      if (typeof length === "number") {
        this.gl.bufferData(this.target, length, this.usage);
      } else {
        this.gl.bufferData(this.target, length, this.usage);
        this._bufferSource = length;
      }
    }
    this.valid = true;
  }

  public bind(): void {
    this.gl.bindBuffer(this.target, this.resourceReference);
  }

  public destroy(): void {
    super.destroy();
    this._bufferSource = null;
    this.gl.deleteBuffer(this.resourceReference);
  }
}
