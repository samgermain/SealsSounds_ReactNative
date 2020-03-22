import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import WeddellScreen from './screens/WeddellScreen.js'
import HarpScreen from './screens/HarpScreen.js'
import GreyScreen from './screens/GreyScreen.js'
import ImageScreen from './screens/ImageScreen.js'
import * as InAppPurchases from 'expo-in-app-purchases';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButton:{
    height:50,
    width:50,
    backgroundColor:'blue'
  }
});

const weddellStack = createStackNavigator({
  main: WeddellScreen,
  image: ImageScreen
}, {
  initialRouteName: 'main'
})

const greyStack = createStackNavigator({
  main: GreyScreen,
  image: ImageScreen
}, {
  initialRouteName: 'main'
})

const harpStack = createStackNavigator({
  main: HarpScreen,
  image: ImageScreen
}, {
  initialRouteName: 'main'
})

const TabNavigator = createBottomTabNavigator({
  Weddell: WeddellScreen,
  Grey: GreyScreen,
  Harp: HarpScreen
},{
  initialRouteName: 'Weddell'
})

const AppContainer = createAppContainer(TabNavigator)

const getHistory = async function(){
  InAppPurchases.connectAsync()
  const history = await connectAsync();
    if (history.responseCode === IAPResponseCode.OK) {
      history.results.forEach(result => {
        console.log(result)
      });
    }
}

class App extends React.Component {
  
  render(){
    getHistory()
    return (
//      <View><Text>Hello World</Text></View>
            <AppContainer />
    );
  }
}


export default App