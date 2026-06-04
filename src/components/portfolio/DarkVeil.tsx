import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle, Vec2 } from "ogl";

interface DarkVeilProps {
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
}

const vertex = `
attribute vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `
precision highp float;

uniform float uTime;
uniform float uHueShift;
uniform float uNoiseIntensity;
uniform float uScanlineIntensity;
uniform float uScanlineFrequency;
uniform float uWarpAmount;
uniform vec2 uResolution;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

vec3 hueRotate(vec3 color, float angle) {
  float s = sin(angle);
  float c = cos(angle);
  mat3 m = mat3(
    vec3(0.213 + 0.787 * c - 0.213 * s, 0.213 - 0.213 * c + 0.787 * s, 0.213 - 0.213 * c - 0.213 * s),
    vec3(0.715 - 0.715 * c - 0.715 * s, 0.715 + 0.285 * c + 0.140 * s, 0.715 - 0.715 * c + 0.715 * s),
    vec3(0.072 - 0.072 * c + 0.928 * s, 0.072 - 0.072 * c - 0.072 * s, 0.072 + 0.928 * c + 0.072 * s)
  );
  return clamp(color * m, 0.0, 1.0);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  vec2 centered = uv - 0.5;
  centered.x *= uResolution.x / max(uResolution.y, 1.0);

  float t = uTime;
  float warp = noise(uv * 3.0 + t * 0.18) - 0.5;
  uv += vec2(warp * uWarpAmount, warp * uWarpAmount * 0.45);

  float veilA = sin((uv.x * 4.2 + uv.y * 2.1) + t * 0.75) * 0.5 + 0.5;
  float veilB = noise(uv * 4.5 + vec2(t * 0.14, -t * 0.09));
  float radial = smoothstep(0.98, 0.05, length(centered));

  vec3 base = vec3(0.010, 0.012, 0.030);
  vec3 blue = vec3(0.055, 0.165, 0.620);
  vec3 violet = vec3(0.180, 0.065, 0.330);
  vec3 color = mix(base, blue, veilA * 0.48 * radial);
  color = mix(color, violet, veilB * 0.28 * radial);

  float scanline = sin(uv.y * max(uScanlineFrequency, 1.0) * 3.14159);
  color += scanline * uScanlineIntensity;
  color += (noise(gl_FragCoord.xy + t * 42.0) - 0.5) * uNoiseIntensity;
  color = hueRotate(color, uHueShift);

  gl_FragColor = vec4(color, 1.0);
}
`;

export function DarkVeil({
  hueShift = 0,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 0.5,
  scanlineFrequency = 0,
  warpAmount = 0,
}: DarkVeilProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      alpha: true,
      antialias: false,
      depth: false,
      dpr: Math.min(window.devicePixelRatio, 2),
    });
    const { gl } = renderer;
    gl.canvas.style.display = "block";
    gl.canvas.style.height = "100%";
    gl.canvas.style.width = "100%";
    container.appendChild(gl.canvas);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uHueShift: { value: hueShift },
        uNoiseIntensity: { value: noiseIntensity },
        uScanlineIntensity: { value: scanlineIntensity },
        uScanlineFrequency: { value: scanlineFrequency },
        uWarpAmount: { value: warpAmount },
        uResolution: { value: new Vec2(1, 1) },
      },
    });

    const mesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program,
    });

    let animationFrame = 0;

    const resize = () => {
      const width = container.clientWidth || 1;
      const height = container.clientHeight || 1;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value.set(width * renderer.dpr, height * renderer.dpr);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const update = (time: number) => {
      program.uniforms.uTime.value = time * 0.001 * speed;
      renderer.render({ scene: mesh });
      animationFrame = requestAnimationFrame(update);
    };
    animationFrame = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      program.remove();
      gl.canvas.remove();
    };
  }, [hueShift, noiseIntensity, scanlineFrequency, scanlineIntensity, speed, warpAmount]);

  return <div ref={containerRef} className="h-full w-full" aria-hidden />;
}

export default DarkVeil;
