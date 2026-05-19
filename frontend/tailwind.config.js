/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "hover:border-blue-500",
    "hover:border-purple-500",
    "hover:border-pink-500",
    "hover:border-cyan-500",
    "hover:border-amber-500",
    "hover:border-emerald-500",
    "hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]",
    "hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]",
    "hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]",
    "hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]",
    "hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]",
    "hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]",
  ],
  theme: {
    extend: {
      /* ---------------- Fonts ---------------- */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },

      /* ---------------- Portfolio theme ---------------- */
      colors: {
        primary: "#6366F1",
        secondary: "#A855F7",
        accent: "#EC4899",
        surface: "#0b153d",
        "surface-light": "#0f1a42",
        "brand-cyan": "#22d3ee",
        "brand-violet": "#a78bfa",
      },

      /* ---------------- Glow Shadows ---------------- */
      boxShadow: {
        neon: "0 0 30px rgba(99,102,241,0.45), 0 0 60px rgba(168,85,247,0.25)",
        neonPink:
          "0 0 30px rgba(236,72,153,0.45), 0 0 60px rgba(236,72,153,0.25)",
        card: "0 0 0 1px rgba(255,255,255,0.04), 0 10px 40px rgba(0,0,0,0.6)",
      },

      /* ---------------- Backgrounds ---------------- */
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #6366F1, #A855F7, #EC4899)",
        "radial-glow":
          "radial-gradient(circle at top, rgba(99,102,241,0.25), transparent 60%)",
      },

      /* ---------------- Keyframes ---------------- */
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(60px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(30px, -15px)" },
          "66%": { transform: "translate(-20px, 10px)" },
        },
        gradientShift: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 30px rgba(99,102,241,0.4)",
          },
          "50%": {
            boxShadow: "0 0 60px rgba(168,85,247,0.7)",
          },
        },
      },

      /* ---------------- Animations ---------------- */
      animation: {
        fadeIn: "fadeIn 0.9s ease-out forwards",
        slideIn: "slideIn 0.9s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 15s ease-in-out infinite",
        gradientShift: "gradientShift 8s ease-in-out infinite",
        glow: "glowPulse 4s ease-in-out infinite",
      },

      /* ---------------- Blur (Glass UI) ---------------- */
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
