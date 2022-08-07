import React from 'react';
import classes from './Header.module.css';

const Header = props =>{

    return(
    <React.Fragment>
        <header >
            <ul className={classes.header}>
                <li >Home</li>
                <li >About US</li>
                <li >Contact US</li>
                <li >Blog</li>
            </ul>
        </header>
    </React.Fragment>
    )
}
export default Header;