import React, { useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";

import { TracesSceneProps } from "@@types/navigations/scenes/traces";
import TraceListIItem from "@components/TraceListIItem";
import TraceListItemEmpty from "@components/TraceListIItem/TraceListItemEmpty";
import useTrace from "@hooks/useTrace";
import { SCREEN_NAMES } from "@services/constants/screen";

const TraceListScreen = (_: TracesSceneProps<SCREEN_NAMES.TRACE_LIST>) => {
  const { traces, isFetching, fetchTraces } = useTrace();

  useEffect(() => {
    fetchTraces();
  }, []);

  return (
    <>
      <FlatList
        style={{ marginTop: 10 }}
        data={traces as Trace[] | []}
        keyExtractor={(item, index) => `${item._id}_index${index}`}
        renderItem={({ item }) => <TraceListIItem data={item} />}
        ListEmptyComponent={() => (isFetching ? <ActivityIndicator /> : <TraceListItemEmpty />)}
        onRefresh={fetchTraces}
        refreshing={isFetching}
      />
    </>
  );
};

export default TraceListScreen;
