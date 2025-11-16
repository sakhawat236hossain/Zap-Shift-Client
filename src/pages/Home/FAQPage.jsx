import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does this posture corrector work?",
      a: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. It helps reduce pain and improves posture by keeping your body aligned.",
    },
    {
      q: "Is it suitable for all ages and body types?",
      a: "Yes, posture correctors are typically designed to fit a wide range of ages and body types.",
    },
    {
      q: "Does it really help with back pain and posture improvement?",
      a: "Most users experience improvement in posture and reduction in back pain with consistent use.",
    },
    {
      q: "Does it have smart features like vibration alerts?",
      a: "Some advanced models include vibration reminders when you slouch.",
    },
    {
      q: "How will I be notified when the product is back in stock?",
      a: "You can sign up for email alerts on the product page to receive restock notifications.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
      <div className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">Frequently Asked Questions (FAQ)</h1>
        <p className="text-gray-600">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      </div>

      <div className="max-w-3xl w-full space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`border rounded-xl bg-white transition-all duration-300 overflow-hidden ${openIndex === i ? "shadow-md border-green-400" : ""}`}
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left font-medium"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {item.q}
              {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {openIndex === i && (
              <div className="px-4 pb-4 text-gray-600">{item.a}</div>
            )}
          </div>
        ))}
      </div>

      <button className="mt-10 bg-lime-400 px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-lime-500 transition">
        See More FAQ's <ArrowUpRight size={18} />
      </button>
    </div>
  );
};

export default FAQPage;
