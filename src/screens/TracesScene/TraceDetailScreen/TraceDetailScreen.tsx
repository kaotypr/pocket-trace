import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Region } from "react-native-maps";

import { TracesSceneProps } from "@@types/navigations/scenes/traces";
import TraceLine from "@components/TraceLine";
import useTrace from "@hooks/useTrace";
import { DEFAULT_LAT_LONG_DELTA } from "@services/constants/common";
import { SCREEN_NAMES } from "@services/constants/screen";

const TraceDetailScreen = ({ route }: TracesSceneProps<SCREEN_NAMES.TRACE_DETAIL>) => {
  const { params } = route;
  const { id = null } = params;
  const { fetchDetailTrace } = useTrace();
  const [traceRecord, setTraceRecord] = useState<Trace | null>(null);
  const centerRegion = useMemo(() => {
    if (traceRecord && traceRecord.locations) {
      const centerIndex = Math.floor(traceRecord.locations.length / 2);
      const centerRegion: Region = {
        latitudeDelta:
          traceRecord.locations[centerIndex].coords?.latitudeDelta || DEFAULT_LAT_LONG_DELTA,
        longitudeDelta:
          traceRecord.locations[centerIndex].coords.longitudeDelta || DEFAULT_LAT_LONG_DELTA,
        ...traceRecord.locations[centerIndex].coords
      };
      return centerRegion;
    }
    return undefined;
  }, [traceRecord]);

  useEffect(() => {
    fetchDetailTrace(id).then((trace) => {
      setTraceRecord(trace);
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView style={StyleSheet.flatten([{ flex: 1 }])} region={centerRegion}>
        <TraceLine locations={traceRecord ? traceRecord.locations : []} />
      </MapView>
    </View>
  );
};

export default TraceDetailScreen;
