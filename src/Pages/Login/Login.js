import React from 'react';
import style from './index.module.scss';
import{connect} from 'react-redux';
import * as actions from '../../actions/auth';
import {Link} from 'react-router-dom';

const LogIn = (props) => {
    const {auth} = props;
    return (
        <div className={style.login}>
            <h1>Log In</h1>
            <form onSubmit={(e)=>props.LogIn(e, auth ,props.history )}>
                {props.auth.errors.email && <p> {props.auth.errors.email}</p>}
                <input type="text"
                        name='email'
                        value={props.password}
                        placeholder='Email'
                        onChange={props.onInputChange}/>
                {props.auth.errors.password && <p> {props.auth.errors.password}</p>}
                <input type="password"
                        name='password'
                        placeholder=' Password'
                        onChange={props.onInputChange}/>
                <button >Log in</button>
                <p>Nesate prisiregistravę? </p>
                <p><Link to ='/signUp'   className={style.signUp}> Registruokitės! </Link></p>
            </form>
        </div>
    );
};
const mapStateToProps = state => {
    return{
        auth:state.auth,
    }
}

export default connect (mapStateToProps, actions) (LogIn);