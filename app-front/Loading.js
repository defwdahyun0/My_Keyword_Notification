import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo"; //Entypo or MaterialCommunityIcons
import { Entypo } from '@expo/vector-icons';

export default function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Entypo name="bell" size={200} color="gold" />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Keyword</Text>
        <Text style={styles.title}>Alarm</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue", //cornflowerblue or dodgerblue or darkblue
  },
  iconContainer: {
    flex: 1.3,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: 100,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "900",
    color: "gold",
  },
});
