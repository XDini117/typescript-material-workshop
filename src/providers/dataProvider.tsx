import { ReactNode, useState, useEffect } from "react";
import axios from "axios";

import { dataContext, dataInitialState } from "../contexts/dataContext";

interface DataProps {
  children: ReactNode;
}

export function DataProvider({ children }: DataProps) {
  const [data, setData] = useState(dataInitialState.data);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const value = {
    ...dataInitialState,
    data,
    setData,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
}
