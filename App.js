import React, {useEffect} from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import WeddellScreen from './screens/WeddellScreen.js'
import HarpScreen from './screens/HarpScreen.js'
import GreyScreen from './screens/GreyScreen.js'
import PremiumScreen from './screens/PremiumScreen.js'
// import PokeScreen from './screens/PokeScreen.js'
import ImageScreen from './screens/ImageScreen.js'
import store from './redux/store.js'
import {setProducts, setPurchases} from './redux/actions.js'
import * as RNIap from 'react-native-iap';
import SplashScreen from 'react-native-splash-screen'

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
  Harp: HarpScreen,
  Premium: PremiumScreen
  // Poke: PokeScreen
},{
  initialRouteName: 'Weddell',
  tabBarOptions:{
    labelStyle: {
      fontSize: 15,
      fontWeight: 'bold'
    }
  }
})

const AppContainer = createAppContainer(TabNavigator)

const items = Platform.select({
  ios: [
   '1985162691'
  ],
  android: [
   '1985162691'
  ]
 });

class App extends React.Component {
  
  componentDidMount() {
    RNIap.getProducts(items).then((products) => {
      store.dispatch(setProducts(products))
      RNIap.getAvailablePurchases().then((purchase) => {
        store.dispatch(setPurchases(purchase))
      })
    }).catch((error) => {
      console.log(error)
    })
    SplashScreen.hide()
  }

  render(){
    return (
      <AppContainer />
    );
  }
}

export default App