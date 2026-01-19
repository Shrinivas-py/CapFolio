import ReactMarkdown from "react-markdown";

function AIMessage({ data }) {
  if (!data) return null;
  const text =
    typeof data === "object" ? data.output || JSON.stringify(data) : data;

  return (
    <div className="prose prose-invert max-w-none text-sm">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default AIMessage;
