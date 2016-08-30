attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

@vert {
//@import "jthree.builtin.vertex"
  uniform mat4 _matPVM;
  uniform mat4 _matVM;
}

varying vec3 vNormal;
varying vec2 vUv;
varying vec4 vPosition;

vec2 calcLightUV(vec4 projectionSpacePos)
{
   return (projectionSpacePos.xy/projectionSpacePos.w+vec2(1,1))/2.;
}

@vert{
  void main(void)
  {
    BasicVertexTransformOutput o =  basicVertexTransform(position,normal,uv,_matPVM,_matVM);
    gl_Position = vPosition = o.position;
    //gl_Position.xyz *= vec3(position.x,position.x * position.z,position.z);
    vNormal = o.normal;
    vUv = o.uv;
  }
}

@frag{
  @{register:1,type:"buffer",name:"DLIGHT"}
  uniform sampler2D _dlBuffer;
  @{register:2,type:"buffer",name:"SLIGHT"}
  uniform sampler2D _slBuffer;
  uniform vec4 diffuse;
  uniform vec3 specular;
  uniform vec4 ambient;
  uniform vec3 ambientCoefficient;
  uniform float brightness;
  @{register:3,flag:"_textureUsed"}
  uniform sampler2D texture;
  uniform int _textureUsed;
  void main(void)
  {
    gl_FragColor=vec4(0,0,0,1);
    gl_FragColor.rgb+=ambient.rgb;
    ////calculate light uv
    vec2 lightUV=calcLightUV(vPosition);
    vec3 d = _textureUsed == 1 ? texture2D(texture,vUv).rgb : diffuse.rgb;
    gl_FragColor.rgb+= d * texture2D(_dlBuffer,lightUV).rgb+specular.rgb *texture2D(_slBuffer,lightUV).rgb;
    gl_FragColor.rgb += ambient.rgb;
  }
}
