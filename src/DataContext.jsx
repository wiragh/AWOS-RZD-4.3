import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [responseData, setResponseData] = useState(null);

  const setResponse = (data) => {
    setResponseData(data);
  };

  return (
    <DataContext.Provider value={{ responseData, setResponse }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
