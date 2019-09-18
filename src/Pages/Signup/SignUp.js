import React from 'react';
import style from './index.module.scss';
import{connect} from 'react-redux';
import * as actions from '../../actions/auth';
import {Link} from 'react-router-dom';

const SignUp = (props) => {
    const {auth} = props;
    return (
        <div className={style.signup}>
            <h1>Signup</h1>
            <form onSubmit={(e)=>props.signUp(e, auth,props.history )}>
                {props.auth.errors.name && <p> {props.auth.errors.name}</p>}
                <input type="text"
                        name='name'
                        placeholder='name'
                        value={auth.name}
                        onChange={props.onInputChange}/>
                {props.auth.errors.phone && <p> {props.auth.errors.phone}</p>}
                <input type="text"
                        value={props.phone}
                        name='phone'
                        placeholder='Phone number'
                        onChange={props.onInputChange}/>
                {props.auth.errors.email && <p> {props.auth.errors.email}</p>}
                <input type="text"
                        name='email'
                        value={props.password}
                        placeholder='Email'
                        onChange={props.onInputChange}/>
                {props.auth.errors.password && <p> {props.auth.errors.password}</p>}
                <input type="password"
                        value={props.password2}
                        name='password'
                        placeholder='Password'
                        onChange={props.onInputChange}/>
                        {props.auth.errors.password2 && <p> {props.auth.errors.password2}</p>}
                <input type="password"
                        name='password2'
                        placeholder='Confirm Password'
                        onChange={props.onInputChange}/>
                <button>Sign up</button>
                <p>Esate prisiregistravęs? </p>
                <p><Link to ='/login' className={style.login}> Prisijungti </Link></p>
            </form>
        </div>
    );
};
const mapStateToProps = state => {
    return{
        auth:state.auth,
    }
}
export default connect (mapStateToProps, actions) (SignUp);