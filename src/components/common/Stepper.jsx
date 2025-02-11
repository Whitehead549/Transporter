import React, { useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const Stepper = ({ barWidth = "60%" }) => {
  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(1);

  const stepPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full px-6 py-8 bg-white shadow-lg rounded-lg">
      <div style={{ width: barWidth, margin: "0 auto" }}>
        <ProgressBar 
          percent={stepPercentage} 
          filledBackground="linear-gradient(to right, #4caf50, #8bc34a)" 
          height={4} 
          className="mb-6"
        >
          {[...Array(totalSteps)].map((_, index) => (
            <Step key={index}>
              {({ accomplished }) => (
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-lg font-semibold transition-all duration-300 
                  ${accomplished ? "bg-green-500 scale-110 shadow-md" : "bg-gray-300"}`}
                >
                  {index + 1}
                </div>
              )}
            </Step>
          ))}
        </ProgressBar>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
          className="px-5 py-3 bg-gray-400 text-white rounded-lg transition duration-300 hover:bg-gray-500 disabled:opacity-50"
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, totalSteps))}
          className="px-5 py-3 bg-green-500 text-white rounded-lg transition duration-300 hover:bg-green-600 disabled:opacity-50"
          disabled={currentStep === totalSteps}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
