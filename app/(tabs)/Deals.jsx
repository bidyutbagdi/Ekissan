import { View, Text, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

const BestDeals = () => {
  const data = [
    {
      id: 1,
      title: "Broccoli",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/08/30/12/05/broccoli-1630519_1280.jpg",
      description: "Broccoli is a staple food ",
      rating: 4.7,
      buy: 290,
    },
    {
      id: 2,
      title: "Carrot",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/07/11/00/18/carrots-1508847_960_720.jpg",
      description: "Freesh & organic carrots",
      rating: 4.8,
      buy: 210,
    },
    {
      id: 3,
      title: "Tomatos",
      imageUrl:
        "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg&_gl=1*tfufu8*_ga*MTI5MzM0MjY2MS4xNzMxMjM0MTM5*_ga_8JE65Q40S6*MTczMTIzNDEzOC4xLjEuMTczMTIzNTIwMC4wLjAuMA..",
      description: "Juciye Tomatoes",
      rating: 4.9,
      buy: 412,
    },
    {
      id: 4,
      title: "Potatoes",
      imageUrl:
        "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Organic & fresh potatoes",
      rating: 4.6,
      buy: 400,
    },
  ];

  return (
    <SafeAreaView className="px-4 mb-[100px] bg-primary">
      <ScrollView >
        <View className="pt-5 pb-2 ">
          <Text className=" text-[25px] font-bold text-black pb-[6px]">
            Best Deals
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default BestDeals;
