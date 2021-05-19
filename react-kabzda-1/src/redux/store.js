import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
// const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: 'It\'s my first post', likesCount: 23}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Serg'},
                {id: 2, name: 'Ylia'},
                {id: 3, name: 'Dimych'},
                {id: 4, name: 'Andrey'},
                {id: 5, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {//{type: ' ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }
}
          /*  if (action.type === ADD_POST) {
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            } else if (action.type === UPDATE_NEW_POST_TEXT) {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
             } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
                           this._state.dialogsPage.newMessageBody = action.body;
                           this._callSubscriber(this._state);
                       } else if (action.type === SEND_MESSAGE) {
                           let body = this._state.dialogsPage.newMessageBody;
                           this._state.dialogsPage.newMessageBody = '';
                           this._state.dialogsPage.messages.push({id: 6, message: body});
                           this._callSubscriber(this._state);
            }*/








export default store;
window.store = store;















