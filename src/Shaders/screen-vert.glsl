varying vec2 vTexCoord;
varying vec2 vScreenPos;
varying vec2 vScreenPosWithOffset;
varying vec2 vScreenPosNormalized;
varying vec2 vAspectScale;
#ifdef VS
  @POSITION
  attribute vec3 position;
  #ifdef ATTRIBUTE_TEXCOORD_ENABLED
  @TEXCOORD
  attribute vec2 texCoord;
  @VIEWPORT
  uniform vec4 viewportRect;
  #endif
  void main(){
    gl_Position = vec4(position,1);
    #ifdef ATTRIBUTE_TEXCOORD_ENABLED
    vTexCoord = texCoord;
    #endif
    #ifndef ATTRIBUTE_TEXCOORD_ENABLED
    vTexCoord = (position.xy + vec2(1.0)) * vec2(0.5);
    #endif
    vScreenPosNormalized = (position.xy + vec2(1.0)) * vec2(0.5);
    vScreenPos = viewportRect.zw * vScreenPosNormalized;
    vScreenPosWithOffset = vScreenPos + viewportRect.xy;
  }
#endif