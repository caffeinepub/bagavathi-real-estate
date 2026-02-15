export default function AnimatedDivider() {
  return (
    <div className="relative w-full h-px my-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse opacity-50" />
    </div>
  );
}
