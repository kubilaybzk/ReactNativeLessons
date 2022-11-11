import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Ana sayfa kullanıcının karşısına çıkan ilk sayfa.
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:18,marginBottom:12}}>KubilayBzk.dev  'e hoşgeldiniz</Text>
      <View style={{display:'flex', flexDirection:"row",justifyContent:"space-around"}}>
      <Button onPress={()=>navigation.navigate("HomeDetails")} title="Giriş Yap"/>
      </View>
    </View>
  );
}

function HomeDetails({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
     <View style={{display:'flex',flexDirection:"column",justifyContent:'space-around'}}>
     <Button onPress={()=>navigation.push("HomeDetails")} title="Detay"/>
      <Button onPress={()=>navigation.goBack()} title="Geri Dön"/>
      <Button onPress={()=>navigation.popToTop()} title="İlk sayfaya dön"/>
     </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"  component={HomeScreen} />
        <Stack.Screen name="HomeDetails" component={HomeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;