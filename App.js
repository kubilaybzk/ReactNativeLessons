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
      <Button onPress={()=>navigation.navigate("Login")} title="Giriş Yap"/>
      <Button onPress={()=>navigation.navigate("SignUp")} title="Kayit Ol"/>
      </View>
    </View>
  );
}

//Giriş Yap sayfası
//Ekstra olarak içeriden şifremi unuttum kısmına erişebiliyoruz.
function Login({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button onPress={()=>navigation.navigate("ResetPassword")} title="Şifremi Unuttum"/>
    </View>
  );
}
//Kayıt ol sayfası
//Ekstra olarak içeriden sözleşme detay kısmına erişebiliyoruz.
function SignUp({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignUp Screen</Text>
      <Button onPress={()=>navigation.navigate("Details")} title="ACCEPTANCE DECLARATION"/>
    </View>
  );
}
//Sözleşme Detay sayfası
//Ekstra olarak içeriden şifremi unuttum kısmına erişebiliyoruz.
function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
//Şifre sıfırlama kısmı
function ResetPassword({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ResetPassword Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"  component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;