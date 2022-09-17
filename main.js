function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices =[
      //number 1
      -0.86, 0.6, 
      -0.75, 0.75, 
      -0.49, 0.75,
      -0.49, -0.25,
      -0.65, -0.58,
      -0.65, 0.6,

      //Alphabet M
      -0.47, 0.2,
      -0.4, 0.08,
      -0.47, 1,
      -0.4, 1,

      -0.27, 0.23,
      -0.27, 0.43,

      -0.27, 0.23,
      -0.15, 1,
      -0.15, 0.74,
      -0.08, 1,
      -0.08, 0.08,

      -0.08, 0.08,
      -0.15, 0.2,
      -0.15, 0.74,
       
      // Alphabet O
      
      0.33, 0.75, //Outsider O
      0.4, 0.6,
      0.07, 0.75,
      0.0, 0.6,
      
      0.07, 0.6,
      0.0, -0.43,
      0.07, -0.58,

      0.0, -0.43,
      0.33, -0.58,
      0.33, -0.43,

      0.33, -0.58,
      0.4, -0.43,

      0.33, 0.6,
      0.4, 0.6,

      0.29, 0.5, //Insider O
      0.11, 0.5,
      0.11, -0.3,

      0.11, -0.35,
      0.29, -0.35,
      0.29, 0.45,

      //number 8
      0.9, 0.75,  //Top Shape
      0.55, 0.75,
      0.45, 0.6,
      0.45, 0.13,
      0.55, 0.04,

      0.89, -0.04, // TopInShape
      0.89, -0.42,
      0.55, -0.42,
      0.55, 0.04,

      0.45, -0.04, //Bottom Shape
      0.45, -0.46,
      0.55, -0.58,
      0.9, -0.58,
      1, -0.46,
      1, -0.04,
      0.89, 0.04,

      0.55, 0.22, //BottomInShape
      0.55, 0.58,
      0.89, 0.58,
      0.89, 0.04,
      1, 0.16,
      1, 0.6,
      0.9, 0.75
         
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  
    var vertexShaderCode = `
    attribute vec2 aPosition;
    void main () {
      gl_PointSize = 40.0;  // adding size of point
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
    `;
  
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode); 
    gl.compileShader(vertexShader);
  
    var fragmentShaderCode = `
          void main () {
            gl_FragColor = vec4(255, 0.0, 0.0, 0.8);
          }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
  
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader); 
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
  
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);
  
    //gl.clearColor(1.0, 0.75, 0.79, 1.0); 
  
    gl.clear(gl.COLOR_BUFFER_BIT);
  
    gl.drawArrays(gl.LINE_LOOP, 0, 6);
    gl.drawArrays(gl.TRIANGLE_STRIP, 6, 14);
    gl.drawArrays(gl.TRIANGLE_STRIP, 20, 14);
    gl.drawArrays(gl.TRIANGLES, 34, 6 );  
    gl.drawArrays(gl.LINE_STRIP, 40, 23);

}