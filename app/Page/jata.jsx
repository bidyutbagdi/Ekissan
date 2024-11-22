import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function CategoryItems() {
  const Categories = ["Home", "Deal", "Cart", "Profile"];

  const [CategoryIndex, setCategoryIndex] = React.useState(0);
  return (
    <View style={styles.container}>
      {Categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.5}
          onPress={() => setCategoryIndex(index)}
        >
          <Text
            style={[
              styles.text,
              CategoryIndex === index ? styles.activeText : styles.inactiveText,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  activeText: {
    color: "green",
    borderBottomWidth: 2,
    borderBottomColor: "green",
  },
  inactiveText: {
    color: "gray",
  },
});
