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
  children?: JSX.Element;
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
  const {
    locationState: { current: currentPoint }
  } = useLocationContext();
  const initialRegion = {
    ...(currentPoint?.coords || {}),
    latitudeDelta: DEFAULT_LAT_LONG_DELTA,
    longitudeDelta: DEFAULT_LAT_LONG_DELTA
  };
  const [region, setRegion] = useState<Region | undefined>(undefined);

  if (!currentPoint) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  const reCenter = () => {
    setRegion({
      ...region,
      ...currentPoint.coords
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
          ...currentPoint
        };
      }

      return {
        ...currentPoint.coords,
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
          ...currentPoint
        };
      }

      return {
        ...currentPoint.coords,
        latitudeDelta: nextdelta,
        longitudeDelta: nextdelta
      };
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.flatten([{ flex: 1 }, style])}
        initialRegion={initialRegion}
        region={region}>
        {showCurrentPoint ? (
          <CurrentLocationIndicator
            currentPoint={currentPoint}
            radius={Math.floor(
              region ? region.latitudeDelta * 1875 : DEFAULT_CURRENT_LOCATION_RADIUS
            )}
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
