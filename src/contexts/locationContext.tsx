import React, { createContext, useContext, useState } from "react";

export interface ILocationState {
  current: any;
  records: any[];
}

interface ILocationContextValue {
  locationState: Partial<ILocationState>;
  setLocationState: (value: Partial<ILocationState>) => void;
  resetLocationState: React.Dispatch<React.SetStateAction<Partial<ILocationState>>>;
}

const defaultContextValue: ILocationContextValue = {
  locationState: {},
  setLocationState: () => {},
  resetLocationState: () => {}
};

const locationContext = createContext<ILocationContextValue>(defaultContextValue);
const { Provider } = locationContext;

const LocationProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, setState] = useState<Partial<ILocationState>>({});

  const setLocationState = (value: Partial<ILocationState>) => {
    setState((prevState: any) => ({
      ...prevState,
      ...value
    }));
  };

  return (
    <Provider value={{ locationState: state, setLocationState, resetLocationState: setState }}>
      {children}
    </Provider>
  );
};

const useLocationContext = () => useContext(locationContext);

export { useLocationContext, LocationProvider };
