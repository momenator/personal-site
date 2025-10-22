import { useParams, Link } from "react-router-dom";
import CodeBlock from "@/components/CodeBlock";
import { ArrowLeft } from "lucide-react";

const blogPostsData: Record<string, any> = {
  "brutalism-in-web-design": {
    title: "On Brutalism in Web Design",
    date: "2024-03-15",
    readTime: "5 min read",
    content: [
      {
        type: "text",
        text: "Brutalism strips away the unnecessary. It's honest, raw, functional. In an era of over-designed interfaces drowning in gradients and unnecessary animations, brutalist web design stands as a defiant statement: form follows function, nothing more, nothing less.",
      },
      {
        type: "text",
        text: "The term 'brutalism' originates from the French 'béton brut,' meaning raw concrete. Just as brutalist architecture exposed structural elements without decoration, brutalist web design exposes the raw building blocks of the web: HTML, stark typography, and unapologetic geometry.",
      },
      {
        type: "image",
        caption: "Geometric abstraction in brutalist design",
      },
      {
        type: "heading",
        text: "The Philosophy",
      },
      {
        type: "text",
        text: "At its core, brutalism rejects the notion that websites must be 'pretty' to be effective. Instead, it embraces clarity, functionality, and a certain aesthetic honesty that comes from showing things as they are.",
      },
      {
        type: "code",
        language: "javascript",
        code: `const brutalist = {
  design: 'function over form',
  aesthetic: 'raw and honest',
  philosophy: 'less is more',
  principles: [
    'expose structure',
    'embrace constraints',
    'reject decoration'
  ]
};

// No frameworks, no bloat
document.querySelector('button').onclick = () => {
  alert('Direct. Unfiltered. Real.');
};`,
      },
      {
        type: "heading",
        text: "Implementation",
      },
      {
        type: "text",
        text: "Implementing a brutalist design doesn't mean abandoning user experience. It means stripping away the unnecessary while maintaining usability. Every element serves a purpose. Every pixel is intentional.",
      },
      {
        type: "image",
        caption: "Typography as structure",
      },
      {
        type: "text",
        text: "Consider the navigation. In traditional designs, it might hide behind a hamburger menu, animated transitions, or complex dropdowns. In brutalist design, it's there, upfront, unambiguous. You know exactly where you are and where you can go.",
      },
      {
        type: "code",
        language: "css",
        code: `/* Brutalist CSS: Direct and purposeful */
.navigation {
  position: fixed;
  top: 0;
  border-bottom: 2px solid #000;
  background: #fff;
}

.nav-link {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #000;
  text-decoration: none;
}

.nav-link:hover {
  /* No fancy transitions */
  color: #666;
}`,
      },
      {
        type: "heading",
        text: "The Rock and Roll Edge",
      },
      {
        type: "text",
        text: "There's something inherently punk about brutalism. It's DIY. It's anti-establishment. It says 'I don't need your frameworks, your component libraries, your design systems.' It's the web design equivalent of a three-chord punk song—simple, direct, powerful.",
      },
      {
        type: "image",
        caption: "Raw energy meets digital minimalism",
      },
      {
        type: "text",
        text: "This doesn't mean brutalist design is careless or lazy. On the contrary, it requires discipline. Every choice matters when you can't hide behind decoration. The typography must be perfect. The spacing must be precise. The hierarchy must be clear.",
      },
      {
        type: "code",
        language: "typescript",
        code: `interface BrutalistPrinciples {
  clarity: boolean;
  honesty: boolean;
  function: 'primary' | 'secondary';
  decoration: never;
}

const createBrutalistComponent = (): BrutalistPrinciples => {
  return {
    clarity: true,
    honesty: true,
    function: 'primary',
    // decoration: false // Won't even compile
  };
};`,
      },
      {
        type: "text",
        text: "The future of web design isn't about adding more. It's about knowing what to remove. Brutalism teaches us that constraints breed creativity, that honesty is a design choice, and that sometimes the most radical thing you can do is keep it simple.",
      },
    ],
  },
  "minimalist-code-practices": {
    title: "Minimalist Code Practices",
    date: "2024-02-28",
    readTime: "4 min read",
    content: [
      {
        type: "text",
        text: "Clean code isn't just about aesthetics. It's about clarity and purpose. Every line should justify its existence. Every function should do one thing well. Every variable should have a name that explains itself.",
      },
      {
        type: "heading",
        text: "The Art of Deletion",
      },
      {
        type: "text",
        text: "The best code is the code you don't write. Before adding a new dependency, ask yourself: do I really need this? Before creating a new abstraction, ask: is this adding clarity or complexity?",
      },
      {
        type: "code",
        language: "javascript",
        code: `// Bad: Over-abstracted, unclear
const userDataProcessor = new UserDataProcessorFactory()
  .withValidator(new UserValidator())
  .withTransformer(new DataTransformer())
  .build();

// Good: Direct, clear
function createUser(name: string) {
  return { name, created: new Date() };
}`,
      },
      {
        type: "image",
        caption: "Simplicity in structure",
      },
      {
        type: "text",
        text: "Minimalism in code means embracing standard libraries over custom solutions. It means choosing readability over cleverness. It means writing code that your future self will thank you for.",
      },
      {
        type: "code",
        language: "typescript",
        code: `// Minimalist approach to state management
type State = {
  user: User | null;
  loading: boolean;
};

const initialState: State = {
  user: null,
  loading: false,
};

// No complex reducers, just simple updates
function setState(updates: Partial<State>) {
  Object.assign(state, updates);
}`,
      },
    ],
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostsData[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm hover:text-grey-500 transition-colors mb-8">
          <ArrowLeft size={16} />
          BACK TO BLOG
        </Link>
        <h1 className="text-4xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm hover:text-grey-500 transition-colors mb-12">
        <ArrowLeft size={16} />
        BACK TO BLOG
      </Link>

      <article className="max-w-3xl space-y-12">
        {/* Header */}
        <header className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-grey-500 font-mono">
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="w-20 h-1 bg-foreground"></div>
        </header>

        {/* Content */}
        <div className="space-y-8">
          {post.content.map((block: any, index: number) => {
            switch (block.type) {
              case "heading":
                return (
                  <h2 key={index} className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-6">
                    {block.text}
                  </h2>
                );
              
              case "text":
                return (
                  <p key={index} className="text-lg leading-relaxed text-grey-600">
                    {block.text}
                  </p>
                );
              
              case "code":
                return (
                  <CodeBlock
                    key={index}
                    code={block.code}
                    language={block.language}
                  />
                );
              
              case "image":
                return (
                  <figure key={index} className="my-12">
                    <div className="aspect-[16/9] bg-grey-200 border-2 border-foreground flex items-center justify-center">
                      <span className="text-sm font-mono text-grey-400">[IMAGE]</span>
                    </div>
                    {block.caption && (
                      <figcaption className="mt-3 text-sm text-grey-500 italic">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              
              default:
                return null;
            }
          })}
        </div>

        {/* Footer */}
        <footer className="pt-12 mt-12 border-t-2 border-grey-300">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold hover:text-grey-500 transition-colors"
          >
            <ArrowLeft size={16} />
            READ MORE POSTS
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
