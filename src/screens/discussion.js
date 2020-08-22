import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { pop } from "../navigation/root_navigation";

import Header from "../components/header";
import BackIcon from "../components/icons/back";
import Dots from "../components/vertical_dots";

import Info from "./discussion_views/info.view";
import Rounds from "./discussion_views/rounds.view";

import { Colors } from "../consts/colors";

import { getDebate } from "../hooks/debate.hooks";

export default function Discussion({ route }) {
  const { data } = route?.params;

  const newData = {
    ...getDebate(data.id).data,
    proponent: data.proponent,
    opponent: data.opponent,
  };
  console.log(newData);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Discussion"
        leftIcon={<BackIcon width={24} height={24} fill="black" />}
        leftIconEvent={() => pop()}
        rightIcon={<Dots onPress={() => console.log("dots")} />}
        backgroundStyle={{
          borderBottomWidth: 1,
          borderBottomColor: Colors.lightGrey,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollStyle}
      >
        <Info data={newData.id ? newData : data} />
        <Rounds
          opponent={data.opponent}
          proponent={data.proponent}
          rounds={newData.rounds ? newData.rounds : null}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
});
