import React from 'react';
import style from './Dialogs.module.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={style.dialog}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={style.dialog}>{props.message}</div>
}


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Egor'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Artrem'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Lalalalalala'},
        {id: 3, message: 'Whilley Wonka'}
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) // беру массив dialogs и применяю к нему метод мар т.е. беру каждый элемент массива (d) и выполняю тег <DialogItem /> в котором через props передаю соответствующие значения name и id

    let messagesElement = messages.map(m => <Message message={m.message}/>)  // m это элемент массива messages []

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItem}>
                {dialogsElement} {/*//отрисовываем переменную с примененным выше методом мар*/}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>

        </div>
    )
}

export default Dialogs;

