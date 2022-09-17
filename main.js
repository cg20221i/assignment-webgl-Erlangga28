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

      //Alphabet G
      -0.07, 1,     //Phase 1 
      -0.14, 0.87,
      -0.38, 1,
      -0.48, 0.87,

      -0.38, 0.84,  //Phase 2
      -0.48, 0.24,
      -0.38, 0.24,

      -0.38, 0.33,  //Phase 3
      -0.12, 0.24,
      -0.12, 0.33, 

      -0.2, 0.33,   //Phase 4
      -0.12, 0.57,
        
      -0.2, 0.57,   //Phase 5
      -0.25, 0.42,
      -0.25, 0.57,
        
      //Alphabet A
      0.3, 0.75,
      0.35, 0.6,
      0.025, 0.75,
      0.0, 0.6,

      0.08, 0.6,
      -0.25, -0.58,
      -0.18, -0.58,
      0.025, 0.11,

      0.025, 0.0,
      0.1, 0.11,
      0.22, 0.0,
      0.25, 0.11,
      0.3, -0.58,
      0.35, -0.58,
      0.26, 0.6,
      0.35, 0.6,    


      //number 8
      0.85, 0.75,  //Top Shape
      0.5, 0.75,
      0.4, 0.6,
      0.4, 0.13,
      0.5, 0.04,

      0.84, -0.04, // TopInShape
      0.84, -0.42,
      0.5, -0.42,
      0.5, 0.04,

      0.4, -0.04, //Bottom Shape
      0.4, -0.46,
      0.5, -0.58,
      0.85, -0.58,
      0.95, -0.46,
      0.95, -0.04,
      0.84, 0.04,

      0.5, 0.22, //BottomInShape
      0.5, 0.58,
      0.84, 0.58,
      0.84, 0.04,
      0.95, 0.16,
      0.95, 0.6,
      0.85, 0.75
         
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
    gl.drawArrays(gl.TRIANGLE_STRIP, 6, 15);
    gl.drawArrays(gl.TRIANGLE_STRIP, 21, 16);  
    gl.drawArrays(gl.LINE_STRIP, 37, 23);

}