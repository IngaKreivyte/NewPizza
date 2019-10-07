import * as types from './types';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const url = 'https://server-pizza-api.herokuapp.com/api/';

export const onInputChange=(e)=>{
    return{
        type:types.SIGN_INPUT_CHANGE,
        name:e.target.name,
        value:e.target.value
    }
}


export const signUp=(e, user, history )=>{
    e.preventDefault();
    console.log(user);
    
    //errors validation
    const errors={};
    if(!user.name) errors.name = 'Missing name';
    if(!user.phone) errors.phone = 'Missing phone number';
    if(!user.password) errors.password = 'Missing password';
    if(user.password!==user.password2) errors.password2 = 'passwords do not match';
    if (!user.email){ 
        errors.email = 'Email address is required'}
    else if (!/\S+@\S+\.\S+/.test(user.email)) {
        errors.email = 'Email address is invalid';
      };
    if(Object.keys(errors).length>0){
        return{
            type:types.SIGN_UP_ERROR,
            errors
        }
    }
//     //jeigu bus velavimas, sulus sistema
//     //redux-thunk
//     //duomenu siuntimas i serveri
//     //kai naudojame asinchronines funkcijas(veljuojancias)
//     //mes turime grazinti junkcija is kurios darome uzklausa(del redux-thunk)
    return async (dispatch) => { //dispatch-issiusti
    //darome uzklausa i serveri
        try{
            
            const res = await axios.post(url+'user',user);
            //save JW token to local storage
            localStorage.setItem('abc123',res.data);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data
            console.log(res);
        
            //!!!svarbu nepamirsti AWAIT, nes uzlus, kadandi duomenys bus nusiusti neuzpildyti ir uzlush sistema!!!
            //issiunciam duomenys i profileRedux
            dispatch({
                type:types.LOG_IN,
                user,
            })
            //redirect to home page
            history.push('/');
        } catch(e){
            //jei klaida isloginsim error'a
            console.log(e);
            console.log(e.response);
            //update authReducer
        }
    }
}

export const LogIn = (e, user, history)=>{
    //componentdidMount ir componentwillmount-isvalyti state
    e.preventDefault();
        const LoginErrors ={};
        if(!user.email) LoginErrors.email = 'missing email';
        if(!user.password) LoginErrors.password = 'missing password';
        if(Object.keys(LoginErrors).length>0){ //ar reikia >0???
            return {
                type:types.LOG_IN_ERROR,
                LoginErrors,
            }
        }
        //2.
        return async (dispatch)=>{

            try{
                //3.
             const res =   await axios.post(url + 'auth/login', user);
                console.log(res.data);
                const userData = jwt.decode(res.data);
                dispatch({
                    type:types.LOG_IN,
                    user:userData,
                })
                //save user's token to local storage
                localStorage.setItem('abc123',res.data);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
                //redirect
                history.push('/') 
                //4. 

            } catch(e){
                console.log(e.response);
                dispatch({
                    type:types.LOG_IN_ERROR,
                    LoginErrors:{email:'invalid email or password'}
                })
                
            }
        };
        
}
export const logOut = (history) => {
    console.log(history);
    
            //1. clear local storage
            localStorage.removeItem('abc123');
            //istrinam request headeri is akciju
            delete axios.defaults.headers.common['Authorization'];
            //2. redirect user to /login
            history.push('/');
            //3. return action to profileReducer
            return{type:types.LOG_OUT}
}

