import React, { Component } from 'react';
import { userRegistration} from '../../services/LoginReg';
import {userLogin,setJwt} from '../../services/LoginReg';
 
class RegisterMain extends Component {

    constructor(props){
        super(props);
        this.nameref=React.createRef();
        this.emailref=React.createRef();
        this.mobileref=React.createRef();
        this.passwordref=React.createRef();
        this.confirmref=React.createRef();
        this.submitRef=React.createRef();
    }

    state = { 
        registerError:null,
        registrationBegin:false
     }

    handleRegistration=async({name,email,mobile,password})=>{
        this.focusOut();
        const register={fullname:name,email,mobile,password};
        this.errorHandle(null,true);
        await userRegistration(register)
            .then(()=>{
                this.registrationSuccess(email,password);
            }).catch(({response})=>{
                if(response.status===400){
                    const registerError="Email already registered";
                    this.errorHandle(registerError,false);
                }else{
                    const registerError="Server down. Try after sometime";
                    this.errorHandle(registerError,false);
                }
        });
    }

    errorHandle=(registerError,registrationBegin)=>{
        this.setState({registerError,registrationBegin});
    }

    registrationSuccess=async(email,password)=>{
        await userLogin(email,password).then(({data})=>{
            setJwt(data);
            window.location="/";
        }).catch(()=>{
            window.location="/login";
        });
    }
    focusOut=()=>{
        const refs=[this.nameref,this.emailref,this.mobileref,this.passwordref,this.confirmref,this.submitRef];
        refs.forEach(ref=>ref.current.blur());
    }
}

export default RegisterMain;