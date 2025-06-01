"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  {
    title: "Personal Information",
    description: "Tell us a bit about yourself",
  },
  {
    title: "Investment Goals",
    description: "Set your financial objectives",
  },
  {
    title: "Risk Assessment",
    description: "Understand your risk tolerance",
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // When all steps are complete, redirect to dashboard
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-3xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center border-2 ${
                    index <= currentStep
                      ? "border-primary bg-primary text-white"
                      : "border-muted-foreground text-muted-foreground"
                  }`}
                >
                  {index < currentStep ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 w-16 mx-2 ${
                      index < currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={currentStep}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              {steps[currentStep].title}
            </h2>
            <p className="text-muted-foreground mb-6">
              {steps[currentStep].description}
            </p>

            {/* Placeholder for step content */}
            <div className="min-h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-muted-foreground">
                Step {currentStep + 1} content will go here
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-4">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </Button>
              )}
              <Button onClick={handleNext}>
                {currentStep === steps.length - 1 ? "Complete" : "Next"}
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}