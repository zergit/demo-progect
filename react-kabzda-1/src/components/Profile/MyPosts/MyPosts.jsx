import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";



const MyPosts = React.memo(props => {

    let postsElements =
      [...props.posts]
           .reverse()
           .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>

              <AddNewPostReduxForm onSubmit={onAddPost} />

                <div className={s.posts}>

                    {postsElements}

                </div>
            </div>
        )
})

const maxLength10 = maxLenghtCreator(10);

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText"  validate={[required,maxLength10 ]}
                    placeholder="Post message"/>
            </div>
            <div>
                <button >Add post</button>
            </div>

        </form>
    )
}

 const AddNewPostReduxForm = reduxForm ({form: "ProfileAddNewPostForm"}) (AddNewPostForm)

export default MyPosts;