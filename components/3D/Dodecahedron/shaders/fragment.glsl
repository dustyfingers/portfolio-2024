varying vec2 vUv;

void main() {
  // 500.0 is an arbitrary value to "normalize"
  // my coordinate system
  // In these examples consider the value of x 
  // to go from 0 to 1.
  float x = gl_FragCoord.x / 500.0;
  vec3 color = vec3(x);

  gl_FragColor = vec4(color,1.0);
}