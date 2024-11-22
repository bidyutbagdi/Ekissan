import { View, Text, Touchable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export default function CategoryItems() {
  const Categories = ["Home", "Deal", "Cart", "Profile"];

  const [CategoryIndex, setCategoryIndex] = React.useState(0);
  return (
    <View className="flex-row mt-[10px]  justify-between">
      {Categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.5}
          onPress={() => setCategoryIndex(index)}
        >
          <Text
            className={`
             text-lg font-bold pb-1
                ${
                  CategoryIndex === index
                    ? "text-green-500 border-b-2 border-b-green-500 "
                    : "text-gray-500 "
                }
              `}
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
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
  },
  CategoryText: {
    color: "green",
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: "green",
  },
});
