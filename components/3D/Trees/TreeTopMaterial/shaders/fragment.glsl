varying vec2 vUv;

void main() {
  float x = gl_FragCoord.y / 500.0;
  vec3 color = vec3(0, 255, 0);

  gl_FragColor = vec4(color,1.0);
}