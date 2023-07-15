interface Props {
  year: number;
  project: string;
}
export function ProjectRecord({year, project}: Props) {
  return (
    <div className="bg-zinc-300 dark:bg-zinc-700 w-[250px] lg:w-[300px] p-3 rounded-lg text-sm">
      <p>
        <span className="font-black">{year}</span> {project}
      </p>
    </div>
  );
}
