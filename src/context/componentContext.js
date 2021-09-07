import React, { createContext, useState } from "react";

export const componentContext = createContext({});

export default function ComponentContextProvider({ children }) {
  const [showTagContent, setShowTagContent] = useState(false);

  return (
    <componentContext.Provider
      value={{
        showTagContent,
        setShowTagContent,
      }}
    >
      {children}
    </componentContext.Provider>
  );
}
