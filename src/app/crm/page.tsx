"use client";

import { leads } from "@/data/dummy";
import { useState } from "react";

const stages = [
  { key: "new", label: "New", color: "bg-blue-500" },
  { key: "qualified", label: "Qualified", color: "bg-gold" },
  { key: "site_visit", label: "Site Visit", color: "bg-purple-500" },
  { key: "negotiation", label: "Negotiation", color: "bg-orange-500" },
  { key: "closed", label: "Closed", color: "bg-green-500" },
] as const;

export default function CRMPage() {
  const [selectedLead, setSelectedLead] = useState<string | null>(null);
  const selected = leads.find((l) => l.id === selectedLead);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Flow indicator */}
      <div className="flex items-center justify-center gap-3 mb-8 text-sm text-white/50">
        <span className="text-white/30 px-3 py-1">1. Traffic</span>
        <span>→</span>
        <span className="text-white/30 px-3 py-1">2. Landing Page</span>
        <span>→</span>
        <span className="text-white/30 px-3 py-1">3. Capture</span>
        <span>→</span>
        <span className="bg-gold text-forest-dark px-3 py-1 rounded-full font-semibold">4. CRM Pipeline</span>
        <span>→</span>
        <span className="text-white/30 px-3 py-1">5. Nurture</span>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-extrabold">CRM Pipeline</h1>
        <p className="text-white/50 mt-1">Every qualified lead in one pipeline — nothing falls through.</p>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => {
          const stageLeads = leads.filter((l) => l.stage === stage.key);
          return (
            <div key={stage.key} className="min-w-[240px] flex-1">
              {/* Column header */}
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                <h3 className="font-semibold text-sm">{stage.label}</h3>
                <span className="text-white/30 text-xs ml-auto bg-white/5 px-2 py-0.5 rounded-full">
                  {stageLeads.length}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-3">
                {stageLeads.map((lead) => (
                  <button
                    key={lead.id}
                    onClick={() => setSelectedLead(lead.id === selectedLead ? null : lead.id)}
                    className={`w-full text-left bg-forest-light rounded-xl p-4 border transition-all hover:border-gold/30 ${
                      selectedLead === lead.id ? "border-gold" : "border-white/5"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold text-sm">{lead.name}</p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          lead.source === "meta" ? "bg-blue-500/20 text-blue-400" : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {lead.source === "meta" ? "Meta" : "Google"}
                      </span>
                    </div>
                    <p className="text-white/40 text-xs mb-2">{lead.plotInterest}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold text-xs font-semibold">{lead.budget}</span>
                      <div className="flex items-center gap-1">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            lead.score >= 80 ? "bg-green-500" : lead.score >= 50 ? "bg-yellow-500" : "bg-red-500"
                          }`}
                        />
                        <span className="text-white/30 text-xs">{lead.score}</span>
                      </div>
                    </div>
                  </button>
                ))}
                {stageLeads.length === 0 && (
                  <div className="bg-forest-light/50 rounded-xl p-4 border border-dashed border-white/10 text-center">
                    <p className="text-white/20 text-sm">No leads</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lead Detail Panel */}
      {selected && (
        <div className="mt-6 bg-forest-light rounded-2xl p-6 border border-gold/20">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">{selected.name}</h2>
              <p className="text-white/50 text-sm">{selected.phone}</p>
            </div>
            <button onClick={() => setSelectedLead(null)} className="text-white/30 hover:text-white text-xl">
              ×
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-white/40 text-xs">Plot Interest</p>
              <p className="text-sm font-semibold mt-1">{selected.plotInterest}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-white/40 text-xs">Budget</p>
              <p className="text-sm font-semibold mt-1 text-gold">{selected.budget}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-white/40 text-xs">Purpose</p>
              <p className="text-sm font-semibold mt-1">{selected.purpose === "buy" ? "Home Buyer" : "Investor"}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-white/40 text-xs">Timeline</p>
              <p className="text-sm font-semibold mt-1">{selected.timeline}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-white/40 text-xs">Lead Score</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      selected.score >= 80 ? "bg-green-500" : selected.score >= 50 ? "bg-yellow-500" : "bg-red-500"
                    }`}
                    style={{ width: `${selected.score}%` }}
                  />
                </div>
                <span className="text-sm font-bold">{selected.score}</span>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-white/40 text-xs">Source</p>
              <p className="text-sm font-semibold mt-1">{selected.source === "meta" ? "Meta Ads" : "Google Ads"}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-white/40 text-xs">Created</p>
              <p className="text-sm font-semibold mt-1">{selected.createdAt}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-white/40 text-xs">Last Contact</p>
              <p className="text-sm font-semibold mt-1">{selected.lastContact}</p>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-white/40 text-xs mb-1">Notes</p>
            <p className="text-sm">{selected.notes}</p>
          </div>
        </div>
      )}
    </div>
  );
}
