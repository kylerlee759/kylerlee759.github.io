import type { ElementType } from "react";

function renderRich(content: string): string {
  return content.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

type Props = {
  content: string;
  as?: ElementType;
  className?: string;
};

export function RichText({ content, as: Tag = "p", className }: Props) {
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: renderRich(content) }}
    />
  );
}
