document.addEventListener("mousemove", (e: MouseEvent) => {
  const x: number = (e.clientX / window.innerWidth) * 100;
  const y: number = (e.clientY / window.innerHeight) * 100;
  document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent, black 150%)`;
});
