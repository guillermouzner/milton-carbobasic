interface ParagraphProps {
  id: string;
  data: {text: string};
  type?: string;
}

export function Paragraph({id, data}: ParagraphProps) {
  return (
    <p key={id} className="my-2">
      {data.text}
    </p>
  );
}
