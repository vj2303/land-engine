"use client";

import { stats, leads } from "@/data/dummy";

export default function DashboardPage() {
  const stageDistribution = [
    { label: "New", count: leads.filter((l) => l.stage === "new").length, color: "bg-blue-500" },
    { label: "Qualified", count: leads.filter((l) => l.stage === "qualified").length, color: "bg-gold" },
    { label: "Site Visit", count: leads.filter((l) => l.stage === "site_visit").length, color: "bg-purple-500" },
    { label: "Negotiation", count: leads.filter((l) => l.stage === "negotiation").length, color: "bg-orange-500" },
    { label: "Closed", count: leads.filter((l) => l.stage === "closed").length, color: "bg-green-500" },
  ];

  const sourceBreakdown = {
    meta: leads.filter((l) => l.source === "meta").length,
    google: leads.filter((l) => l.source === "google").length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold">Dashboard</h1>
        <p className="text-white/50 mt-1">Complete overview of your land lead engine performance.</p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-forest-light rounded-2xl p-5 border border-white/5">
          <p className="text-white/40 text-xs">Total Leads</p>
          <p className="text-3xl font-bold mt-1">{stats.totalLeads}</p>
        </div>
        <div className="bg-forest-light rounded-2xl p-5 border border-white/5">
          <p className="text-white/40 text-xs">Qualified</p>
          <p className="text-3xl font-bold mt-1 text-gold">{stats.qualifiedLeads}</p>
        </div>
        <div className="bg-forest-light rounded-2xl p-5 border border-white/5">
          <p className="text-white/40 text-xs">Site Visits</p>
          <p className="text-3xl font-bold mt-1">{stats.siteVisits}</p>
        </div>
        <div className="bg-forest-light rounded-2xl p-5 border border-white/5">
          <p className="text-white/40 text-xs">Closed Deals</p>
          <p className="text-3xl font-bold mt-1 text-green-400">{stats.closedDeals}</p>
        </div>
        <div className="bg-forest-light rounded-2xl p-5 border border-white/5">
          <p className="text-white/40 text-xs">Conversion Rate</p>
          <p className="text-3xl font-bold mt-1">{stats.conversionRate}%</p>
        </div>
      </div>

      {/* Financial + Response Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl p-5 border border-gold/20">
          <p className="text-gold/60 text-xs">Ad Spend</p>
          <p className="text-2xl font-bold text-gold mt-1">{stats.adSpend}</p>
        </div>
        <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl p-5 border border-gold/20">
          <p className="text-gold/60 text-xs">Cost Per Lead</p>
          <p className="text-2xl font-bold text-gold mt-1">{stats.costPerLead}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl p-5 border border-green-500/20">
          <p className="text-green-400/60 text-xs">Revenue</p>
          <p className="text-2xl font-bold text-green-400 mt-1">{stats.revenue}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl p-5 border border-green-500/20">
          <p className="text-green-400/60 text-xs">ROI</p>
          <p className="text-2xl font-bold text-green-400 mt-1">{stats.roi}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Pipeline Distribution */}
        <div className="bg-forest-light rounded-2xl p-6 border border-white/5">
          <h3 className="font-bold mb-4">Pipeline Distribution</h3>
          <div className="space-y-3">
            {stageDistribution.map((stage) => (
              <div key={stage.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-white/70">{stage.label}</span>
                  <span className="text-sm font-bold">{stage.count}</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${stage.color} rounded-full transition-all`}
                    style={{ width: `${(stage.count / leads.length) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Source Breakdown */}
        <div className="bg-forest-light rounded-2xl p-6 border border-white/5">
          <h3 className="font-bold mb-4">Lead Sources</h3>
          <div className="flex items-center justify-center gap-8 py-6">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-blue-500/20 border-4 border-blue-500 flex items-center justify-center mb-3 mx-auto">
                <span className="text-2xl font-bold text-blue-400">{sourceBreakdown.meta}</span>
              </div>
              <p className="text-sm font-semibold">Meta Ads</p>
              <p className="text-white/40 text-xs">{((sourceBreakdown.meta / leads.length) * 100).toFixed(0)}%</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-red-500/20 border-4 border-red-500 flex items-center justify-center mb-3 mx-auto">
                <span className="text-2xl font-bold text-red-400">{sourceBreakdown.google}</span>
              </div>
              <p className="text-sm font-semibold">Google Ads</p>
              <p className="text-white/40 text-xs">{((sourceBreakdown.google / leads.length) * 100).toFixed(0)}%</p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2 text-white/60">Response Time</h4>
            <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-gold text-3xl font-bold">{stats.avgResponseTime}</p>
                <p className="text-white/30 text-xs">Average first response</p>
              </div>
              <div className="text-right">
                <p className="text-white/50 text-sm">Industry avg: 2 hours</p>
                <p className="text-green-400 text-xs font-semibold">66x faster</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Leads Table */}
      <div className="bg-forest-light rounded-2xl border border-white/5 overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5">
          <h3 className="font-bold">Recent Leads</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left px-6 py-3 text-white/40 font-medium">Name</th>
              <th className="text-left px-6 py-3 text-white/40 font-medium">Plot</th>
              <th className="text-left px-6 py-3 text-white/40 font-medium">Budget</th>
              <th className="text-left px-6 py-3 text-white/40 font-medium">Stage</th>
              <th className="text-left px-6 py-3 text-white/40 font-medium">Score</th>
              <th className="text-left px-6 py-3 text-white/40 font-medium">Source</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-6 py-3 font-semibold">{lead.name}</td>
                <td className="px-6 py-3 text-white/60">{lead.plotInterest}</td>
                <td className="px-6 py-3 text-gold">{lead.budget}</td>
                <td className="px-6 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      lead.stage === "new"
                        ? "bg-blue-500/20 text-blue-400"
                        : lead.stage === "qualified"
                        ? "bg-gold/20 text-gold"
                        : lead.stage === "site_visit"
                        ? "bg-purple-500/20 text-purple-400"
                        : lead.stage === "negotiation"
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {lead.stage.replace("_", " ")}
                  </span>
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          lead.score >= 80 ? "bg-green-500" : lead.score >= 50 ? "bg-yellow-500" : "bg-red-500"
                        }`}
                        style={{ width: `${lead.score}%` }}
                      />
                    </div>
                    <span className="text-white/60">{lead.score}</span>
                  </div>
                </td>
                <td className="px-6 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      lead.source === "meta" ? "bg-blue-500/20 text-blue-400" : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {lead.source === "meta" ? "Meta" : "Google"}
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
