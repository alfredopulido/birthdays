import React,{useState} from 'react'
import { Button, StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native';
import { validateEmail } from '../utils/validations';
import firebase from '../utils/firebase';

export default function LoginForm(props) {
    const {changeForm} =props;

    const [formData, setFormData]=useState(defaultValue());
    const [formError,setFormError]= useState({})

    const onChange=(e,type)=>{
        setFormData({...formData,[type]:e.nativeEvent.text})
    }

    const login=()=>{
        let errors = {}
        if(!formData.email || !formData.password ){
            if(!formData.email) errors.email=true;
            if(!formData.password) errors.password=true;
        } else if(!validateEmail(formData.email)){
            errors.email=true
        } else {
            firebase.auth().signInWithEmailAndPassword(formData.email,formData.password).then(()=>{
                console.log("Sesión iniciada")
            }).catch(()=>{
                setFormError({
                    email:true,
                    password:true

                })
            })
            console.log("Formulario correcto")
        }

        setFormError(errors)
    }

    return (
        <>
            <TextInput style={[styles.input,(formError.email) && styles.error]} placeholder="Correo electrónico" placeholderTextColor="#969696" onChange={e=>onChange(e,"email")}></TextInput>
            <TextInput style={[styles.input,(formError.password) && styles.error]} placeholder="Contraseña" placeholderTextColor="#969696" secureTextEntry={true} onChange={e=>onChange(e,"password")}></TextInput>
            <TouchableOpacity onPress={login}>
                <Text style={styles.btnText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <View style={styles.login}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}>Registrate</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

function defaultValue(){
    return {
        email:"",
        password:""
    }
}

const styles = StyleSheet.create({
    btnText:{
        color:"#fff",
        fontSize:18
    },
    input:{
        height:50,
        color:"#fff",
        width:"80%",
        marginBottom:25,
        backgroundColor:"#1e3040",
        paddingHorizontal:20,
        borderRadius:50,
        fontSize:18,
        borderWidth:1,
        borderColor:"#1e3040"

    },
    login:{
        flex:1,
        justifyContent:"flex-end",
        marginBottom:20
    },
    error:{
        borderColor:"#940c0c"
    }
})
