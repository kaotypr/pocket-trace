import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";

import { useAuthContext } from "@contexts/authContext";
import { SIGNIN_API, SIGNUP_API } from "@services/apis/api";
import { APP_API_BASE_URL } from "@services/constants/extra";
import { ERROR_MESSAGE } from "@services/constants/message";
import { ASYNC_STORAGE_KEYS } from "@services/constants/storage";
import Fetcher from "@services/utils/fetcher";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined | null>(null);
  const { authState, setAuthState } = useAuthContext();
  const isMounted = useRef<boolean>(true);
  const fetch = new Fetcher(APP_API_BASE_URL);

  const signin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { token, errorMessage = ERROR_MESSAGE.signin_failed } = await fetch.post(SIGNIN_API, {
        email,
        password
      });
      if (!token) {
        throw new Error(errorMessage);
      }
      setError(null);
      AsyncStorage.setItem(ASYNC_STORAGE_KEYS.TOKEN, token);
      setAuthState({ isSignedIn: true, token });
    } catch (error) {
      setError(error as Error);
    } finally {
      if (isMounted.current) {
        setIsLoading(false);
      }
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      const { token, errorMessage = ERROR_MESSAGE.signup_failed } = await fetch.post(SIGNUP_API, {
        name,
        email,
        password
      });
      if (!token) {
        throw new Error(errorMessage);
      }
      setAuthState({ isSignedIn: true, token });
      AsyncStorage.setItem(ASYNC_STORAGE_KEYS.TOKEN, token);
      setError(null);
    } catch (error) {
      setError(error as Error);
    } finally {
      if (isMounted.current) {
        setIsLoading(false);
      }
    }
  };

  const signout = async () => {
    try {
      await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.TOKEN);
      setAuthState({ isSignedIn: false, token: undefined });
    } catch (error) {
      throw error;
    }
  };

  const resolveAuth = async (): Promise<boolean> => {
    try {
      const token = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.TOKEN);
      if (!token) {
        return false;
      }
      setAuthState({ isSignedIn: true, token });
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    ...authState,
    isLoading,
    error,
    signin,
    signup,
    signout,
    resolveAuth
  };
};

export default useAuth;
