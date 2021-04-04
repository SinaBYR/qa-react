import classes from './Login.module.css';
import React, { Component } from 'react';
import SignIN from './SignIN/SignIN';
import SignUP from './SignUP/SignUP';
import firebase from '../../firebase';

// const userContext = createContext();

// const user = {
//     fullName: null,
//     token: null
// }

// export const UserContext = createContext();

class Login extends Component{
    state = {
        registerDisplay: false,
        error: null,
        loading: false,
        token: null
    }
    switchToSignInPageHandler = () => {
        this.setState({registerDisplay: false, error: null});
    }
    switchToSignUpPageHandler = () => {
        this.setState({registerDisplay: true, error: null});
    }

    
    signUpMethod = (e) => {
        e.preventDefault();
        this.setState({error: null, loading: true});

        const regex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})/;
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();
        const confirmPassword = e.target.confirmPassword.value.trim();

        // console.log(email, password, confirmPassword);
        if(!password.match(regex) || password.length < 8){
            this.setState({error: "Password must be a combination of at least 8 numbers and letters!", loading: false});
            return false;
        }
        if(password !== confirmPassword){
            this.setState({error: "Passwords do not match.", loading: false});
            return false;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                this.setState({loading: false});
                console.log(userCredential);
                // e.target.reset();
            })
            .catch(err => {
                console.log(err);
                this.setState({loading: false, error: err.message});
            });
    }


    signInMethod = (e) => {
        e.preventDefault();
        this.setState({error: null, loading: true});

        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();

        console.log(email, password);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(data => {
                this.setState({loading: false});
                console.log(data);

                // console.log(data.credential.providerId);

                localStorage.setItem('fullName', 'Sina Beyraghdar');
                localStorage.setItem('userName', 'sinabyr');
                localStorage.setItem('token', data.user.uid);
                this.props.sendToken(localStorage.getItem('token'));
                this.setState({token: data.user.uid});

                this.props.history.replace('/workflow');
            })
            .catch(err => {
                console.log(err);
                this.setState({loading: false, error: err.message});
            });
    }
    componentDidMount(){

    }
    render(){
        console.log(this.props);
        let page = 
                this.state.registerDisplay
                ? (
                    <SignUP
                        switchPage={this.switchToSignInPageHandler}
                        signUp={this.signUpMethod}
                        error={this.state.error}
                        loading={this.state.loading}/>
                )
                : (
                    <SignIN
                        switchPage={this.switchToSignUpPageHandler}
                        signIn={this.signInMethod}
                        error={this.state.error}
                        loading={this.state.loading}/>
                );
        return(
            <div className={classes.Login}>
                {page}
            </div>
        )
    }
}

export default Login;