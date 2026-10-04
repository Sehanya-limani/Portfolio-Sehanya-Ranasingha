import { motion } from "framer-motion";

interface LoadingScreenProps {
  isLeaving: boolean;
}

export default function LoadingScreen({ isLeaving }: LoadingScreenProps) {
  // A modern, elegant, creative geometric loader
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label="Loading Sehanya Ranasingha's portfolio"
      animate={{
        opacity: isLeaving ? 0 : 1,
        y: isLeaving ? "-100%" : "0%",
      }}
      transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
    >
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[40vw] w-[40vw] rounded-full bg-cyan-500/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[30vw] w-[50vw] rounded-full bg-purple-600/20 blur-[100px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex h-28 w-28 items-center justify-center mb-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-[2px] border-cyan-400/40"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.15, 1, 1.15, 1],
                borderRadius: ["20%", "50%", "20%", "50%", "20%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              style={{
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.15)",
              }}
            />
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", bounce: 0.5 }}
            className="text-cyan-300 font-mono font-bold text-2xl tracking-tighter"
          >
            {"<S/>"}
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-4xl font-display font-bold text-white tracking-wide"
          >
            Sehanya Ranasingha
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-3">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-10 bg-white/20" />
            <span className="text-xs md:text-sm text-slate-400 uppercase tracking-[0.3em]">
              Portfolio Loading
            </span>
            <div className="h-[1px] w-10 bg-white/20" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "18rem" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 h-[2px] bg-white/10 relative overflow-hidden rounded-full"
        >
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
