export default function Forms() {
  return (
    <div className="min-h-screen pt-32 bg-gray-950 text-white">
      <div className="max-w-xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8 text-purple-400">
          Funded Account Application
        </h1>

        <div className="bg-black/40 p-8 rounded-2xl border border-white/10 space-y-4">
          <input className="w-full p-3 rounded bg-black border border-white/10" placeholder="Name" />
          <input className="w-full p-3 rounded bg-black border border-white/10" placeholder="Email" />
          <input className="w-full p-3 rounded bg-black border border-white/10" placeholder="Trading Experience" />
          <select className="w-full p-3 rounded bg-black text-white border border-white/10 appearance-none focus:ring-2 focus:ring-purple-500"> 
          <option className="bg-black text-white">Interested In</option> 
          <option className="bg-black text-white">Funded Accounts</option> 
          <option className="bg-black text-white">Stock Market Learning</option> 
          <option className="bg-black text-white">Forex Trading</option> 
          <option className="bg-black text-white">Crypto Currency</option> </select>

          <button className="w-full py-3 mt-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold">
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}
