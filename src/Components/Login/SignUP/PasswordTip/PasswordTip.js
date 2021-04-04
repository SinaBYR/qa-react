import React from 'react';
import classes from './PasswordTip.module.css';

const passwordTip = props => {
    const tips = props.tips.map((eachTip, index) => {
        return <li key={index}>{eachTip}</li>
    });
    return(
        <ul className={classes.PasswordTip}>
            {tips}
        </ul>
    )
}

export default passwordTip;