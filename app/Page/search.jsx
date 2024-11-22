import { View, Text } from "react-native";
import React from "react";
import "../../global.css";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { TextInput } from "react-native";

export default function Search() {
  return (
    <View className=" flex-row items-center h-[50px]  rounded-[20px] px-[15px]  bg-white ">
      <AntDesign name="search1" size={18} color="gray" />
      <TextInput placeholder="Search Products" className="Flex-1 " />

      <Feather className=" ml-[160px] " name="mic" size={18} color="gray" />
    </View>
  );
}
