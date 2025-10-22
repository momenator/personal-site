import CodeBlock from "@/components/CodeBlock";

const blogPosts = [
  {
    title: "On Brutalism in Web Design",
    date: "2024-03-15",
    content: "Brutalism strips away the unnecessary. It's honest, raw, functional.",
    code: `const brutalist = {
  design: 'function over form',
  aesthetic: 'raw and honest',
  philosophy: 'less is more'
};`,
  },
  {
    title: "Minimalist Code Practices",
    date: "2024-02-28",
    content: "Clean code isn't just about aesthetics. It's about clarity and purpose.",
    code: `// Write code that speaks for itself
function createUser(name: string) {
  return { name, created: new Date() };
}`,
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

        <div className="space-y-20 max-w-3xl">
          {blogPosts.map((post, index) => (
            <article key={index} className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {post.title}
                </h2>
                <time className="text-sm text-grey-500 font-mono">{post.date}</time>
              </div>

              <p className="text-lg leading-relaxed text-grey-600">{post.content}</p>

              <CodeBlock code={post.code} language="javascript" />

              <div className="w-full h-px bg-grey-300"></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
