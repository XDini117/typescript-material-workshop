import { DataProvider } from "./data-provider";

export function Providers({ children }: { children: any }) {
  return <DataProvider> {children} </DataProvider>;
}
