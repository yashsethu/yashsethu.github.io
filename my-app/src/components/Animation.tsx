import { useEffect, useRef } from "react";

export function AnimatedText() {
  const position = useRef({ x: 50, y: 50 });
  const target = useRef({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 100;
      target.current.y = (e.clientY / window.innerHeight) * 100;
    };

    const animate = () => {
      position.current.x += (target.current.x - position.current.x) * 0.05;
      position.current.y += (target.current.y - position.current.y) * 0.05;

      const x = position.current.x;
      const y = position.current.y;
      if (ref.current) {
        ref.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0) 100%), url('https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?cs=srgb&dl=pexels-kaip-1341279.jpg&fm=jpg')`;
        ref.current.style.backgroundSize = "cover";
      }

      requestAnimationFrame(animate);
    };
    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Yash Sethuraman</h1>
    </div>
  );
}
