import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

// Folders Import
import "../../global.css";
import Search from "../Page/search";
import Homebanner from "../Page/banner";
import CategoryItems from "../Page/CategoryList";
import CategoryHighlights from "../Page/CategoryProducts";
import FeatureProduct from "../Page/FeatureProducts";
import FruitProduct from "../Page/FruitProduct";

export default function Index() {
  return (
    <SafeAreaView className="px-4 mb-[100px] bg-primary">
      <View>
        <Text className="text-center text-2xl font-bold pb-5  ">Ekisan..</Text>
      </View>
      <Search />

      <ScrollView
        className=" flex mt-[30px]   "
        showsVerticalScrollIndicator={false}
      >
        <Homebanner />
        <CategoryItems />
        <CategoryHighlights />
        <FeatureProduct />
        <FruitProduct />
      </ScrollView>
    </SafeAreaView>
  );
}
