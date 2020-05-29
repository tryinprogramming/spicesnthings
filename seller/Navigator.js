import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {createMaterialTopTabNavigator,createBottomTabNavigator} from 'react-navigation-tabs'
import Shop from './Shop'
import Product from './Products'
import { createAppContainer } from 'react-navigation'
class Home extends Component {
    render() {
        return (
         <Shop/>
        )
    }
}
class Products extends Component {
    render() {
        return (
          <Product/>
        )
    }
}

export default createAppContainer(createBottomTabNavigator(
    {
      Home,
      Products
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = MaterialCommunityIcons;
          let iconName;
          if (routeName === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline'
            //add badges to some icons.
            
          } else if (routeName === 'Products') {
            iconName = focused
            ? 'package-variant'
            : 'package-variant-closed'
           
          }
  
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'orange',
        inactiveTintColor: 'gray',
      },
    }
  ))


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
