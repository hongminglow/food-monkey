import { images } from "@/constants";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="h-full flex-center">
      <Text className="text-center text-dark-100 font-quicksand-semibold text-lg">
        Profile
      </Text>
      <View className="rounded-full size-24 bg-gray-50 mt-9 flex-center">
        <Image source={images.user} className="size-16" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
