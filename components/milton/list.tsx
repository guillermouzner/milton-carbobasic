interface ListProps {
  id: string;
  data: {items: string[]; style: string};
  type?: string;
}

export function List({id, data}: ListProps) {
  return (
    <div className="my-2">
      {data.items.map((item, index) => (
        <div key={id + index} className="ml-2 font-mono">{`${index + 1}. ${item}`}</div>
      ))}
    </div>
  );
}
