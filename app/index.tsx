import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
<SafeAreaView>
  <ScrollView contentContainerStyle={{height: '100%'}}>
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 14,
      padding: 10,
    }}>
      {
        Array.from({length: 10}).map((_, index) => (
       <TouchableOpacity key={index} style={{width:"48%", borderWidth: 1, borderColor: 'red',minHeight:150,borderRadius:20,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <View>
          <Text>Item {index}</Text>
        </View>
       </TouchableOpacity>
        ))
      }
    </View>
  </ScrollView>
</SafeAreaView>
  );
}
