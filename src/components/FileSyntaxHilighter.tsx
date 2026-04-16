import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ISyntaxHilighterProps {
  code: string;
}

function FileSyntaxHilighter({ code }: ISyntaxHilighterProps) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        backgroundColor: "transparent",
        overflow: "auto",
        fontSize: "1.2rem",
      }}
    >
      {String(code)}
    </SyntaxHighlighter>
  );
}

export default FileSyntaxHilighter;
