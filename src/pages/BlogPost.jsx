import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
  fetch(`/blog/${slug}.md`)
    .then((res) => res.text())
    .then((text) => setContent(text));
}, [slug]);

  return (
    <div className="container">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}