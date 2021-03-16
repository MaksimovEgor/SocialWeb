import React from 'react';
import style from './../Dialogs.module.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={style.dialog}>
        <img src='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'/>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}
export default DialogItem;

