"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Search,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Wallet,
  Utensils,
  ChevronRight,
  Check,
  Scale,
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
    <div className="min-h-screen bg-white text-[#111827] font-sans selection:bg-[#a3e635] selection:text-[#111827] relative overflow-x-hidden">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
        {/* Soft Gradient Base */}
        <div className="absolute top-0 w-full h-[900px] bg-gradient-to-b from-lime-50/60 via-white to-white" />

        {/* Elegant Wave SVG */}
        <svg
          className="relative w-full h-[700px] -mt-24 opacity-80"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ecfccb"
            fillOpacity="0.6"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 pt-10 lg:pt-16">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Copy & CTA */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={cardVariants}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#111827]">
                  Meal Planning <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111827] to-gray-600">
                    Reimagined
                  </span>{" "}
                  <br />
                  with AI
                </h1>
              </motion.div>

              <motion.p
                variants={cardVariants}
                className="text-lg text-gray-600 leading-relaxed max-w-lg"
              >
                Optimization under constraints, not generic advice. We generate
                meal plans based on your
                <strong>
                  {" "}
                  real budget, available ingredients, and survival needs.
                </strong>
              </motion.p>

              <motion.div
                variants={cardVariants}
                className="flex items-center gap-4 flex-wrap"
              >
                <Link
                  href="/plan"
                  className="group relative inline-flex items-center gap-3 bg-[#111827] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-xl shadow-lime-200/50"
                >
                  Start Planning Free
                  <div className="w-8 h-8 bg-[#a3e635] rounded-full flex items-center justify-center text-[#111827] transition-transform group-hover:rotate-45">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Hero Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block h-[550px] w-full"
            >
              {/* Main Floating Card */}
              <div className="absolute top-4 right-4 w-[90%] h-[400px] bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 p-4 border border-white/50 backdrop-blur-sm">
                <div className="w-full h-full bg-[#fafafa] rounded-[2rem] relative overflow-hidden flex flex-col items-center justify-center group">
                  {/* Abstract Plate */}
                  <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-orange-100 to-yellow-50 flex items-center justify-center mb-6 shadow-inner">
                    <Utensils className="w-24 h-24 text-orange-300 opacity-50" />
                  </div>

                  {/* Floating 'Pills' */}
                  <div className="absolute top-12 left-12 bg-white px-4 py-2 rounded-full shadow-md text-xs font-bold flex items-center gap-2 animate-bounce duration-[3000ms]">
                    <div className="w-2 h-2 rounded-full bg-[#a3e635]" />
                    <span className="text-gray-700">₹500 Budget</span>
                  </div>

                  <div className="absolute bottom-20 right-12 bg-white px-4 py-2 rounded-full shadow-md text-xs font-bold flex items-center gap-2 animate-bounce duration-[4000ms]">
                    <div className="w-2 h-2 rounded-full bg-[#111827]" />
                    <span className="text-gray-700">High Protein</span>
                  </div>
                </div>
              </div>

              {/* Overlapping 'Stats' Card */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-10 left-0 w-[280px] bg-[#111827] text-white p-6 rounded-[2rem] shadow-2xl z-20"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-bold text-lg">Analysis</h4>
                    <p className="text-xs text-gray-400">Nutrient Gaps</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-[#a3e635]">
                    <TrendingUp size={20} />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-[#a3e635] rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 font-mono">
                    <span>Trade-off</span>
                    <span>Acceptable</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              "Budget Aware",
              "Low-Cost Substitutions",
              "Chef's Insight",
              "Constraint Solver",
            ].map((tag, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="px-5 py-2.5 bg-white border border-gray-100 text-gray-600 rounded-full text-sm font-medium shadow-sm hover:border-[#a3e635] hover:text-[#111827] hover:bg-[#fcfdfa] transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </section>

        {/* FEATURE GRID (BENTO STYLE) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24 pt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* FEATURE 1: Constraint-Based Planning */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="h-10 w-10 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-4">
                  <Search size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Constraint Planning
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Optimization under constraints. We strictly respect your
                  budget and available ingredients.
                </p>
              </div>

              {/* UX Mockup: Input Constraints */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="bg-white rounded-xl px-3 py-2.5 flex items-center gap-2 border border-gray-200 shadow-sm mb-3">
                  <Search className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-400">
                    Rice, Dal, Onions...
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-white border border-gray-200 rounded-md text-[10px] font-bold text-[#111827] flex items-center gap-1">
                    <Wallet size={10} className="text-[#a3e635]" /> ₹500 Limit
                  </div>
                  <div className="px-2 py-1 bg-white border border-gray-200 rounded-md text-[10px] font-bold text-gray-500">
                    Veg Only
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FEATURE 2: Survival vs Balanced Mode (Dynamic Logic) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="h-10 w-10 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                  <Scale size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Dynamic Logic
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Switch between "Survival" for tight days and "Balanced" for
                  nutrition.
                </p>
              </div>

              {/* UX Mockup: Mode Toggle */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 h-[100px] flex flex-col items-center justify-center gap-2">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Plan Goal
                </div>
                <div className="flex w-full gap-2 p-1 bg-white rounded-xl border border-gray-200">
                  {/* Survival Mode */}
                  <div className="flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 opacity-50 cursor-pointer hover:bg-gray-50">
                    <AlertTriangle size={12} className="text-orange-500" />
                    <span className="text-[10px] font-bold text-gray-600">
                      Survival
                    </span>
                  </div>
                  {/* Balanced Mode (Active) */}
                  <div className="flex-1 py-2 bg-[#111827] rounded-lg flex items-center justify-center gap-1.5 shadow-md">
                    <CheckCircle2 size={12} className="text-[#a3e635]" />
                    <span className="text-[10px] font-bold text-white">
                      Balanced
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FEATURE 3: Transparent Trade-Offs (Pros & Cons) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-[#111827] text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden lg:col-span-1 md:col-span-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#a3e635] rounded-full blur-[80px] opacity-10" />

              <div className="relative z-10 mb-6">
                <div className="h-10 w-10 bg-white/10 rounded-2xl flex items-center justify-center text-[#a3e635] mb-4">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-xl font-bold">Transparent Trade-offs</h3>
                <p className="text-sm text-gray-400 mt-2">
                  We clarify compromises. We don't pretend it's perfect if the
                  budget is tight.
                </p>
              </div>

              {/* UX Mockup: Honest Analysis */}
              <div className="space-y-3 relative z-10">
                {/* Pro Item */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-start gap-3">
                  <div className="bg-[#a3e635]/20 p-1 rounded-full text-[#a3e635] mt-0.5">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[#a3e635] uppercase tracking-wider mb-1">
                      Budget Met
                    </div>
                    <div className="text-[10px] text-gray-400">
                      Plan fits exactly within ₹500.
                    </div>
                  </div>
                </div>
                {/* Con Item */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-start gap-3">
                  <div className="bg-orange-500/20 p-1 rounded-full text-orange-400 mt-0.5">
                    <AlertTriangle size={10} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-1">
                      Protein Low
                    </div>
                    <div className="text-[10px] text-gray-400">
                      Add Soya Chunks to improve.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM CTA SECTION */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 bg-[#F3F4F6] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#a3e635] rounded-full blur-[120px] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-[#111827] mb-3">
                  Ready to plan responsibly?
                </h2>
                <p className="text-gray-600 text-lg">
                  Experience AI that respects your financial and dietary
                  reality.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href="/plan"
                  className="inline-flex items-center gap-3 bg-[#111827] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-[#111827]/20 transition-all hover:-translate-y-1"
                >
                  Generate My Plan
                  <ChevronRight className="text-[#a3e635]" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
