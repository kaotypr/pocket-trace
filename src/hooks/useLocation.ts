import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
  LocationSubscription,
  LocationObject
} from "expo-location";
import { useState } from "react";

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
  const [locationSubsriber, setLocationSubscriber] = useState<LocationSubscription | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined | null>();

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
      setLocationSubscriber(subscriber);
    } catch (error) {
      setError(error as Error);
    }
  };

  const stopWatching = () => {
    if (locationSubsriber) {
      locationSubsriber.remove();
      setLocationSubscriber(null);
    }
  };

  const startRecording = () => {
    // remove location subsriber without recording callback
    stopWatching();
    // start watching with recording callback
    startWatching(true);
    setIsRecording(true);
  };

  const stopRecording = () => {
    // stop watching
    stopWatching();
    setIsRecording(false);
    // watching location without recording, so it still updating current location indicator
    startWatching();
  };

  return {
    ...locationState,
    isRecording,
    locationSubsriber,
    error,
    startWatching,
    stopWatching,
    startRecording,
    stopRecording
  };
};

export default useLocation;
