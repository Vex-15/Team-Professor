"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, AlertCircle } from "lucide-react";
import { MealPlanForm } from "@/components/MealPlanForm";
import { MealPlanResults } from "@/components/MealPlanResults";
import type { MealPlanResponse } from "@/types/meal-plan";

interface MealPlanRequest {
  availableFoods: string;
  budget: number;
  mealsPerDay: number;
  dietType: string;
  goal: string;
}

export default function PlanPage() {
  const [result, setResult] = useState<MealPlanResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resultsRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to results when they appear
  useEffect(() => {
    if (result && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [result]);

  const handleSubmit = useCallback(async (payload: MealPlanRequest) => {
    setError(null);
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch("/api/meal-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate plan");
      }

      setResult(data as MealPlanResponse);
    } catch (err: any) {
      setError(err.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    // Using the global bg color + a subtle dot pattern for texture
    <div className="min-h-screen w-full relative bg-[#f3f4f6]">
      {/* Background Texture (Dot Grid) */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-10 sm:px-6 sm:py-16">
        {/* Navigation */}
        <div className="mb-8 animate-fade-in">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#111827] transition-colors duration-200 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>
        </div>

        {/* Header Section */}
        {/* Uses 'animate-fade-in-up' from your globals.css */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-gray-100 mb-5">
            <Sparkles className="w-6 h-6 text-[#a3e635]" />
          </div>
          {/* Using .font-serif defined in globals.css */}
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight mb-4">
            Generate Your Plan
          </h1>
          <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
            Enter your ingredients and constraints. We&apos;ll craft a
            personalized meal plan in seconds.
          </p>
        </div>

        {/* Form Section */}
        <div className="animate-fade-in-up animate-delay-100">
          <MealPlanForm onSubmit={handleSubmit} disabled={loading} />
        </div>

        {/* Loading State - Using CSS Animations */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 overflow-hidden"
            >
              <div className="rounded-[2rem] bg-[#111827] text-white p-8 text-center shadow-xl relative overflow-hidden">
                {/* CSS Glow Animation from globals.css */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#a3e635] rounded-full blur-[80px] opacity-20 animate-glow" />

                <div className="relative z-10 flex flex-col items-center gap-4">
                  {/* Custom CSS Pulse/Spin */}
                  <div className="w-12 h-12 relative">
                    <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-[#a3e635] rounded-full border-t-transparent animate-spin"></div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold tracking-wide">
                      AI Chef is Thinking...
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                      Analyzing ingredients & optimizing budget
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error State */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 rounded-2xl border border-red-100 bg-white p-4 flex items-start gap-3 text-red-600 shadow-sm"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Generation Failed</p>
                <p className="text-sm text-gray-500 mt-1">{error}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Section */}
        <AnimatePresence>
          {result && !loading && (
            <motion.div
              key="results"
              ref={resultsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="font-serif text-lg font-medium text-[#111827]">
                  Your Personalized Plan
                </span>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>

              <MealPlanResults data={result} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
