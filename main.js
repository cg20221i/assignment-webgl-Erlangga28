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
        0.42, 0.75, //Phase 1 
        0.32, 0.6,
        -0.15, 0.75,
        -0.28, 0.6,

        -0.15, 0.6, //Phase 2
        -0.28, -0.25,
        -0.15, -0.25,

        -0.15, -0.1, //Phase 3
        0.37, -0.25,
        0.37, -0.1,

        0.25, -0.1, //Phase 4
        0.37, 0.26,
        0.25, 0.26,

        0.25, 0.13, //Phase 5
        0.08, 0.26,
        0.08, 0.13,
        
         //number 8
         0.9, 0.75, 
         0.62, 0.75,
         0.5, 0.6,
         0.5, 0.13,
         0.59, 0.07,

         0.88, -0.04,
         0.88, -0.42,
         0.6, -0.42,
         0.59, 0.07,

         0.5, -0.04,
         0.5, -0.46,
         0.62, -0.58,
         0.9, -0.58,
         1, -0.46,
         1, -0.04,
         0.91, 0.07,

         0.61, 0.22,
         0.61, 0.58,
         0.88, 0.58,
         0.91, 0.07,

         1, 0.16,
         1, 0.6,
         
        //Alphabet A
    


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
    gl.drawArrays(gl.TRIANGLE_STRIP, 6, 16);
    gl.drawArrays(gl.LINE_LOOP, 22, 22 );

}