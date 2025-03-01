import React, { useState } from "react";
import { useRouter } from "next/router";

const CareerAssessment = () => {
  const [answers, setAnswers] = useState({});
  const router = useRouter();

  const handleInputChange = (question, value) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  const handleSubmit = () => {
    console.log("User Answers:", answers);
    router.push("/results");
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-center">Career Assessment</h2>
        <p className="text-center text-gray-500 mb-4">Answer the questions below to get career recommendations.</p>

        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700">What industry are you interested in?</span>
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="Healthcare, Tech, Trades, etc."
              onChange={(e) => handleInputChange("industry", e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Are you open to training or certifications?</span>
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="Yes / No / Maybe"
              onChange={(e) => handleInputChange("training", e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Are you willing to relocate?</span>
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="Yes / No / Unsure"
              onChange={(e) => handleInputChange("relocation", e.target.value)}
            />
          </label>
        </div>

        <div className="flex justify-center mt-6">
          <button onClick={handleSubmit} className="w-full bg-blue-500 text-white p-2 rounded">
            Submit Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerAssessment;
