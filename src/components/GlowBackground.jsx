export default function GlowBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[120px]" />
    </div>
  );
}
