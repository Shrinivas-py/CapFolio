export default function About() {
  return (
    <div className="min-h-screen pt-32 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10 text-purple-400">
          About CapFolio
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            ["Our Mission", "Empower traders using AI-driven insights."],
            ["Our Vision", "Make professional trading accessible to everyone."],
            ["Technology", "AI, market data, smart analytics."],
            ["Future", "Automated strategies & risk scoring."]
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                {title}
              </h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
