import React, { createContext, useContext, useState } from "react";

interface IAuthState {
  isSignedIn: boolean;
  token: string;
  name: string;
  email: string;
}

interface IAuthContextValue {
  authState: Partial<IAuthState>;
  setAuthState: (value: Partial<IAuthState>) => void;
  resetAuthState: (value: Partial<IAuthState>) => void;
}

const defaultContextValue: IAuthContextValue = {
  authState: {},
  setAuthState: () => {},
  resetAuthState: () => {}
};

const authContext = createContext<IAuthContextValue>(defaultContextValue);
const { Provider } = authContext;

const AuthProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, setState] = useState<Partial<IAuthState>>({});

  const setAuthState = (value: Partial<IAuthState>) => {
    setState((prevState: any) => ({
      ...prevState,
      ...value
    }));
  };

  const resetAuthState = (defaultValue: Partial<IAuthState> = {}) => {
    setState(defaultValue);
  };

  return <Provider value={{ authState: state, setAuthState, resetAuthState }}>{children}</Provider>;
};

const useAuthContext = () => useContext(authContext);

export { useAuthContext, AuthProvider };
