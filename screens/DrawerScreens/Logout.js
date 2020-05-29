import React, { Component } from 'react'
import { Text, StyleSheet, Image, Dimensions,TouchableOpacity,SafeAreaView } from 'react-native'
import firebase from 'firebase'
import Fire from '../../Fire'
const {width, height}=Dimensions.get('window')

export default class Logout extends Component {

    state={
        isLogged:false,
        message:'You are Logged out !',
    }
    componentDidMount(){
                firebase.auth().onAuthStateChanged(user=>
                  { 
                      if(user){
                          this.setState({isLogged:true})
                
                    }
                    else{
                        this.setState({isLogged:false})
                        
                    }
                }
                );
         
    }

    render() {
        if(this.state.isLogged)
        return (
            <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image
            style={{flex:0.5,height:'100%',width:'100%',resizeMode:'contain'}}
            source={require('../../assets/logout.png')}
            />
            <Text style={{fontSize:16,fontFamily:'sans-serif-light',marginBottom:'5%'}}>Are you sure for logging out ?</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={()=>Fire.shared.logout()}>
            <Text style={{fontSize:18,fontFamily:'sans-serif-light'}}>Yes, I'm</Text>
            </TouchableOpacity>
        </SafeAreaView>
        )
        else
        return (
            <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image
            style={{flex:0.5,height:'100%',width:'100%',resizeMode:'contain'}}
            source={require('../../assets/logout.png')}
            />
            <Text style={{fontSize:16,fontFamily:'sans-serif-light',marginBottom:'5%'}}>{this.state.message}</Text>
           
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    logoutButton:{
        height:52,
        width:width/2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffa500',
        borderRadius:4,
    }
})
