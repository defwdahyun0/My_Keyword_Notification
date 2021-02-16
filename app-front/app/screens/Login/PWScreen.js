import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";

const PWScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 40, textAlign: "center" }}>여기는 PW</Text>
        <View style={{ marginTop: 10, borderRadius: 8 }}>
          <TouchableHighlight
            onPress={() => navigation.navigate("LoginScreen")}
            underlayColor={"transparent"}
          >
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>log in</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PWScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gold",
    padding: 10,
    borderRadius: 8,
  },
  buttonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "midnightblue",
    textAlign: "center",
  },
});
