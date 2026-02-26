import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      slug: "campusblooms",
      title: "How I Built CampusBlooms",
      date: "Feb 2026",
    },
  ];

  return (
    <div className="container">
      <h1>Blog</h1>

      {posts.map((post) => (
        <div key={post.slug} style={{ marginTop: "2rem" }}>
          <Link to={`/blog/${post.slug}`}>
            <h2 style={{ cursor: "pointer" }}>{post.title}</h2>
          </Link>
          <p style={{ opacity: 0.7 }}>{post.date}</p>
        </div>
      ))}
    </div>
  );
}