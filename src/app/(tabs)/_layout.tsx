import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="feed" options={{ title: "Feed" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
