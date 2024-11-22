import { View, Text, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import CountDown from "react-native-countdown-component";

const CategoryHighlights = () => {
  const data = [
    {
      id: 1,
      title: "Green Peas",
      imageUrl:
        "https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: " Healthy and nutritious ",
      Price: 175,
      Quntity: "/Kg",
      rating: 4.6,
      buy: 400,
      HighPrice: 200,
      Off: "47%",
      Timer: (
        <CountDown
          size={10}
          until={10000}
          onFinish={() => alert("Finished")}
          digitStyle={{ backgroundColor: "gray-200" }}
          digitTxtStyle={{ color: "#1CC625" }}
          separatorStyle={{ color: "#1CC625" }}
          timeToShow={["H", "M", "S"]}
          timeLabels={{ m: null, s: null }}
          showSeparator
        />
      ),
    },
    {
      id: 2,
      title: "Cabbage",
      imageUrl:
        "https://images.pexels.com/photos/209482/pexels-photo-209482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: " green and tasty ",
      Price: 75,
      Quntity: "/Kg",
      rating: 4.9,
      buy: 412,
      HighPrice: 100,
      Off: "46%",
      Timer: (
        <CountDown
          size={10}
          until={100000000000}
          onFinish={() => alert("Finished")}
          digitStyle={{ backgroundColor: "gray-200" }}
          digitTxtStyle={{ color: "#1CC625" }}
          separatorStyle={{ color: "#1CC625" }}
          timeToShow={["H", "M", "S"]}
          timeLabels={{ m: null, s: null }}
          showSeparator
        />
      ),
    },
    {
      id: 3,
      title: "Beans",
      imageUrl:
        "https://images.pexels.com/photos/3004798/pexels-photo-3004798.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: " freshest and tasty ",
      Price: 165,
      Quntity: "/Kg",
      rating: 4.9,
      buy: 412,
      HighPrice: 200,
      Off: "52%",
      Timer: (
        <CountDown
          size={10}
          until={1000000000}
          onFinish={() => alert("Finished")}
          digitStyle={{ backgroundColor: "gray-200" }}
          digitTxtStyle={{ color: "#1CC625" }}
          separatorStyle={{ color: "#1CC625" }}
          timeToShow={["H", "M", "S"]}
          timeLabels={{ m: null, s: null }}
          showSeparator
        />
      ),
    },
    {
      id: 4,
      title: "Red Bell Paper",
      imageUrl:
        "https://images.pexels.com/photos/870808/pexels-photo-870808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "spicy and tasty ",
      Price: 105,
      Quntity: "/Kg",
      rating: 4.9,
      buy: 412,
      HighPrice: 200,
      Off: "50%",
      Timer: (
        <CountDown
          size={10}
          until={100000000000}
          digitStyle={{ backgroundColor: "gray-200" }}
          digitTxtStyle={{ color: "#1CC625" }}
          separatorStyle={{ color: "#1CC625" }}
          timeToShow={["H", "M", "S"]}
          timeLabels={{ m: null, s: null }}
          showSeparator
        />
      ),
    },
  ];

  return (
    <View className="pt-4  ">
      <Text className=" text-[25px] font-bold text-black pb-[6px]">
        Category Highlights
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <View className="  border-2 border-white h-[220px] w-[160px] mr-[15px] rounded-[10px] bg-white 0 ">
            <Image
              className=" w-[100%] h-[120px] rounded-t-[10px] object-cover "
              source={{ uri: item.imageUrl }}
            />

            <View className="  flex-col justify-between items-center ">
              <Text className="  text-center text-[16px] font-medium text-black pb-0">
                {item.title}
              </Text>

              <Text className=" text-center text-[10px]  text-gray-900  ">
                {item.description}
              </Text>
              <View className="flex-row gap-x-1  items-center  ">
                <Text className=" text-[10px] text-gray-900 ">
                  {item.rating}
                </Text>
                <AntDesign name="star" size={8} color="black" />
                <Text className=" text-[10px] text-gray-900 ">
                  ({item.buy})
                </Text>
              </View>

              <View className="flex-row items-center content-center ">
                <FontAwesome
                  className="pt-1 font-bold text-[14px]"
                  name="rupee"
                  size={12}
                  color="green"
                />
                <Text className="text-[green] font-bold text-[14px]">
                  {item.Price}
                </Text>
                <Text className="text-[green] font-bold pl-[2px]">
                  {item.Quntity}
                </Text>
                <Text className="text-[10px] text-gray-400 line-through  pt-1 pl-[2px]">
                  {item.HighPrice}
                  {item.Quntity}
                </Text>
              </View>
              <View className="flex-row  justify-between   items-center  ">
                <Text className="bg-[green] rounded-sm gap-x-2 text-white text-[10px] font-bold px-[2px] py-[2px]">
                  Sale
                </Text>
                <Text className="">{item.Timer}</Text>
                <Text className="bg-gray-300 rounded-sm text-[green] text-[10px] font-bold px-[2px] py-[2px]">
                  {item.Off}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CategoryHighlights;
