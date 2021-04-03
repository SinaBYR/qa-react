import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from '../Landing/Landing';
import Navigation from '../Navigation/Navigation';
import Login from '../Login/Login';
import Dashboard from '../Profile/Dashboard/Dashboard';
import { useMemo } from 'react';

const token = localStorage.getItem('token');

class Layout extends Component{
    state = {
        token: null
    }
    getToken = token => {
        console.log(token);
        this.setState({token: token});
    }
    signOutMethod = func => {
        return func;
    }
    render(){
        // console.log(this.props);
        return(
            <div>
                <Router>
                    <Navigation isLoggedIn={this.state.token || token}/>
                    <Switch>
                        <Route path="/login" render={(props) => <Login {...props} sendToken={this.getToken} signOutMethod={this.signOutMethod}/>} exact/>
                        {/* <Route path="/login" component={Login} exact/> */}
                        {(this.state.token || token) && <Route path="/profile" component={Dashboard}/>}
                        <Route path="/" component={Landing} exact/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Layout;