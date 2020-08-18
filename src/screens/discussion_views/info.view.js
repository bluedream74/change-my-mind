import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../consts/colors";
import Users from "./users.view";

const InfoText = ({ label, text }) => {
  return (
    <View style={styles.infoTextContainer}>
      <Text style={styles.infoTextLabel}>{label}</Text>
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
};

export default function Info({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Users
        opponent={data.opponent}
        proponent={data.proponent}
        round={data.round_number}
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoInnerContainer}>
          <InfoText label="Started" text={"28.05.2020" || data.start_date} />
          <InfoText label="Category" text={data.category} />
          <InfoText label="Status" text="Open" />
        </View>
        <View style={styles.infoInnerContainer}>
          <InfoText
            label="Last Update"
            text={"10 hours before" || data.start_date}
          />
          <InfoText label="Respond Limit" text={data.respond_limit} />
          <InfoText
            label="Expires In"
            text={"8 days 16 hours" || data.start_date}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purple + "AA",
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrey,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  infoContainer: {
    paddingHorizontal: 12,
    flexDirection: "row",
    marginVertical: 4,
  },
  infoInnerContainer: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    backgroundColor: "white",
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  infoText: {
    color: "white",
    marginTop: 4,
  },
  infoTextLabel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  infoTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
    marginHorizontal: 6,
    borderRadius: 10,
  },
});
