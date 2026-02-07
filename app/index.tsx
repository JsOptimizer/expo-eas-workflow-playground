import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View>
          <Text>Chat GPT</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
