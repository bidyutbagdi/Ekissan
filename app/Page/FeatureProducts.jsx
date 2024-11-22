import { View, Text, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

const FeatureProduct = () => {
  const data = [
    {
      id: 1,
      title: "Almonds",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675237625910-e5d354c03987?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxtb25kfGVufDB8fDB8fHww",
      description: "Crispy and sweet ",
      rating: 4.7,
      buy: 290,
    },
    {
      id: 2,
      title: "Olive Oil",
      imageUrl:
        "https://media.istockphoto.com/id/643941220/photo/olive-oil-and-green-olives.jpg?s=612x612&w=0&k=20&c=x0hgSPiCEkSXyX_GfQJWBAnSS3n-Chb97h0QONfIbI4=",
      description: " best olive oil for cooking",
      rating: 4.8,
      buy: 210,
    },
    {
      id: 3,
      title: "Chicken",
      imageUrl:
        "https://media.istockphoto.com/id/1322432988/photo/raw-chicken-cuts-without-skin.jpg?s=612x612&w=0&k=20&c=9pGcKLEroSLxsiEdQGd9NV9RF2rba1N1rWBXF5ZaZ34=",
      description: "fresh chicken meat",
      rating: 4.9,
      buy: 612,
    },
    {
      id: 4,
      title: "Saffola Soya",
      imageUrl: "https://m.media-amazon.com/images/I/714aBovyiqL._SX679_.jpg",
      description: " Tender & Juicy, 53% Protein, 1kg",
      rating: 4.6,
      buy: 400,
    },
  ];

  return (
    <View className="pt-5  ">
      <Text className=" text-[25px] font-bold text-black pb-[6px]">
        Feature Product
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

export default FeatureProduct;
