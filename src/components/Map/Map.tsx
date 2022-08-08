import { useState } from "react";
import { ActivityIndicator, StyleProp, StyleSheet, ViewStyle, View } from "react-native";
import MapView, { Region } from "react-native-maps";

import { Button } from "@components/Buttons";
import { useLocationContext } from "@contexts/locationContext";
import { COLOR_LIGHT } from "@services/constants/color";
import {
  DEFAULT_CURRENT_LOCATION_RADIUS,
  DEFAULT_LAT_LONG_DELTA,
  LAT_LONG_DELTA_ZOOM_RANGE,
  MAXIMUM_LAT_LONG_DELTA,
  MINIMUM_LAT_LONG_DELTA
} from "@services/constants/common";

import CurrentLocationIndicator from "./CurrentLocationIndicator";

interface IMapProps {
  showCurrentPoint: boolean;
  children: JSX.Element | null;
  style?: StyleProp<ViewStyle>;
  showActionButtom?: boolean;
  actionWrapperStyle?: StyleProp<ViewStyle>;
}

const Map = ({
  showCurrentPoint = false,
  showActionButtom,
  children,
  actionWrapperStyle,
  style
}: IMapProps) => {
  const { locationState } = useLocationContext();
  const [region, setRegion] = useState<Region | undefined>();

  if (!locationState || !locationState.current) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  const reCenter = () => {
    setRegion({
      latitudeDelta: DEFAULT_LAT_LONG_DELTA,
      longitudeDelta: DEFAULT_LAT_LONG_DELTA,
      ...region,
      ...locationState.current.coords
    });
  };

  const zoomIn = () => {
    setRegion((prevRegion) => {
      const nextdelta =
        prevRegion && prevRegion?.latitudeDelta
          ? prevRegion.latitudeDelta - LAT_LONG_DELTA_ZOOM_RANGE
          : DEFAULT_LAT_LONG_DELTA;

      if (nextdelta <= MINIMUM_LAT_LONG_DELTA) {
        return {
          ...prevRegion,
          ...locationState.current
        };
      }

      return {
        ...locationState.current.coords,
        latitudeDelta: nextdelta,
        longitudeDelta: nextdelta
      };
    });
  };

  const zoomOut = () => {
    setRegion((prevRegion) => {
      const nextdelta =
        prevRegion && prevRegion?.latitudeDelta
          ? prevRegion.latitudeDelta + LAT_LONG_DELTA_ZOOM_RANGE
          : DEFAULT_LAT_LONG_DELTA;

      if (nextdelta >= MAXIMUM_LAT_LONG_DELTA) {
        return {
          ...prevRegion,
          ...locationState.current
        };
      }

      return {
        ...locationState.current.coords,
        latitudeDelta: nextdelta,
        longitudeDelta: nextdelta
      };
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.flatten([{ flex: 1 }, style])}
        initialRegion={{
          latitudeDelta: DEFAULT_LAT_LONG_DELTA,
          longitudeDelta: DEFAULT_LAT_LONG_DELTA,
          ...region,
          ...locationState.current.coords
        }}
        region={region}>
        {showCurrentPoint ? (
          <CurrentLocationIndicator
            currentPoint={locationState.current}
            radius={
              region
                ? Math.floor((region?.latitudeDelta || DEFAULT_LAT_LONG_DELTA) * 1875)
                : DEFAULT_CURRENT_LOCATION_RADIUS
            }
          />
        ) : null}
        {children}
      </MapView>
      {showActionButtom ? (
        <View style={[styles.actionWrapper, actionWrapperStyle]}>
          <Button
            label=""
            onPress={zoomIn}
            icon="plus-circle"
            buttonStyle={styles.actionButton}
            iconStyle={styles.actionIcon}
          />
          <Button
            label=""
            onPress={zoomOut}
            icon="minus-circle"
            buttonStyle={styles.actionButton}
            iconStyle={styles.actionIcon}
          />
          <Button
            label=""
            onPress={reCenter}
            icon="crosshair"
            buttonStyle={styles.actionButton}
            iconStyle={styles.actionIcon}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  actionWrapper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: 40,
    bottom: 15,
    right: 15
  },
  actionButton: {
    width: 40,
    height: 40,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 40 / 2,
    backgroundColor: COLOR_LIGHT.TRANSPARENT_PRIMARY
  },
  actionIcon: {
    fontSize: 20,
    textAlign: "center",
    marginRight: 0
  }
});

export default Map;
