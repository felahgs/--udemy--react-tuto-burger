import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = ( props ) => (
    <ul className={classes.List}>
        <li className={classes.NavigationItem}>
        <NavLink
            exact={props.exact}
            to={props.link}
            activeClassName={classes.active}>
            {props.children}
            {/* href={props.link} */}
            {/* // className={props.active ? classes.active: null}>{props.children}</a> */}
        </NavLink>
        </li>
    </ul>

);

export default navigationItem;