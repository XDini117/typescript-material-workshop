import { createContext, useContext, Dispatch, SetStateAction } from "react";

interface SingleType {
  name: string;
  url: string;
}

export interface DataState {
  data: SingleType[];
}

export interface DataContextType extends DataState {
  setData: Dispatch<SetStateAction<SingleType[]>>;
}

export const dataInitialState: DataContextType = {
  data: [],
  setData: () => {},
};

export const dataContext = createContext<DataContextType>(dataInitialState);

export const useData = () => useContext(dataContext);
