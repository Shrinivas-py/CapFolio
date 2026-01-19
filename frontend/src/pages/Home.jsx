import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Trade Smarter with{" "}
          <span className="text-purple-400">CapFolio</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Funded accounts, intelligent trading goals, real-time stock insights
          and AI-powered decision making — all in one platform.
        </p>

        <div className="mt-10 flex gap-4">
          <Link to="/chat" className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold shadow-lg">
            Ask AI
          </Link>

          <Link to="/forms" className="px-6 py-3 rounded-xl border border-purple-400 text-purple-300 hover:bg-purple-800/40 transition font-semibold">
            Get Funded
          </Link>

        </div>
      </section>
      <section className="px-6 py-20 bg-black/30 backdrop-blur">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why CapFolio?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Funded Accounts", desc: "Trade with virtual capital and scale based on performance." },
            { title: "Smart Goals", desc: "Set trading goals with AI-backed performance tracking." },
            { title: "AI Insights", desc: "Ask AI about stocks, strategies, and market sentiment." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/40 to-black border border-purple-500/20 hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">
          Start Your Trading Journey Today
        </h2>
        <p className="text-gray-400 mt-4">
          Join CapFolio and trade with confidence.
        </p>

        <Link to="/contact" className="inline-block mt-8 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
