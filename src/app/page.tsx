"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Search,
  CheckCircle2,
  AlertCircle,
  Leaf,
  Beef,
  Utensils,
  X,
} from "lucide-react";

/* ------------------ Animation Variants ------------------ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
    },
  },
};

/* ------------------ Component ------------------ */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#111827] font-sans selection:bg-[#a3e635] selection:text-[#111827]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={cardVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              Recipe and <br />
              Meal Plan App <br />
              with AI
            </motion.h1>

            <motion.p
              variants={cardVariants}
              className="text-lg text-gray-500 leading-relaxed max-w-lg bg-[#F3F4F6]/80 backdrop-blur-sm rounded-lg p-2"
            >
              Get personalized meal suggestions based on the ingredients you
              have. Choose your diet preference and get detailed health pros &
              cons.
            </motion.p>

            <motion.div
              variants={cardVariants}
              className="flex items-center gap-4 flex-wrap"
            >
              <Link
                href="/plan"
                className="group relative inline-flex items-center gap-3 bg-[#111827] text-white px-8 py-4 rounded-[2rem] font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-200"
              >
                Try for Free
                <div className="w-6 h-6 bg-[#a3e635] rounded-full flex items-center justify-center text-[#111827] transition-transform group-hover:rotate-45">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[500px]"
          >
            <div className="absolute top-0 right-4 w-[90%] h-[350px] bg-white rounded-[2.5rem] shadow-xl p-3 border border-gray-100">
              <div className="w-full h-full bg-gray-50 rounded-[2rem] relative overflow-hidden flex items-center justify-center group">
                <div className="w-48 h-48 bg-gradient-to-tr from-orange-100 to-amber-50 rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-700">
                  <Utensils className="w-16 h-16 text-orange-300 opacity-50" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
