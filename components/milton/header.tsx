interface HeaderProps {
  id: string;
  data: {text: string};
  type?: string;
}

export function Header({id, data}: HeaderProps) {
  return (
    <p key={id} className="font-bold my-2">
      {data.text}
    </p>
  );
}
