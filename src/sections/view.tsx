import { useData } from "../contexts/data-context";

export default function View() {
  const { data } = useData();

  return <div>Pokemon: {data[33]?.name}</div>;
}
