var GLExtRequestor = gr.lib.fundamental.Resource.GLExtRequestor;
GLExtRequestor.request("OES_element_index_uint");

var GeometryFactory = gr.lib.fundamental.Geometry.GeometryFactory;
var Geometry = gr.lib.fundamental.Geometry.Geometry;
GeometryFactory.addType("custom", {}, function (gl, attrs) {
  var geometry = new Geometry(gl);
  // 3次元リサージュの座標データを用意
  //             1.0 y
  //              ^  -1.0
  //              | / z
  //              |/       x
  // -1.0 -----------------> +1.0
  //            / |
  //      +1.0 /  |
  //           -1.0
  //
  var WIDTH_SEGMENT = 255;
  var HEIGHT_SEGMENT = 255;
  var WIDTH_SIZE = 1.0 * 2 / WIDTH_SEGMENT;
  var HEIGHT_SIZE = 1.0 * 2 / WIDTH_SEGMENT;

  var positions = new Float32Array((WIDTH_SEGMENT + 1) * (HEIGHT_SEGMENT + 1) * 3);
  var colors = new Float32Array((WIDTH_SEGMENT + 1) * (HEIGHT_SEGMENT + 1) * 4);

  var theta = 0;
  var k = 0;
  for (var j = -16; j < 16; j += 1/8) {
    for (var i = -16; i < 16; i += 1/8) {
      var x = i;
      var y = j;
      var z = Math.sin(Math.sqrt(x * x + y * y) + theta) / Math.sqrt(x * x + y * y);
      var x2 = x / 16;
      var y2 = y / 16;
      var z2 = z / 2;
      //var z2 = 0;
      positions[k * 3 + 0] = x2;
      positions[k * 3 + 1] = y2;
      positions[k * 3 + 2] = z2;

      colors[k * 4 + 0] = x2 + 0.5;
      colors[k * 4 + 1] = y2 + 0.5;
      colors[k * 4 + 2] = z2 + 0.5;
      colors[k * 4 + 3] = 1.0;

      k++;
    }
  }

  //var indices = new Uint16Array(WIDTH_SEGMENT * HEIGHT_SEGMENT * 6);
  var indices = new Uint32Array(WIDTH_SEGMENT * HEIGHT_SEGMENT * 6);
  k = 0;
  for (var row = 0; row < HEIGHT_SEGMENT; row++) {
    for (var col = 0; col < WIDTH_SEGMENT; col++) {
      var a = (row + 1) * (WIDTH_SEGMENT + 1) + col;
      var b = (row + 0) * (WIDTH_SEGMENT + 1) + col;
      var c = (row + 0) * (WIDTH_SEGMENT + 1) + col + 1;
      var d = (row + 1) * (WIDTH_SEGMENT + 1) + col + 1;
      indices[k * 6 + 0] = b;
      indices[k * 6 + 1] = a;
      indices[k * 6 + 2] = c;
      indices[k * 6 + 3] = a;
      indices[k * 6 + 4] = d;
      indices[k * 6 + 5] = c;
      k++;
    }
  }
  geometry.addAttributes(positions, {
    POSITION: {
      size: 3
    }
  });
  geometry.addAttributes(colors, {
    COLOR: {
      size: 4
    }
  });
  geometry.addIndex("default", indices, WebGLRenderingContext.TRIANGLES);
  //geometry.addIndex("default", indices, WebGLRenderingContext.LINES);
  return geometry;
});
