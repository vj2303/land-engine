"use client";

import { useState, useRef, useEffect } from "react";
import { qualifierQuestions, plots } from "@/data/dummy";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string;
  time: string;
}

const dummyAnswers = [
  "Around 40-50 lakhs",
  "Bangalore North, near the airport",
  "Looking to build a home for my family",
  "Within 3 months ideally",
];

export default function CapturePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [autoMode, setAutoMode] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  const now = () => new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, sender: "bot", text, time: now() },
      ]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, sender: "user", text, time: now() },
    ]);
  };

  // Start conversation
  useEffect(() => {
    const timer1 = setTimeout(() => {
      addBotMessage(
        `Hi! 👋 Thanks for your interest in *${plots[0].title}*.\n\nI'm the Land Lead Engine assistant. I'll help you get all the details and connect you with our team.\n\nLet me ask you a few quick questions to understand what you're looking for.`
      );
    }, 500);

    const timer2 = setTimeout(() => {
      setStep(0);
      addBotMessage(qualifierQuestions[0].question);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Auto-mode: simulate user answers
  useEffect(() => {
    if (!autoMode || step < 0 || step > 3) return;
    const timer = setTimeout(() => {
      handleSend(dummyAnswers[step]);
    }, 1500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoMode, step, messages]);

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");

    addUserMessage(msg);

    setTimeout(() => {
      if (step < 3) {
        setStep((s) => s + 1);
        addBotMessage(qualifierQuestions[step + 1].question);
      } else if (step === 3) {
        setStep(4);
        addBotMessage(
          `Thank you! Here's a summary:\n\n📍 Budget: ${dummyAnswers[0]}\n📍 Location: ${dummyAnswers[1]}\n📍 Purpose: ${dummyAnswers[2]}\n📍 Timeline: ${dummyAnswers[3]}\n\nYou're a *qualified lead*! 🎉\n\nI'm routing you to our sales team now. Rajiv will call you within 10 minutes.\n\nMeanwhile, here's the plot brochure: [PDF Link]\n\n_Your lead has been added to the CRM pipeline →_`
        );
      }
    }, 300);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Flow indicator */}
      <div className="flex items-center justify-center gap-3 mb-8 text-sm text-white/50">
        <span className="text-white/30 px-3 py-1">1. Traffic</span>
        <span>→</span>
        <span className="text-white/30 px-3 py-1">2. Landing Page</span>
        <span>→</span>
        <span className="bg-gold text-forest-dark px-3 py-1 rounded-full font-semibold">3. Instant Capture</span>
        <span>→</span>
        <span className="text-white/30 px-3 py-1">4. CRM</span>
        <span>→</span>
        <span className="text-white/30 px-3 py-1">5. Nurture</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat */}
        <div className="lg:col-span-2">
          <div className="bg-forest-light rounded-2xl border border-white/5 overflow-hidden flex flex-col h-[600px]">
            {/* Chat header */}
            <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <div>
                <p className="font-semibold text-sm">Land Lead Engine Bot</p>
                <p className="text-white/60 text-xs">
                  {isTyping ? "typing..." : "online"}
                </p>
              </div>
              <div className="ml-auto">
                <button
                  onClick={() => setAutoMode(!autoMode)}
                  className={`text-xs px-3 py-1 rounded-full transition-colors ${
                    autoMode
                      ? "bg-gold text-forest-dark font-bold"
                      : "bg-white/10 text-white/60 hover:bg-white/20"
                  }`}
                >
                  {autoMode ? "Auto Demo ON" : "Auto Demo"}
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0b1f17]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-xl text-sm whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-[#005C4B] text-white rounded-br-none"
                        : "bg-forest-light text-white rounded-bl-none"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-[10px] text-white/30 text-right mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-forest-light px-4 py-2 rounded-xl rounded-bl-none">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="bg-[#1a3329] px-4 py-3 flex items-center gap-3 border-t border-white/5">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={step >= 4 ? "Conversation complete" : "Type your answer..."}
                disabled={step >= 4 || autoMode}
                className="flex-1 bg-forest-light rounded-full px-4 py-2 text-sm outline-none border border-white/5 focus:border-gold/30 disabled:opacity-50"
              />
              <button
                onClick={() => handleSend()}
                disabled={step >= 4 || autoMode}
                className="bg-[#25D366] hover:bg-[#20bd5a] disabled:opacity-50 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Side info */}
        <div className="space-y-4">
          <div className="bg-forest-light rounded-2xl p-5 border border-white/5">
            <h3 className="font-bold text-gold mb-3">How it works</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="bg-gold text-forest-dark w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <div>
                  <p className="font-semibold">Greets instantly</p>
                  <p className="text-white/40 text-xs">Bot picks up 24/7</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="bg-gold text-forest-dark w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <div>
                  <p className="font-semibold">Qualifies in 4 questions</p>
                  <p className="text-white/40 text-xs">Budget · location · purpose · timeline</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="bg-gold text-forest-dark w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <div>
                  <p className="font-semibold">Remembers the buyer</p>
                  <p className="text-white/40 text-xs">Context across days of chat</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="bg-gold text-forest-dark w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <div>
                  <p className="font-semibold">Routes hot leads</p>
                  <p className="text-white/40 text-xs">Pushes to client phone + CRM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-forest-light rounded-2xl p-5 border border-white/5">
            <h3 className="font-bold mb-3">Lead Qualification Progress</h3>
            <div className="space-y-2">
              {qualifierQuestions.map((q, i) => (
                <div key={q.key} className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                      i < step
                        ? "bg-green-500 text-white"
                        : i === step
                        ? "bg-gold text-forest-dark animate-pulse"
                        : "bg-white/10 text-white/30"
                    }`}
                  >
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className={`text-sm ${i < step ? "text-white/80" : i === step ? "text-gold" : "text-white/30"}`}>
                    {q.key.charAt(0).toUpperCase() + q.key.slice(1)}
                  </span>
                </div>
              ))}
            </div>
            {step >= 4 && (
              <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                <p className="text-green-400 font-bold text-sm">Lead Qualified!</p>
                <p className="text-white/40 text-xs mt-1">Routed to CRM →</p>
              </div>
            )}
          </div>

          <div className="bg-forest-light rounded-2xl p-5 border border-white/5 text-center">
            <p className="text-white/40 text-xs mb-1">Avg. response time</p>
            <p className="text-gold text-3xl font-bold">1.8 min</p>
            <p className="text-white/30 text-xs mt-1">vs 2 hours industry avg</p>
          </div>
        </div>
      </div>
    </div>
  );
}
