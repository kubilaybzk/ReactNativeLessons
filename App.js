import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>KubilayBzk.dev Ana Sayfa!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>KubilayBzk.dev Ayarlar!</Text>
    </View>
  );
}
function Message() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>KubilayBzk.dev Mesajlar!</Text>
    </View>
  );
}
function Notification() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>KubilayBzk.dev Bildirimler!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          //Her bir route elemanına erişmek için mapliyoruz.
          tabBarIcon: ({focused, color, size}) => {
            //Burada her bir elamanın koşullara göre nasıl olması gerektiğini oluşturuyoruz.
            let iconName; //Icon ismi koşula göre değiştiği için gerekli olan değişken.
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Notification') {
              iconName = focused
                ? 'md-notifications-sharp'
                : 'md-notifications-outline';
            } else if (route.name === 'Message') {
              iconName = focused ? 'md-mail-open' : 'md-mail-open-outline';
            }

            // You can return any component that you like here!
            return <Icons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Message" component={Message} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
