import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome to ADA Cafe</Text>
      <Link href={'/login'}>Login</Link>
      <Link href={'/(root)/(tabs)/profile'}>Profile</Link>
    </View>
  );
}
