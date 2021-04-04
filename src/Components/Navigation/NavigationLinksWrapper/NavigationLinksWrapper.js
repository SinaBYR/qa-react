import React from 'react';
import { NavLink } from 'react-router-dom';
// import { CgProfile } from 'react-icons/cg';
import classes from './NavigationLinksWrapper.module.css';
import { useEffect } from 'react';

const NavigationLinksWrapper = props => {
    const isLoggedIn = props.isLoggedIn;
    useEffect(() => {
        return true;
    }, [isLoggedIn]);
    let navbar = (
        <ul className={classes.NavigationLinksWrapper}>
            <li className={classes.Link}>
                <NavLink exact to="/" activeClassName={classes.Active}>Home</NavLink>
            </li>
            <li className={classes.Link}>
                <NavLink exact to="/login" activeClassName={classes.Active}>Login</NavLink>
            </li>
        </ul>
    )
    if(isLoggedIn){
        navbar = (
            <ul className={classes.NavigationLinksWrapper}>
                <li className={classes.Link}>
                    {/* <NavLink exact to="/" activeClassName={classes.Active}>Home</NavLink> */}
                     <NavLink exact to="/workflow" activeClassName={classes.Active}>Workflow</NavLink>
                </li>
                <li className={classes.Logout}>
                    <button onClick={props.signOut}>Logout</button>
                </li>
            </ul>
        )
    }
    return(
        navbar
        // <ul className={classes.NavigationLinksWrapper}>
        //     {
        //         !isLoggedIn
        //         ?
        //         <li className={classes.Link}>
        //             <NavLink exact to="/" activeClassName={classes.Active}>Home</NavLink>
        //         </li>
        //         :
        //         <li className={classes.Link}>
        //             <NavLink exact to="/" activeClassName={classes.Active}>Home</NavLink>
        //         </li>
        //     }
        //     <li className={classes.Link}>
        //         {
        //             isLoggedIn
        //             ?
        //             <NavLink
        //                 exact
        //                 to="/profile"
        //                 activeClassName={classes.Active}>
        //                     Profile
        //                 </NavLink>
        //             :
        //             <NavLink
        //                 exact
        //                 to="/login"
        //                 activeClassName={classes.Active}>
        //                     Login
        //                 </NavLink>
        //         }
        //     </li>
        // </ul>
    )
}

export default NavigationLinksWrapper;