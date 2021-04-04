import React, { Component } from 'react';
import classes from './SignUP.module.css';
// import { CgDanger } from 'react-icons/cg';
import PasswordTip from './PasswordTip/PasswordTip';
import LoadingBars from '../../UI/LoadingBars/LoadingBars';

class SignUp extends Component {
    state = {
        tipVisible: false,
    }
    render(){
        return(
            <form className={classes.Form} onSubmit={(e) => this.props.signUp(e)}>
                <h2 className={classes.Title}>Create an account</h2>
                {this.props.error
                ?
                <div className={classes.Error}>
                    {/* <div><CgDanger color="red" fontSize="3rem"/></div> */}
                    <div>{this.props.error}</div>
                </div>
                :
                null}
                <label>Email</label>
                <input
                    required
                    type="email"
                    name="email"
                    autoComplete="off"
                    className={classes.EmailInput}/>
                <label>Username</label>
                {/* <input
                    type="text"
                    name="username"
                    autoComplete="off"
                    className={classes.PasswordInput}/> */}
                <label style={{position: 'relative'}}>
                    Password
                    {/* <Tip tips={['At least 6 characters', 'Contains at least one number', 'Contains at least one letter']}/> */}
                    {this.state.tipVisible ? <PasswordTip tips={['A combination of at least 8 numbers and letters']}/> : null}
                </label>
                <input
                    required
                    type="password"
                    name="password"
                    autoComplete="off"
                    className={classes.PasswordInput}
                    onFocus={() => this.setState({tipVisible: true})}
                    onBlur={() => this.setState({tipVisible: false})}/>
                <label>Confirm Password</label>
                <input
                    required
                    type="password"
                    name="confirmPassword"
                    autoComplete="off"
                    className={classes.PasswordInput}/>
                <button className={classes.Button}>{this.props.loading ? <LoadingBars /> : 'Sign up'}</button>
                <div style={{textAlign: 'center'}}>
                    <p>Already have an account? <span className={classes.SwitchPage} onClick={this.props.switchPage}>Sign in</span></p>
                </div>
            </form>
        )
    }
}

export default SignUp;