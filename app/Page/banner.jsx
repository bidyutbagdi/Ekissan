import { View, Image, StyleSheet } from "react-native";
import React from "react";

export default function Homebanner() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require("../image/top-view-vegetable-composition-with-fresh-fruits-blue-table.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stretch: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
