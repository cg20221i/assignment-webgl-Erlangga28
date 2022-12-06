function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  var vertices = [
      // Face A       // Red      // Surface orientation
      -0.86, 0.6, 0,     1, 1, 0,    0, 0, -1,   // Index:  0    
      -0.86, -0.6, 0,     1, 1, 0,    0, 0, -1,   // Index:  1
      -0.75, -0.6, 0,     1, 1, 0,    0, 0, -1,   // Index:  2
      -0.75, 0.6, 0,     1, 1, 0,    0, 0, -1,   // Index:  3
      // Face B       // Yellow
      -0.86, 0.6,  1.4,     1, 0, 0,    0, 0, -1,    // Index:  4
      -0.86, -0.6,  1.4,     1, 0, 0,    0, 0, -1,    // Index:  5
      -0.75, -0.6,  1.4,     1, 0, 0,    0, 0, -1,    // Index:  6
      -0.75, 0.6,  1.4,     1, 0, 0,    0, 0, -1,    // Index:  7
      // Face C       // Green
      -0.3, 0.25, 0,      1, 1, 0,    0, 0, -1,   // Index:  8
      -0.3, -0.25, 0,      1, 1, 0,    0, 0, -1,   // Index:  9
      -0.22, -0.25,  0,      1, 1, 0,    0, 0, -1,   // Index: 10
      -0.22, 0.25,  0,      1, 1, 0,    0, 0, -1,   // Index: 11
      // Face D       // Blue
      -0.3, 0.25, 1.4,      1, 0, 0,    0, 0, -1,    // Index: 12
       -0.3, -0.25, 1.4,      1, 0, 0,    0, 0, -1,    // Index: 13
       -0.22, -0.25,  1.4,      1, 0, 0,    0, 0, -1,    // Index: 14
       -0.22, 0.25,  1.4,      1, 0, 0,    0, 0, -1,    // Index: 15
      // Face E       // Orange
      0.75, 0.6, 0,      1, 1, 0,    0, 0, -1,   // Index: 16
      0.75, -0.6,  0,     1, 1, 0,    0, 0, -1,   // Index: 17
      0.86, -0.6,  0,      1, 1, 0,    0, 0, -1,   // Index: 18
      0.86, 0.6, 0,      1, 1, 0,    0, 0, -1,   // Index: 19
      // Face F       // White
      0.75, 0.6, 1.4,     1, 0, 0,    0, 0, -1,    // Index: 20
      0.75, -0.6,  1.4,     1, 0, 0,    0, 0, -1,    // Index: 21
      0.86, -0.6,  1.4,     1, 0, 0,    0, 0, -1,    // Index: 22
      0.86, 0.6, 1.4,     1, 0, 0,    0, 0, -1,     // Index: 23

    //O
    2, 0.9, 1,  1, 0, 0,    0, 0, -1,//24
    2, -0.9, 1, 1, 0, 0,    0, 0, -1,//25
    1.8, -0.9, 1, 1, 0, 0,    0, 0, -1,//26
    1.8, 0.9, 1, 1, 0, 0,    0, 0, -1,//27

    2, 0.9, 0,  1, 1, 0,    0, 0, -1,//28
    2, -0.9, 0,  1, 1, 0,    0, 0, -1,//29
    1.8, -0.9, 0, 1, 1, 0,    0, 0, -1,//30
    1.8, 0.9, 0, 1, 1, 0,    0, 0, -1,//31

    3.5, 0.9, 1, 1, 0, 0,    0, 0, -1,//32
    3.5, -0.9, 1, 1, 0, 0,    0, 0, -1,//33
    2.7, -0.9, 1, 1, 0, 0,    0, 0, -1,//34
    2.7, 0.9, 1, 1, 0, 0,    0, 0, -1,//35
      
    3.5, 0.9, 0, 1, 1, 0,    0, 0, -1,//36
    3.5, -0.9, 0, 1, 1, 0,    0, 0, -1,//37
    2.7, -0.9, 0, 1, 1, 0,    0, 0, -1,//38
    2.7, 0.9, 0, 1, 1, 0,    0, 0, -1,//39

    //1
    4.1, 1.6, 0.6,  1, 0, 0,    0, 0, -1, //40
    4.1, -1.6, 0.6, 1, 0, 0,    0, 0, -1, //41
    3.8, -1.6, 0.6, 1, 0, 0,    0, 0, -1, //42
    3.8, 1.6, 0.6, 1, 0, 0,    0, 0, -1, //43

    4.1, 1.6, 0, 1, 1, 0,    0, 0, -1, //44
    4.1, -1.6, 0, 1, 1, 0,    0, 0, -1, //45
    3.8, -1.6, 0, 1, 1, 0,    0, 0, -1, //46
    3.8, 1.6, 0,1, 1, 0,    0, 0, -1, //47

    //8 top
    5, 0.9, 1,  1, 0, 0,    0, 0, -1,//48
    5, -0.9, 1, 1, 0, 0,    0, 0, -1,//49
    4.8, -0.9, 1, 1, 0, 0,    0, 0, -1,//50
    4.8, 0.9, 1, 1, 0, 0,    0, 0, -1,//51

    5, 0.9, 0,  1, 1, 0,    0, 0, -1,//52
    5, -0.9, 0,  1, 1, 0,    0, 0, -1,//53
    4.8, -0.9, 0, 1, 1, 0,    0, 0, -1,//54
    4.8, 0.9, 0, 1, 1, 0,    0, 0, -1,//55

    6.2, 0.9, 1, 1, 0, 0,    0, 0, -1,//56
    6.2, -0.9, 1, 1, 0, 0,    0, 0, -1,//57
    6.7, -0.9, 1, 1, 0, 0,    0, 0, -1,//58
    6.7, 0.9, 1, 1, 0, 0,    0, 0, -1,//59
      
    6.2, 0.9, 0, 1, 1, 0,    0, 0, -1,//60
    6.2, -0.9, 0, 1, 1, 0,    0, 0, -1,//61
    6.7, -0.9, 0, 1, 1, 0,    0, 0, -1,//62
    6.7, 0.9, 0, 1, 1, 0,    0, 0, -1,//63
       //8 bottom
    5, -0.99, 1,  1, 0, 0,    0, 0, -1,//64
    5, -2.5, 1, 1, 0, 0,    0, 0, -1,//65
    4.8, -2.5, 1, 1, 0, 0,    0, 0, -1,//66
    4.8, -0.99, 1, 1, 0, 0,    0, 0, -1,//67
 
    5, -0.99, 0,  1, 1, 0,    0, 0, -1,//68
    5, -2.5, 0,  1, 1, 0,    0, 0, -1,//69
    4.8, -2.5, 0, 1, 1, 0,    0, 0, -1,//70
    4.8, -0.99, 0, 1, 1, 0,    0, 0, -1,//71
 
    6.2, -0.99, 1, 1, 0, 0,    0, 0, -1,//72
    6.2, -2.5, 1, 1, 0, 0,    0, 0, -1,//73
    6.7, -2.5, 1, 1, 0, 0,    0, 0, -1,//74
    6.7, -0.99, 1, 1, 0, 0,    0, 0, -1,//75
       
    6.2, -0.99, 0, 1, 1, 0,    0, 0, -1,//76
    6.2, -2.5, 0, 1, 1, 0,    0, 0, -1,//77
    6.7, -2.5, 0, 1, 1, 0,    0, 0, -1,//78
    6.7, -0.99, 0, 1, 1, 0,    0, 0, -1,//79
    
    //Cube
    //Red
    2.5, -1, -5,     1, 0, 0,    0, 0, -1,   // Index:  80    
    4.5, -1, -5,     1, 0, 0,    0, 0, -1,   // Index:  81
    4.5,  1, -5,     1, 0, 0,    0, 0, -1,   // Index:  82
    2.5,  1, -5,     1, 0, 0,    0, 0, -1,   // Index:  83
        // Yellow
    2.5, -1,  -3,     1, 1, 0,    0, 0, 1,    // Index:  84
    4.5, -1,  -3,     1, 1, 0,    0, 0, 1,    // Index:  85
    4.5,  1,  -3,     1, 1, 0,    0, 0, 1,    // Index:  86
    2.5,  1,  -3,     1, 1, 0,    0, 0, 1,    // Index:  87
     // Green
    2.5, -1, -5,     0, 1, 0,    -1, 0, 0,   // Index:  88
    2.5,  1, -5,     0, 1, 0,    -1, 0, 0,   // Index:  89
    2.5,  1,  -3,     0, 1, 0,    -1, 0, 0,   // Index: 90
    2.5, -1,  -3,     0, 1, 0,    -1, 0, 0,   // Index: 91
     // Blue
    4.5, -1, -5,     0, 0, 1,    1, 0, 0,    // Index: 92
    4.5,  1, -5,     0, 0, 1,    1, 0, 0,    // Index: 93
    4.5,  1,  -3,     0, 0, 1,    1, 0, 0,    // Index: 94
    4.5, -1,  -3,     0, 0, 1,    1, 0, 0,    // Index: 95
      // Orange
    2.5, -1, -5,     1, 0.5, 0,  0, -1, 0,   // Index: 96
    2.5, -1,  -3,     1, 0.5, 0,  0, -1, 0,   // Index: 97
    4.5, -1,  -3,    1, 0.5, 0,  0, -1, 0,   // Index: 98
    4.5, -1, -5,     1, 0.5, 0,  0, -1, 0,   // Index: 99
      // White
    2.5,  1, -5,     1, 1, 1,    0, 1, 0,    // Index: 100
    2.5,  1,  -3,     1, 1, 1,    0, 1, 0,    // Index: 101
    4.5,  1,  -3,     1, 1, 1,    0, 1, 0,    // Index: 102
    4.5,  1, -5,     1, 1, 1,    0, 1, 0     // Index: 103


  ];

  var indices = [
    //M
      0, 1, 2,     0, 2, 3,     
      4, 5, 6,     4, 6, 7,     
      8, 9, 10,    8, 10, 11,   
      12, 13, 14,  12, 14, 15,

      3,8,10, 0,8,3,
      4,14,7, 7,14,15,
      19,8,10, 16,8,19,
      20,14,23, 23,14,15,

    4,0,3, 4,3,7, //Top
    12,8,11, 12,11,15,
    20,16,19, 20,19,23,
    12,16,20, 8,19,23,
    12,8,19, 12,8,23,
     4,8,0, 4,8,15,

    5,1,2, 5,6,2, //bottom
    21,17,18, 21,22,18,
    13,9,10, 13,14,10,

    16, 17, 18,  16, 18, 19,
    20, 21, 22,  20, 22, 23,
      
    3,10,14, 3,7,14,
    16,10,14, 16,23,14,

    0,1,5, 0,4,5,
    16,17,21, 16,20,21,

    //O
    24,25,26, 24,26,27,
    28,29,30, 28,30,31,
    32,33,34, 32,34,35,
    36,37,38, 36,38,39,

    27,28,32, 34,38,39,
    35,38,39, 34,35,39,
    29,34,38, 26,29,34, 
    //27,24,26, 27,25,30,
    24,25,28, 24,36,39,
    24,25,29, 24,28,29,
    32,33,37, 32,36,37,
    24,25,30, 24,29,30,
    28,32,36, 24,25,29,
    29,25,26, 29,30,26,
    37,33,34, 37,38,34,

    //1
    40,41,42, 40,42,43,
    44,45,46, 44,46,47,

    44,40,43, 44,43,47,
    45,41,42, 45,46,42,
    40,41,45, 40,44,45,

     //8 top
    48,49,50, 48,50,51,
    52,53,54, 52,54,55,
    56,57,58, 56,58,59,
    60,61,62, 60,62,63,

    51,52,56, 58,62,63,
    59,62,63, 58,59,63,
    53,58,62, 50,53,58,
    48,49,52, 48,60,63,
    48,49,53, 48,52,53,
    56,57,61, 56,60,61,
    48,49,54, 48,53,54,
    52,56,60, 48,49,53,
    53,49,50, 53,54,50,
    61,57,58, 61,62,58,

    //8 bottom
    64,65,66, 64,66,67,
    68,69,70, 68,70,71,
    72,73,74, 72,74,75,
    76,77,78, 76,78,79,

    67,68,72, 74,78,79,
    75,78,79, 74,75,79,
    69,74,78, 66,69,74,
    64,65,68, 64,76,79,
    64,65,69, 64,68,69,
    72,73,77, 72,76,77,
    64,65,70, 64,69,70,
    68,72,76, 64,65,69,
    69,65,66, 69,70,66,
    77,73,74, 77,78,74,

    //Cube
    80,81,82, 80,82,83,
    84,85,86, 84,86,87,
    88,89,90, 88,90,91,
    92,93,94, 92,94,95,
    96,97,98, 96,98,99,
    100,101,102, 100,102,103,



  ];

  // Create a linked-list for storing the vertices data in the GPU realm
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  var indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

  // VERTEX SHADER
  var vertexShaderCode = `
      attribute vec3 aPosition;
      attribute vec3 aColor;
      attribute vec3 aNormal;
      uniform mat4 uModel;
      uniform mat4 uView;
      uniform mat4 uProjection;
      varying vec3 vPosition;
      varying vec3 vColor;
      varying vec3 vNormal;
      void main () {
          vec4 position = vec4(aPosition, 1.0);
          gl_Position = uProjection * uView * uModel * position;
          // gl_Position is the final destination for storing
          //  positional data for the rendered vertex
          vColor = aColor;
          vNormal = aNormal;
          vPosition = (uModel * position).xyz;
      }
  `;
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderCode);
  gl.compileShader(vertexShader);

  // FRAGMENT SHADER
  var fragmentShaderCode = `
      precision mediump float;
      varying vec3 vColor;
      uniform vec3 uLightConstant;      
      uniform float uAmbientIntensity; 
      varying vec3 vPosition;
      varying vec3 vNormal;
      uniform vec3 uLightPosition;
      uniform vec3 uViewerPosition;
      uniform mat3 uNormalModel;
      void main() {
          vec3 ambient = uLightConstant * uAmbientIntensity;
          vec3 lightDirection = uLightPosition - vPosition;
          vec3 normalizedLight = normalize(lightDirection);
          vec3 normalizedNormal = normalize(uNormalModel * vNormal);
          float cosTheta = dot(normalizedNormal, normalizedLight);
          vec3 diffuse = vec3(0.0, 0.0, 0.0);
          if (cosTheta > 0.0) {
              float diffuseIntensity = cosTheta;
              diffuse = uLightConstant * diffuseIntensity;
          }
          vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
          vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
          float cosPhi = dot(normalizedReflector, normalizedViewer);
          vec3 specular = vec3(0., 0., 0.);
          if (cosPhi > 0.) {
              float shininessConstant = 100.0;    // bare minimum spec for metal
              float specularIntensity = pow(cosPhi, shininessConstant);
              specular = uLightConstant * specularIntensity;
          }
          vec3 phong = ambient + diffuse + specular;
          gl_FragColor = vec4(phong * vColor, 1.0);
          // gl_FragColor is the final destination for storing
          //  color data for the rendered fragment
      }
  `;
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderCode);
  gl.compileShader(fragmentShader);

  // Comparing to C-Programming, we may imagine
  //  that up to this step we have created two
  //  object files (.o), for the vertex and fragment shaders

  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  // Local variables
  var isAnimated = false;
  var theta = 0.0;
  var direction = "";
  var dX = 0.01;
  var dY = 0.01;
  // For the model (all linear transformation)
  var uModel = gl.getUniformLocation(shaderProgram, "uModel");

  // For the camera
  var camera = [1.0, 0.0, 7.5]; //7.5 unit from the origin outwards the screen
  var uView = gl.getUniformLocation(shaderProgram, "uView");
  var view = glMatrix.mat4.create();  // Create an identity matrix
  glMatrix.mat4.lookAt(
      view,
      camera,
      [camera[0], 5.0, -10.0],
      [-10.0, 10.0, 10.0]
  );
  gl.uniformMatrix4fv(uView, false, view);

  // For the projection
  var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
  var perspective = glMatrix.mat4.create();
  glMatrix.mat4.perspective(
      perspective,
      ((Math.PI / 2) - 15),  //75 degrees of camera 
      1.0,
      0.5,
      50.0
  );
  gl.uniformMatrix4fv(uProjection, false, perspective);

  // For the lighting and shading
  var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
  // Ambient
  var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
  gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // white color
  gl.uniform1f(uAmbientIntensity, 0.418);             // 60% intensity
  // Diffuse
  var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
  gl.uniform3fv(uLightPosition, [4.5, -1.0, -3.0]);
  var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
  // Specular
  var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");

  // Local functions
  // MOUSE
  var dragging, prevx, prevy, rotation = glMatrix.mat4.create();
  function onMouseDown(event) {
      var x = event.clientX;
      var y = event.clientY;
      var rect = event.target.getBoundingClientRect();
      if (
          rect.left <= x &&
          rect.right >= x &&
          rect.top <= y &&
          rect.bottom >= y
      ) {
          dragging = true;
          prevx = x;
          prevy = y;
      }
  }
  function onMouseUp(event) {
      dragging = false;
  }
  function onMouseMove(event) {
      if (dragging) {
          var x = event.clientX;
          var y = event.clientY;
          var xdiff = x - prevx;
          var ydiff = y - prevy;
          var inverseRotation = glMatrix.mat4.create();
          glMatrix.mat4.invert(inverseRotation, rotation);
          var xAxis = [1, 0, 0, 0];
          var yAxis = [0, 1, 0, 0];
          glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
          glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
          glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
          glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
          prevx = x;
          prevy = y;
      }
  }
  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mousemove", onMouseMove);

  // KEYBOARD or even for changing the camera location
  function onKeyDown(event) {
      switch (event.keyCode) {
          case 87: // Object UP
              direction = "up";
              break;
          case 83: // Object DOWN
              direction = "down";
              break;
          case 68: // Object RIGHT
              direction = "right";
              break;
          case 65: // Object LEFT
              direction = "left";
              break;

              case 73: // Object UP
              direction = "up";
              break;
          case 75: // Object Down
              direction = "down";
              break;
         case 74:
     
             camera[0] += 0.05;
              gl.uniform3fv(uViewerPosition, camera);
              glMatrix.mat4.lookAt(
                  view,
                  camera,
                  [camera[0], 0.0, -10.0],
                  [0.0, 1.0, 0.0]
              );
              gl.uniformMatrix4fv(uView, false, view);
            
              break;
          case 76:
             camera[0] -= 0.05;
             gl.uniform3fv(uViewerPosition, camera);
             glMatrix.mat4.lookAt(
                 view,
                 camera,
                 [camera[0], 0.0, -10.0],
                 [0.0, 1.0, 0.0]
             );
             gl.uniformMatrix4fv(uView, false, view);
             break;

          case 38: // Camera UP
              camera[1] += 1;
              gl.uniform3fv(uViewerPosition, camera);
              glMatrix.mat4.lookAt(
                  view,
                  camera,
                  [camera[0], 0.0, -10.0],
                  [0.0, 1.0, 0.0]
              );
              gl.uniformMatrix4fv(uView, false, view);
              break;
          case 40: // Camera DOWN
              camera[1] -= 1;
              gl.uniform3fv(uViewerPosition, camera);
              glMatrix.mat4.lookAt(
                  view,
                  camera,
                  [camera[0], 0.0, -10.0],
                  [0.0, 1.0, 0.0]
              );
              gl.uniformMatrix4fv(uView, false, view);
              break;
          case 39: // Camera RIGHT
              camera[0] += 1;
              gl.uniform3fv(uViewerPosition, camera);
              glMatrix.mat4.lookAt(
                  view,
                  camera,
                  [camera[0], 0.0, -10.0],
                  [0.0, 1.0, 0.0]
              );
              gl.uniformMatrix4fv(uView, false, view);
              break;
          case 37: // Camera LEFT
              camera[0] -= 1;
              gl.uniform3fv(uViewerPosition, camera);
              glMatrix.mat4.lookAt(
                  view,
                  camera,
                  [camera[0], 0.0, -10.0],
                  [0.0, 1.0, 0.0]
              );
              gl.uniformMatrix4fv(uView, false, view);
              break;
          default:
              break;
      }
  }
  function onKeyUp(event) {
      direction = "back";
  }
  function onKeyPress(event) {
      console.log('keypress');
      if (event.keyCode == 32) {  // Space button
          isAnimated = !isAnimated;
      }
  }
  document.addEventListener("keypress", onKeyPress)
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);

  // Teach the GPU how to collect
  //  the positional values from ARRAY_BUFFER
  //  for each vertex being processed
  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(
      aPosition,
      3,
      gl.FLOAT,
      false,
      9 * Float32Array.BYTES_PER_ELEMENT,
      0);
  gl.enableVertexAttribArray(aPosition);
  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(
      aColor,
      3,
      gl.FLOAT,
      false,
      9 * Float32Array.BYTES_PER_ELEMENT,
      3 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aColor);
  var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
  gl.vertexAttribPointer(
      aNormal,
      3,
      gl.FLOAT,
      false,
      9 * Float32Array.BYTES_PER_ELEMENT,
      6 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aNormal);

  function render() {
      gl.enable(gl.DEPTH_TEST);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      var model = glMatrix.mat4.create();
      if (isAnimated) {
          theta += 0.00001;
      }
      switch (direction) {
          case "up":
              dY += 0.1;
              break;
          case "down":
              dY -= 0.1;
              break;
          case "left":
              dX -= 0.1;
              break;
          case "right":
              dX += 0.1;
              break;

          default:
              break;
      }
      glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
      glMatrix.mat4.rotateZ(rotation, rotation, theta);
      glMatrix.mat4.rotateY(rotation, rotation, theta);
      glMatrix.mat4.multiply(model, model, rotation);
      gl.uniformMatrix4fv(uModel, false, model);

      // For transforming the normal vector
      var normalModel = glMatrix.mat3.create();
      glMatrix.mat3.normalFromMat4(normalModel, model);
      gl.uniformMatrix3fv(uNormalModel, false, normalModel);

      gl.drawElements(gl.TRIANGLES, indices.length,
          gl.UNSIGNED_SHORT, 0);
      requestAnimationFrame(render);

  }
  requestAnimationFrame(render);
}