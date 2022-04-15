interface DividerProps {
  children: string | string[];
}

export default function Divider(props: DividerProps) {
  return <div className="mb-3">{props.children}</div>;
}
