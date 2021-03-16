import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi men', likesCounter: 83},
                {id: 2, message: 'Pay your price', likesCounter: 888},
                {id: 3, message: 'du di du di du', likesCounter: 4},
                {id: 4, message: 'Yuuuhuuuu', likesCounter: 999}
            ],
            newPostText: 'incubatorJS'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Masha'},
                {id: 2, name: 'Egor'},
                {id: 3, name: 'Artem'}
            ],
            messages: [
                {id: 1, message: 'Like your project?'},
                {id: 2, message: 'lllll'},
                {id: 3, message: 'oooosaosa'}
            ],
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Masha',
                    avatar: <img
                        src='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'/>
                },
                {
                    id: 2,
                    name: 'Egor',
                    avatar: <img
                        src='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'/>
                },
                {
                    id: 3,
                    name: 'Artem',
                    avatar: <img
                        src='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'/>
                },
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {


        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}


window.store = store;
export default store;







