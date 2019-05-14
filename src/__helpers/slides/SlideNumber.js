import React from 'react';

const Context = React.createContext();

export const SlideNumber = ({ children }) => {
  const value = React.useContext(Context);
  return children(value);
};

export const SlideNumberProvider = Context.Provider;
