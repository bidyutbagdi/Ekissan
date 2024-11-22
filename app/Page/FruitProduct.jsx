import { View, Text, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

const FruitProduct = () => {
  const data = [
    {
      id: 1,
      title: "Apples",
      imageUrl:
        "https://wallpaper.forfun.com/fetch/5a/5a92519c03a6608feaf61cceb5216e8e.jpeg?h=900&r=0.5",
      description: "Crispy and sweet ",
      rating: 4.7,
      buy: 290,
    },
    {
      id: 2,
      title: "Oranges",
      imageUrl:
        "https://images.unsplash.com/photo-1637679231107-2fa35c20b9aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9yYW5nZSUyMGZydWl0fGVufDB8fDB8fHww",
      description: "Fresh and juicy",
      rating: 4.8,
      buy: 210,
    },
    {
      id: 3,
      title: "Bananas",
      imageUrl:
        "https://media.istockphoto.com/id/1494763483/photo/banana-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=NKgZvwkV4qwBdRPNyrUMVX2Xtczm65sT-_X5jEySQLg=",
      description: "Rich in fiber and nutrients",
      rating: 4.9,
      buy: 412,
    },
    {
      id: 4,
      title: "Strawberries",
      imageUrl:
        "https://wallpaper.forfun.com/fetch/c2/c27e13eae31ca0eef932e053733545fe.jpeg?h=900&r=0.5",
      description: " red fruit with a sweet taste",
      rating: 4.6,
      buy: 400,
    },
  ];

  return (
    <View className="pt-5  ">
      <Text className=" text-[25px] font-bold text-black pb-[6px]">
        Seasonal Fruits
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <View className="  ">
            <View className=" items-center border-2 border-white h-[180px] w-[150px] mr-[15px] rounded-[10px] bg-white 0 ">
              <Image
                className=" w-[100%] h-[120px] rounded-t-[10px] object-cover "
                source={{ uri: item.imageUrl }}
              />
              <Text className=" text-[16px] font-medium text-black pb-0">
                {item.title}
              </Text>

              <Text className="  text-[10px] text-gray-900  ">
                {item.description}
              </Text>

              <View className="flex-row gap-x-1  items-center justify-between ">
                <Text className=" text-[10px] text-gray-900 ">
                  {item.rating}
                </Text>
                <AntDesign name="star" size={8} color="black" />
                <Text className=" text-[10px] text-gray-900 ">
                  ({item.buy})
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FruitProduct;
