import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
  LocationSubscription,
  LocationObject
} from "expo-location";
import { useRef, useState } from "react";

import { ILocationState, useLocationContext } from "@contexts/locationContext";
import {
  WATCH_POSITION_DISTANCE_INTERVAL,
  WATCH_POSITION_TIME_INTERVAL
} from "@services/constants/common";

const useLocation = () => {
  const {
    locationState,
    setLocationState: setLocationContextState,
    resetLocationState
  } = useLocationContext();
  const [error, setError] = useState<Error | undefined | null>();
  const locationSubsriber = useRef<LocationSubscription | undefined>();

  const setLocationState = (location: LocationObject, shouldRecord = false) => {
    if (shouldRecord) {
      resetLocationState((prevState: Partial<ILocationState>) => {
        return {
          ...prevState,
          records: [...(prevState?.records || []), location],
          current: location
        };
      });
    } else {
      setLocationContextState({ current: location });
    }
  };

  const startWatching = async (shouldRecord = false) => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: WATCH_POSITION_TIME_INTERVAL,
          distanceInterval: WATCH_POSITION_DISTANCE_INTERVAL
        },
        (location) => setLocationState(location, shouldRecord)
      );
      if (locationSubsriber.current) {
        locationSubsriber.current = subscriber;
      }
    } catch (error) {
      setError(error as Error);
    }
  };

  return {
    ...locationState,
    error,
    startWatching
  };
};

export default useLocation;
