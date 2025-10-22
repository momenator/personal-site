import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "brutalism-in-web-design",
    title: "On Brutalism in Web Design",
    date: "2024-03-15",
    excerpt: "Brutalism strips away the unnecessary. It's honest, raw, functional.",
    readTime: "5 min read",
  },
  {
    id: "minimalist-code-practices",
    title: "Minimalist Code Practices",
    date: "2024-02-28",
    excerpt: "Clean code isn't just about aesthetics. It's about clarity and purpose.",
    readTime: "4 min read",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-16">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">BLOG</h1>
          <div className="w-20 h-1 bg-foreground"></div>
        </div>

        <div className="space-y-12 max-w-3xl">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.id}`}
              className="block border-2 border-foreground p-8 brutalist-hover"
            >
              <article className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-3 text-sm text-grey-500 font-mono">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <p className="text-lg text-grey-600">{post.excerpt}</p>

                <div className="pt-2 text-sm font-bold">
                  READ MORE →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
