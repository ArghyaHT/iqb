import React, { createContext, useState } from 'react';

export const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {

  const dropdownState = useState(false);

  return (
    <DropdownContext.Provider value={{ dropdownState }}>
      {children}
    </DropdownContext.Provider>
  );
};
