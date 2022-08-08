import React from "react";
import { Polyline } from "react-native-maps";

interface ITraceLineProps {
  locations: any[];
}

const TraceLine = ({ locations }: ITraceLineProps) => {
  return (
    <Polyline
      coordinates={locations.map(({ coords }) => coords)}
      strokeColor="rgba(205, 60, 60, 0.7)"
      strokeWidth={4}
    />
  );
};

export default TraceLine;
