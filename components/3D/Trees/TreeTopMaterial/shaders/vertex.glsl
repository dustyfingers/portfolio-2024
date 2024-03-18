uniform float u_time;

varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.x += sin(modelPosition.x * 4.0 + u_time * 2.0) * 0.2;
  modelPosition.z += (cos(modelPosition.x * 4.0 + u_time * 2.0) + sin(modelPosition.z * 6.0 + u_time * 2.0)) * 0.05;
  modelPosition.y += (sin(modelPosition.z * 6.0 + u_time * 2.0) + sin(modelPosition.z * 6.0 + u_time * 2.0)) * 0.35;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}