import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import { useLocationContext } from "@contexts/locationContext";
import { TRACE_API } from "@services/apis/api";
import { APP_API_BASE_URL } from "@services/constants/extra";
import { ASYNC_STORAGE_KEYS } from "@services/constants/storage";
import Fetcher from "@services/utils/fetcher";

const useTrace = () => {
  const [error, setError] = useState<Error | undefined | null>();
  const { setLocationState } = useLocationContext();
  const [traces, setTraces] = useState([]);
  const [fetcher, setFetcher] = useState<Fetcher>(new Fetcher(APP_API_BASE_URL));
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const saveTrace = async (name: string, recordedLocations: any[]): Promise<any> => {
    setIsSaving(true);
    try {
      const res = await fetcher.post(TRACE_API, { name, locations: recordedLocations });
      setError(null);
      return res;
    } catch (error) {
      setError(error as Error);
      return Promise.reject(error);
    } finally {
      setIsSaving(false);
    }
  };

  const fetchTraces = async () => {
    try {
      const { data } = await fetcher.get(TRACE_API);
      setTraces(data);
      setLocationState({ records: [] });
      setError(null);
    } catch (error) {
      setError(error as Error);
    }
  };

  const discardRecordedTraces = () => {
    setLocationState({ records: [] });
  };

  useEffect(() => {
    const setAuthToken = async () => {
      return await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.TOKEN).then((token) => {
        setFetcher(
          new Fetcher(APP_API_BASE_URL, {
            headers: {
              Authorization: token
            }
          })
        );
      });
    };
    setAuthToken();
  }, []);

  return { error, traces, isSaving, saveTrace, discardRecordedTraces, fetchTraces };
};

export default useTrace;
