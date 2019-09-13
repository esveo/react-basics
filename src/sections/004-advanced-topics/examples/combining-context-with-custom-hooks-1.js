// global-counter.js
const GlobalCounterContext = React.createContext();

const GlobalCounterProvider = GlobalCounterContext.Provider;

export function GlobalCounterProvider({ children }) {
  const counter = useClickCounter();

  return (
    <GlobalCounterProvider value={counter}>{children}</GlobalCounterProvider>
  );
}

export function useGlobalCounter() {
  const contextValue = React.useContext(GlobalCounterContext);
  if (!contextValue) throw new Error("Don't forget to add the provider.");
  return contextValue;
}
