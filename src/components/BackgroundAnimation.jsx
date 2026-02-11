import { motion } from "framer-motion";

const orbs = [
  { width: "clamp(200px, 40vw, 500px)", left: "10%", top: "15%", delay: 0, color: "rgba(167, 139, 250, 0.12)" },
  { width: "clamp(150px, 30vw, 350px)", right: "5%", top: "40%", delay: 2, color: "rgba(251, 191, 36, 0.08)" },
  { width: "clamp(180px, 35vw, 400px)", left: "30%", bottom: "20%", delay: 1, color: "rgba(192, 132, 252, 0.1)" },
  { width: "clamp(220px, 38vw, 450px)", right: "20%", bottom: "10%", delay: 3, color: "rgba(167, 139, 250, 0.08)" },
  { width: "clamp(160px, 28vw, 320px)", left: "50%", top: "60%", delay: 1.5, color: "rgba(251, 191, 36, 0.06)" },
];

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[80px]"
          style={{
            width: orb.width,
            height: orb.width,
            left: orb.left,
            right: orb.right,
            top: orb.top,
            bottom: orb.bottom,
            background: orb.color,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(167,139,250,0.08),transparent_50%)] animate-gradientShift" />
    </div>
  );
}
