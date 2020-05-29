import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
import HomeScreen from './DrawerScreens/HomeScreen'
import DetailScreen from './DrawerScreens/DetailScreen'
import Wallet from './DrawerScreens/Wallet'
import AddCard from './DrawerScreens/AddCard'
import AddPaypal from './DrawerScreens/AddPaypal'
import History from './DrawerScreens/History'
import Seller from './DrawerScreens/Seller'
import Shop from './DrawerScreens/Shop'
import Profile from './DrawerScreens/Profile'
import Notifications from './DrawerScreens/Notifications'
import Orders from './DrawerScreens/Orders'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import SideBar from './Smalldrawer'
import Login from './DrawerScreens/LoginScreen'
import Register from './DrawerScreens/RegisterScreen'
import Forgot from './DrawerScreens/ForgotScreen'
import Logout from './DrawerScreens/Logout'
import Cart from '../screens/DrawerScreens/Cart'
import Checkout from '../screens/DrawerScreens/Checkout'
import SellerNavigator from '../seller/Navigator'
import SellerMainNavigator from '../seller/MainNavigator'
import {Ionicons,Feather, MaterialIcons,
    MaterialCommunityIcons,
    Entypo, AntDesign, Foundation, FontAwesome,FontAwesome5} from '@expo/vector-icons';


const Home= createStackNavigator ({
MainScreen:HomeScreen,
SubScreen:DetailScreen,
Login,
Register,
Forgot,
Cart,
Wallet,
Checkout,
Notifications
})

const BasicDrawer = createDrawerNavigator({
Home: {
screen: Home,
navigationOptions:{
title:'Home',
drawerIcon:({ tintColor}) => (
<Feather name="home" color={tintColor} size={22}/>

)}},

Profile: {
    screen: Profile,
    navigationOptions:{
    title:'Profile',
    drawerIcon:({ tintColor}) => (
    <MaterialIcons name="person" color={tintColor} size={22}/>
    
    )}},

Orders: {
    screen: Orders,
    navigationOptions:{
    title:'Orders',
    drawerIcon:({ tintColor}) => (
    <FontAwesome5 name="clipboard-list" color={tintColor} size={22}/>
    
    )
    }},

History: {
screen: History,
navigationOptions:{
title:'History',
drawerIcon:({ tintColor}) => (
<MaterialIcons name="history" color={tintColor} size={22}/>

)
}},

Seller: {
    screen: SellerMainNavigator,
    navigationOptions:{
    title:'Be a Seller',
    drawerIcon:({ tintColor}) => (
    <Entypo name="shop" color={tintColor} size={22}/>
    
)}},

Logout: {
    screen: Logout,
    navigationOptions:{
    title:'Logout',
    drawerIcon:({ tintColor}) => (
        <Entypo name="login" size={22} color="black" />
    
)}},

},
{
initialRouteName:'Home',
contentComponent: props => <SideBar {...props}/>,
drawerWidth: Dimensions.get('window').width *0.65,
hideStatusBar: true,
contentOptions: {
activeBackgroundColor:"rgba(245, 171, 53, 1)",
activeTintColor: '#000',
tintColor:'#000',
itemsContainerStyle:{
marginTop:16,
marginHorizontal: 8
},
itemStyle:{
borderRadius:4
}
},

}
)

export default createAppContainer(BasicDrawer)
