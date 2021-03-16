import React from 'react';
import style from './Navbar.module.css';
import Route from "react-router-dom";


const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.item}>
                Dialogs
            </div>
            <div className={style.item}>
                News
            </div>
            <div className={style.item}>
                Music
            </div>
            <div className={style.item}>
                Settings
            </div>
        </div>

    )
}

export default Navbar