import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    return (
        <nav className={style.navbarrr}>
            <div className={style.item}>
                <NavLink to='../Profile/' activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='../Dialogs/' activeClassName={style.activeLink}>Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='../News/' activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='../Music/' activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='../Settings/' activeClassName={style.activeLink}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='../Users/' activeClassName={style.activeLink}>Users</NavLink>
            </div>
        </nav>


    )
}

export default Navbar;
