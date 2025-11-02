import CustomButton from "@/components/CustomButton";
import CustomHeader from "@/components/CustomHeader";
import { images } from "@/constants";
import useAuthStore from "@/store/auth.store";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const user = useAuthStore((store) => store.user);
  const logout = useAuthStore((store) => store.logout);

  if (!user) return null;

  return (
    <SafeAreaView className="h-full pt-5 px-5">
      <CustomHeader title="Profile" />
      <View className="flex-1">
        <Image
          source={{ uri: user.avatar }}
          className="size-24 bg-cover self-center"
        />

        <View className="gap-y-[30px] mt-[30px] px-3.5 pt-5 ">
          <View className="flex-row gap-x-2.5 ">
            <View className="size-12 rounded-full bg-primary/5 items-center justify-center">
              <Image source={images.user} className="size-5" />
            </View>

            <UserInformation label="Full Name" value={user.name} />
          </View>

          <View className="flex-row gap-x-2.5 ">
            <View className="size-12 rounded-full bg-primary/5 items-center justify-center">
              <Image source={images.envelope} className="size-5" />
            </View>

            <UserInformation label="Email" value={user.email} />
          </View>

          <View className="flex-row gap-x-2.5 ">
            <View className="size-12 rounded-full bg-primary/5 items-center justify-center">
              <Image source={images.phone} className="size-5" />
            </View>

            <UserInformation label="Phone number" value="+1 555 123 4567" />
          </View>

          <View className="flex-row gap-x-2.5 ">
            <View className="size-12 rounded-full bg-primary/5 items-center justify-center">
              <Image source={images.location} className="size-5" />
            </View>

            <UserInformation
              label="Address 1 - (Home)"
              value="123 Main Street, Springfield, IL 62704"
            />
          </View>

          <View className="flex-row gap-x-2.5">
            <View className="size-12 rounded-full bg-primary/5 items-center justify-center">
              <Image source={images.location} className="size-5" />
            </View>

            <UserInformation
              label="Address 2 - (Work)"
              value="221B Rose Street, Foodville, FL 12345"
            />
          </View>

          <CustomButton
            title="Logout"
            onPress={logout}
            leftIcon={<Image source={images.logout} className="size-6" />}
            style="bg-error/5 border border-error gap-x-2 "
            textStyle="font-quicksand-bold text-base !text-error"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const UserInformation = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <View className="flex flex-col gap-y-1 justify-center">
      <Text className="text-sm text-[#6A6A6A] font-quicksand-medium">
        {label}
      </Text>
      <Text className="font-quicksand-semibold text-base text-dark-100">
        {value}
      </Text>
    </View>
  );
};

export default Profile;
