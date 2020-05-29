import React, { Component } from 'react'
import { Text, StyleSheet,View,Image, Dimensions, TouchableOpacity, SafeAreaView,ScrollView } from 'react-native'
import {Entypo,Feather,MaterialIcons} from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import { LinearGradient } from 'expo-linear-gradient';
import Order from './Orders'
import EditShop from './EditShop'
import Fire from '../Fire'
import firebase from 'firebase'

const {height,width} = Dimensions.get('window')

class Shop extends Component {
static navigationOptions={
header: null
}
state=
{
user:{},
shop:{
name:'',
category:'',
location:'',
number:'',
dp:null,
showMore:false
},
text: '',
add:false,
edit:false,
wait:false,
success:false,
}
unsubscribe=null
componentDidMount(){
firebase.auth().onAuthStateChanged(user=>{
if(user){
const user = this.props.id || Fire.shared.uid
this.unsubscribe = Fire.shared.firestore
.collection("users")
.doc(user)
.onSnapshot(doc =>{
this.setState({ user:doc.data() })
})
}
})

}
componentWillUnmount(){
this.unsubscribe();
}
render() {
return(
<SafeAreaView style={styles.container}>
<ScrollView contentContainerStyle={{alignItems:'center'}}>
<LinearGradient
          colors={['#EE9617', '#FE5858']}
          start={[0.0, 0.5]} end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          style={{
            width:width,
            height: 300,
            borderBottomRightRadius:15,
            borderBottomLeftRadius:15
          }}
        >
        <View style={{flexDirection:'row',marginTop:32}}>
        <TouchableOpacity style={{marginLeft:10}} >
        <MaterialIcons name="dashboard" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{fontSize:20,fontWeight:'800',fontFamily:'sans-serif-light',marginLeft:5,color:'#fff'}}>Dashboard</Text>
        </View>

    </LinearGradient>
<View style={styles.shopContainer}>
<View style={{backgroundColor:'rgba(250,250,250,0.9)',paddingVertical:10,
alignItems:'center',borderTopRightRadius:10,borderTopLeftRadius:10
}}>
<Image 
style={{width:100,height:100,borderRadius:50}}
source={this.state.user.shopdp ? {uri:this.state.user.shopdp } :require('../assets/icon.png')}
/>
</View>

<View style={{backgroundColor:'#fff',height:width/1.8,
alignItems:'center',borderBottomRightRadius:10,borderBottomLeftRadius:10
}}>
<Text style={{fontSize:20,fontWeight:'500',fontFamily:'sans-serif-light',marginTop:width/30}}>
{this.state.user.shopname} </Text>

<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5}}>
<Text style={{fontSize:14,fontWeight:'200',fontFamily:'sans-serif-light',color:"#000"}}>
{this.state.user.shopcategory}</Text>
</View>


<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5}}>
<Entypo name="old-phone" size={12} color="#dedede" />
<Text style={{fontSize:14,fontWeight:'200',fontFamily:'sans-serif-light',color:"gray"}}>
{this.state.user.shopnumber}</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5,paddingHorizontal:25}}>

<Text style={{fontSize:12,fontWeight:'200',fontFamily:'sans-serif-light',color:"gray"}}>
<Entypo name="location-pin" size={12} color="#dedede" />
{this.state.user.shoplocation}
</Text>
</View>

<LinearGradient
          colors={['#EE9617', '#FE5858']}
          start={[0.0, 0.5]} end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          style={{
            width:50,
            height: 50,
            borderRadius:25,
            marginTop:width/30,
            justifyContent:'center',
            alignItems:'center'
          }}
        >

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditShop')}>
        <Feather name="edit" size={28} color="#fff" />
        </TouchableOpacity>
        

    </LinearGradient>

</View>

</View>

<View style={this.state.showMore?styles.orderContainer:[styles.orderContainer,{height:width/2.6}]}>

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10,
borderBottomColor:'#dedede',borderBottomWidth:1}}>
<Text style={{fontSize:16,fontWeight:'800',fontFamily:'sans-serif-light',marginLeft:5,color:'#000'}}>
Orders</Text>
<TouchableOpacity 
onPress={()=>this.state.showMore?this.setState({showMore:false}):this.setState({showMore:true})}>
{this.state.showMore
?<Entypo name="chevron-down" size={20} color="#000" />
:<Entypo name="chevron-right" size={20} color="#000" />}
</TouchableOpacity>
</View>

<Order/>

</View>
</ScrollView>
</SafeAreaView>
)
}

}

export default createAppContainer(
createStackNavigator({
    Shop,
    EditShop
}))

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#f5f5f5'
},
containertemp:{
flex:1,
justifyContent:'center',
alignItems:'center'
},
form:{
flex:1,
},
button:{
width:width/1.1,
marginHorizontal:30,
backgroundColor:'#ffa500',
borderRadius:4,
height:52,
alignItems:'center',
justifyContent:'center',
flexDirection:'row'
},
shopContainer:{
width:width/1.1,
height:width/1.2,
borderRadius:10,
marginTop:-120
},
orderContainer:{
width:width/1.1,
borderRadius:10,
backgroundColor:'#fff',
marginTop:20
}
})

