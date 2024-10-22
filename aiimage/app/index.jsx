import { useUser } from "@clerk/clerk-react";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

  const {user} =useUser();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.huhuhuhuh</Text>
      {!user?<Redirect href={'/login'}/>:
      <Redirect href = {'/(tabs)/home'}/>}
    </View>
  );
}
