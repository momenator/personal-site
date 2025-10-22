interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "javascript" }: CodeBlockProps) => {
  return (
    <div className="my-6 border-2 border-foreground">
      <div className="bg-foreground text-background px-4 py-2 text-xs font-mono uppercase tracking-wider">
        {language}
      </div>
      <pre className="bg-grey-100 p-6 overflow-x-auto">
        <code className="text-sm font-mono leading-relaxed text-foreground">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
