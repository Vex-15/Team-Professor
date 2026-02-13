"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import type { MealPlanResponse } from "@/types/meal-plan";

interface MealPlanResultsProps {
  data: MealPlanResponse;
  className?: string;
}

/* --------- FIXED VARIANTS --------- */

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function renderMealDescription(description: unknown) {
  if (typeof description === "string") {
    return <p className="text-[#111827] leading-relaxed">{description}</p>;
  }

  if (
    typeof description === "object" &&
    description !== null &&
    "name" in description
  ) {
    const d = description as {
      name?: string;
      ingredients?: string[];
      protein_estimate?: string;
    };

    return (
      <div className="space-y-3">
        {d.name && (
          <h4 className="text-lg font-bold text-[#111827]">{d.name}</h4>
        )}

        {Array.isArray(d.ingredients) && d.ingredients.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {d.ingredients.map((ingredient, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-[#111827]"
              >
                {ingredient}
              </span>
            ))}
          </div>
        )}

        {d.protein_estimate && (
          <div className="inline-flex items-center gap-1.5 rounded-full bg-lime-100 px-3 py-1 text-xs font-medium text-lime-800 border border-lime-200">
            <span>Protein:</span>
            <span className="font-semibold">{d.protein_estimate}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <p className="text-sm text-gray-500">Unable to display meal details.</p>
  );
}

export function MealPlanResults({
  data,
  className = "",
}: MealPlanResultsProps) {
  const {
    _thinking,
    meal_plan = {},
    nutrition_analysis = { strengths: [], weaknesses: [] },
    tradeoffs = "",
    cheap_substitutions = [],
    practical_tips = "",
  } = data;

  const meals = Object.entries(meal_plan).sort(
    (a, b) =>
      (Number(a[0].match(/\d+/)?.[0]) || 0) -
      (Number(b[0].match(/\d+/)?.[0]) || 0),
  );

  if (meals.length === 0) return null;

  return (
    <section
      className={`space-y-8 transition-subtle ${className}`}
      aria-label="Meal plan results"
    >
      {/* AI Strategy Card */}
      <AnimatePresence>
        {_thinking && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border-2 border-lime-200 bg-lime-50/80 p-6 shadow-md"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-[#a3e635] p-2">
                <TrendingUp className="w-5 h-5 text-[#111827]" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  Chef&apos;s Insight
                </h3>
                <p className="text-sm text-[#111827]/80 leading-relaxed">
                  {_thinking}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Meal Cards */}
      <div className="space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-[#111827]"
        >
          Your Meal Plan
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {meals.map(([key, description], index) => (
              <motion.div
                key={key}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-all hover:shadow-lg"
              >
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {key.replace(/_/g, " ")}
                </h3>
                {renderMealDescription(description)}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
