import React, { Component } from 'react';
import classes from './SignIN.module.css';
import { CgDanger } from 'react-icons/cg';
import LoadingBars from '../../UI/LoadingBars/LoadingBars';

class SignIn extends Component{
    render(){
        return(
            <form className={classes.Form} onSubmit={(e) => this.props.signIn(e)}>
                <h2 className={classes.Title}>LOGIN</h2>
                {this.props.error
                ?
                <div className={classes.Error}>
                    <div><CgDanger color="red" fontSize="3rem"/></div>
                    <div>{this.props.error}</div>
                </div>
                :
                null}
                <label className={classes.EmailLabel}>Email</label>
                <input type="email" name="email" autoComplete="off" className={classes.EmailInput} required/>
                <label className={classes.PasswordLabel}>Password</label>
                <input type="password" name="password" autoComplete="off" className={classes.PasswordInput} required/>
                <button className={classes.Button} disabled={this.props.loading}>{this.props.loading ? <LoadingBars /> : 'Sign in'}</button>
                <div style={{textAlign: 'center'}}>
                    <p>Don't have an account? <span className={classes.SwitchPage} onClick={this.props.switchPage}>Sign up</span></p>
                </div>
            </form>
        )
    }
}

export default SignIn;