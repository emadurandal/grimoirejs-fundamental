import ResourceBase from "./ResourceBase";
export default class Shader extends ResourceBase {

  public shader: WebGLShader;

  constructor(gl: WebGLRenderingContext, public readonly type: number, public sourceCode?: string) {
    super(gl);
    this.shader = gl.createShader(type);
    if (sourceCode) {
      this.update(sourceCode);
    }
  }

  public update(source: string): void {
    this.gl.shaderSource(this.shader, source);
    this.gl.compileShader(this.shader);
    if (!this.gl.getShaderParameter(this.shader, WebGLRenderingContext.COMPILE_STATUS)) {
      throw new Error(`Compiling shader failed.\nSourceCode:\n${this._insertLineNumbers(source)}\n\nErrorCode:${this.gl.getShaderInfoLog(this.shader)}`);
    }
    this.sourceCode = source;
    this.valid = true;
  }

  public destroy(): void {
    super.destroy();
    this.gl.deleteShader(this.shader);
  }

  private _insertLineNumbers(source:string):string{
    source = "1:" + source;
    let lN = 2;
    for(let i = 0; i < source.length; i++){
      const c = source.charAt(i);
      if(c === '\n'){
        source = source.substring(0,i + 1) +`${lN}:`+ source.substring(i + 1,source.length - 1);
        i++;
        lN++;
      }
    }
    return source;
  }
}
