import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Landing.module.css';

const landing = props => {
    return(
        <div className={classes.Landing}>
            <div>
                <h1>Challenge Your Friends</h1>
                <p>Create questions about your characteristics and let your friends answer them!</p>
                <p>Register now to quickly start</p>
                <div>
                    <Link to="/login">Get started</Link>
                </div>
            </div>
        </div>
    )
}

export default landing;