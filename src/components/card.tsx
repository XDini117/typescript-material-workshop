import { useData } from "../contexts/dataContext";

export default function Card() {
  const { data } = useData();

  return <div>Pokemon: {data[33]?.name}</div>;
}
