import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import NavigationLinksWrapper from './NavigationLinksWrapper/NavigationLinksWrapper';

const navigation = props => {
    return(
        <div className={classes.Navigation}>
            <div className={classes.Logo}>
                <Link to="/">Q-A</Link>
            </div>
            <NavigationLinksWrapper isLoggedIn={props.isLoggedIn} signOut={props.signOutMethod}/>
        </div>
    )
}

export default navigation;