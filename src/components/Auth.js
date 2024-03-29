import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


const Auth = () => {
    const [isLogin, setIsLogin]=useState(true);

    const changeForm= () =>{
        setIsLogin(!isLogin)
    }

    return (
        <View style={style.view}>
            <Image style={style.logo} source={require('../assets/logo.png')} />
            {isLogin?<LoginForm changeForm={changeForm} />:<RegisterForm changeForm={changeForm} />}
        </View>
    )
}

const style = StyleSheet.create({
    view:{
        flex:1,
        alignItems:'center'
    },
    logo:{width:"80%",height:240,marginTop:50,marginBottom:50}
})

export default Auth;