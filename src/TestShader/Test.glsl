attribute vec3 position;
uniform mediump float _time;
varying vec3 pos;
@vert{
  uniform mat4 _matPVM;
  void main(){
    gl_Position = _matPVM * vec4(position,1.);
    // gl_Position.x *= abs(sin(_time/1000.) + position.x);
    // gl_Position.y *= abs(cos(_time/200.) + position.y * position.z);
    pos = position.xyz;
  }
}

@frag{
  @{type:"color",default:"red"}
  uniform vec4 color;

  uniform sampler2D testTex;

  void main(){
    float phi = atan(pos.z/pos.x);
    if(pos.x < 0.){
      phi = phi + 3.14;
    }
    gl_FragColor = texture2D(testTex,vec2(phi/6.14,acos(pos.y)/3.14));
    gl_FragColor.a = 1.0;
  }
}
