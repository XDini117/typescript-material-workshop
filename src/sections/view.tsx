import { useData } from "../contexts/dataContext";

export default function View() {
  const { data } = useData();

  return <div>Pokemon: {data[33]?.name}</div>;
}
