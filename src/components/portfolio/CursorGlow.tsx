import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 150, damping: 20 });
  const sy = useSpring(y, { stiffness: 150, damping: 20 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
      setVisible(true);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[2] h-[500px] w-[500px] rounded-full"
      style={{
        x: sx,
        y: sy,
        opacity: visible ? 0.5 : 0,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--lime) 22%, transparent) 0%, transparent 60%)",
      }}
    />
  );
}
