import { DataProvider } from "./dataProvider";

export function Providers({ children }: { children: any }) {
  return <DataProvider> {children} </DataProvider>;
}
