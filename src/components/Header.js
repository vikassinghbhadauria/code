import React from 'react';
import classes from './Header.module.css';

const Header = props =>{

    return(
    <React.Fragment>
        <header >
            <ul className={classes.header}>
                <li><a href="http://localhost:3000/">Home</a></li>
                <li><a href="http://localhost:3000/">About US</a></li>
                <li><a href="http://localhost:3000/">Contact US</a></li>
                <li><a href="http://localhost:3000/">Blog</a></li>
                           
            </ul>
        </header>
    </React.Fragment>
    )
}
export default Header;