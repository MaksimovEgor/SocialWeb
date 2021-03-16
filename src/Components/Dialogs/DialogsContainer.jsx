import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = state.messages.map(m => <Message message={m.message}
                                                           dispatch={props.dispatch}/>)
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };
    let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
    };

    return (
        <div className={style.dialogs}>

            <div className={style.dialogItem}>
                {dialogsElement} {/*//отрисовываем переменную с примененным выше методом мар*/}
            </div>
            <div className={style.messages}>
                <div>{messagesElement}</div>
                <div><textarea
                    value={newMessageBody}
                    placeholder='Enter your mssage'
                    onChange={onNewMessageChange}/></div>
                <div><button
                    onClick={onSendMessageClick}>Send message</button></div>
            </div>

        </div>
    )
}

export default Dialogs;
