import React, { Component } from 'react';

class Dashboard extends Component{
    clicked = () => {
        this.props.history.replace('/dashboard/create');
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Welcome {localStorage.getItem('fullName')}</h1>
                <button onClick={this.clicked}>Click</button>
            </div>
        )
    }
}

export default Dashboard;