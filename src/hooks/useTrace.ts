import { useState } from "react";

import { useLocationContext } from "@contexts/locationContext";
import { TRACES_API } from "@services/apis/api";
import { APP_API_BASE_URL } from "@services/constants/extra";
import Fetcher from "@services/utils/fetcher";

const useTrace = () => {
  const [error, setError] = useState<Error | undefined | null>();
  const { setLocationState } = useLocationContext();
  const [traces, setTraces] = useState([]);
  const fetcher = new Fetcher(APP_API_BASE_URL);

  const saveTrace = async (name: string, recordedLocations: any[]) => {
    try {
      await fetcher.post(TRACES_API, { name, records: recordedLocations });
      setError(null);
    } catch (error) {
      setError(error as Error);
    }
  };

  const fetchTraces = async () => {
    try {
      const { data } = await fetcher.get(TRACES_API);
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

  return { error, traces, saveTrace, discardRecordedTraces, fetchTraces };
};

export default useTrace;
