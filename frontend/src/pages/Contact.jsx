export default function Contact() {
  return (
    <div className="min-h-screen pt-32 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h1 className="text-4xl font-bold text-purple-400 mb-6">
          Contact Us
        </h1>

        <p className="text-gray-300 mb-10">
          Reach out for partnerships, queries, or support.
        </p>

        <div className="flex justify-center gap-6">
          <a className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition" href="mailto: shrinivasrj734@gmail.com">
            Email
          </a>
          <a className="px-6 py-3 rounded-xl border border-purple-500 hover:bg-purple-800/30 transition" href="https://www.linkedin.com/company/capfolioo/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
