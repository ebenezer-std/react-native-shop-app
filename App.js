import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Cart from "./components/Cart.js";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// const Tab = createBottomTabNavigator()
// const Tabs= () => {
//   return(

//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home}/>
//       <Tab.Screen name="Microphone" component={Home}
//       options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: () => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}

//       />
//       <Tab.Screen name="Cart" component={Cart}/>
//     </Tab.Navigator>
//   )
// }

const App = () => {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator initialRouteName="Home">
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="Cart" component={Cart} />
        </MainNavigator.Navigator>

        {/* <Tabs /> */}
      </NavigationContainer>
    </View>
    /* <Text>
      Hey there welcome home
    </Text> */
  );
};

export default App;

// import React from 'react';
// import {View, StyleSheet, Image,SafeAreaView} from 'react-native';
// import { FontAwesome, Feather, AntDesign,Ionicons  } from '@expo/vector-icons';

// export default function Home({component}) {
//     return (
//       <SafeAreaView>

//         <View style={{flex: 1}}>
//            <FontAwesome name="bicycle" size={24} color="black" />
//            <Feather name="menu" size={24} color="black" />
//            <AntDesign name="search1" size={24} color="black" />
//            <Ionicons name="notifications-outline" size={24} color="black" />

//         </View>
//       </SafeAreaView>
//     )
// }
