import { Button, Text, View } from "react-native";
import { router } from "../../.expo/types/router";

const SignUp = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Button title="Sign In" onPress={() => router.push("/(auth)/sign-in")} />
    </View>
  );
};

export default SignUp;
