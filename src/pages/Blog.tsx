import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "brutalism-in-web-design",
    title: "On Brutalism in Web Design",
    date: "2024-03-15",
    excerpt: "Brutalism strips away the unnecessary. It's honest, raw, functional.",
    readTime: "5 min",
  },
  {
    id: "minimalist-code-practices",
    title: "Minimalist Code Practices",
    date: "2024-02-28",
    excerpt: "Clean code isn't just about aesthetics. It's about clarity and purpose.",
    readTime: "4 min",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-20 md:space-y-28">
        {/* Header */}
        <header className="space-y-6">
          <span className="label-stark">Writing</span>
          <h1 className="text-display-lg font-display text-monumental">BLOG</h1>
        </header>

        {/* Blog list */}
        <div className="max-w-3xl">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.id}`}
              className="group block border-t border-foreground/10 py-10 md:py-14 transition-colors hover:bg-foreground/[0.02]"
            >
              <article className="grid grid-cols-12 gap-4 md:gap-8">
                {/* Index */}
                <div className="col-span-2 md:col-span-1">
                  <span className="font-mono text-xs text-grey-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="col-span-10 md:col-span-8 space-y-3">
                  <h2 className="text-lg md:text-xl font-medium tracking-tight group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h2>
                  <p className="text-sm text-grey-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Meta */}
                <div className="col-span-12 md:col-span-3 flex md:flex-col gap-3 md:gap-1 md:items-end md:text-right pt-2 md:pt-0">
                  <time className="text-xs font-mono text-grey-300">{post.date}</time>
                  <span className="text-xs font-mono text-grey-300">{post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
          {/* Bottom border */}
          <div className="border-t border-foreground/10"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
