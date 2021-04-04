import classes from './LoadingBars.module.css';
import React from 'react';

const loadingBars = props => {
    return(
        <div className={classes.LoadingBars}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default loadingBars;