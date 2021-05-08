import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormControl/FormComtrol";
import {maxLengthCreator, required} from "../Common/Validator/validator";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} dispatch={props.dispatch}/>)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }


    return (
        <div className={style.dialogs}>

            <div className={style.dialogItem}>
                {dialogsElement} {/*//отрисовываем переменную с примененным выше методом мар*/}
            </div>
            <div className={style.messages}>
                <div>
                    {messagesElement}
                </div>

                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={ [required, maxLength30] }
                       name="newMessageBody"
                       placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs;
