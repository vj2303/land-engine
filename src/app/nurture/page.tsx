"use client";

import { campaigns, leads } from "@/data/dummy";

export default function NurturePage() {
  const coldLeads = leads.filter((l) => l.score < 50);
  const warmLeads = leads.filter((l) => l.score >= 50 && l.score < 80);
  const hotLeads = leads.filter((l) => l.score >= 80);

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
        <span className="text-white/30 px-3 py-1">4. CRM</span>
        <span>→</span>
        <span className="bg-gold text-forest-dark px-3 py-1 rounded-full font-semibold">5. Nurture</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold">Nurture & Campaigns</h1>
        <p className="text-white/50 mt-1">Stay top-of-mind until the buyer is ready.</p>
      </div>

      {/* Lead Temperature */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-forest-light rounded-2xl p-5 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <h3 className="font-semibold text-sm">Cold Leads</h3>
          </div>
          <p className="text-3xl font-bold">{coldLeads.length}</p>
          <p className="text-white/40 text-xs mt-1">Score &lt; 50 — need re-warming</p>
          <div className="mt-3 space-y-2">
            {coldLeads.map((l) => (
              <div key={l.id} className="bg-white/5 rounded-lg px-3 py-2 flex items-center justify-between">
                <span className="text-sm">{l.name}</span>
                <span className="text-red-400 text-xs font-mono">{l.score}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-forest-light rounded-2xl p-5 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <h3 className="font-semibold text-sm">Warm Leads</h3>
          </div>
          <p className="text-3xl font-bold">{warmLeads.length}</p>
          <p className="text-white/40 text-xs mt-1">Score 50-79 — keep nurturing</p>
          <div className="mt-3 space-y-2">
            {warmLeads.map((l) => (
              <div key={l.id} className="bg-white/5 rounded-lg px-3 py-2 flex items-center justify-between">
                <span className="text-sm">{l.name}</span>
                <span className="text-yellow-400 text-xs font-mono">{l.score}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-forest-light rounded-2xl p-5 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <h3 className="font-semibold text-sm">Hot Leads</h3>
          </div>
          <p className="text-3xl font-bold">{hotLeads.length}</p>
          <p className="text-white/40 text-xs mt-1">Score 80+ — ready to close</p>
          <div className="mt-3 space-y-2">
            {hotLeads.map((l) => (
              <div key={l.id} className="bg-white/5 rounded-lg px-3 py-2 flex items-center justify-between">
                <span className="text-sm">{l.name}</span>
                <span className="text-green-400 text-xs font-mono">{l.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campaigns */}
      <h2 className="text-xl font-bold mb-4">WhatsApp Campaigns</h2>
      <div className="space-y-3">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-forest-light rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    campaign.type === "drip"
                      ? "bg-blue-500/20 text-blue-400"
                      : campaign.type === "alert"
                      ? "bg-gold/20 text-gold"
                      : "bg-purple-500/20 text-purple-400"
                  }`}
                >
                  {campaign.type}
                </span>
                <h3 className="font-semibold">{campaign.name}</h3>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  campaign.status === "active"
                    ? "bg-green-500/20 text-green-400"
                    : campaign.status === "paused"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-white/10 text-white/40"
                }`}
              >
                {campaign.status}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-white/40 text-xs">Sent</p>
                <p className="text-lg font-bold">{campaign.sent}</p>
              </div>
              <div>
                <p className="text-white/40 text-xs">Opened</p>
                <p className="text-lg font-bold">{campaign.opened}</p>
                <div className="h-1.5 bg-white/10 rounded-full mt-1 overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${(campaign.opened / campaign.sent) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <p className="text-white/40 text-xs">Replied</p>
                <p className="text-lg font-bold">{campaign.replied}</p>
                <div className="h-1.5 bg-white/10 rounded-full mt-1 overflow-hidden">
                  <div
                    className="h-full bg-gold rounded-full"
                    style={{ width: `${(campaign.replied / campaign.sent) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <p className="text-white/40 text-xs">Leads Generated</p>
                <p className="text-lg font-bold text-green-400">{campaign.leads}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scheduled Follow-ups */}
      <h2 className="text-xl font-bold mt-8 mb-4">Upcoming Follow-ups</h2>
      <div className="bg-forest-light rounded-xl border border-white/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left px-4 py-3 text-white/40 font-medium">Lead</th>
              <th className="text-left px-4 py-3 text-white/40 font-medium">Plot</th>
              <th className="text-left px-4 py-3 text-white/40 font-medium">Type</th>
              <th className="text-left px-4 py-3 text-white/40 font-medium">Scheduled</th>
              <th className="text-left px-4 py-3 text-white/40 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { lead: "Sneha Reddy", plot: "Farmland Plot - Hosur Road", type: "Qualification follow-up", date: "Jul 14, 10:00 AM", status: "pending" },
              { lead: "Kavitha Nair", plot: "Villa Plot - Sarjapur", type: "EMI details share", date: "Jul 14, 2:00 PM", status: "pending" },
              { lead: "Priya Sharma", plot: "Villa Plot - Sarjapur", type: "Site visit reminder", date: "Jul 15, 9:00 AM", status: "scheduled" },
              { lead: "Meera Krishnan", plot: "Investment Plot - Mysore Road", type: "New plot alert", date: "Jul 15, 11:00 AM", status: "scheduled" },
              { lead: "Deepak Joshi", plot: "Farmland Plot - Hosur Road", type: "Welcome sequence #1", date: "Jul 16, 10:00 AM", status: "scheduled" },
            ].map((row, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 font-semibold">{row.lead}</td>
                <td className="px-4 py-3 text-white/60">{row.plot}</td>
                <td className="px-4 py-3">
                  <span className="text-gold text-xs">{row.type}</span>
                </td>
                <td className="px-4 py-3 text-white/60">{row.date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      row.status === "pending" ? "bg-yellow-500/20 text-yellow-400" : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
