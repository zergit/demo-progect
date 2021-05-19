import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23}
    ]
};

it('length of posts should be incremented', () => {

    // 1.test data
    let action = addPostActionCreator('eeeee bebi')


    //2. action
    let newState = profileReducer(state, action);

//3. expectation
    expect(newState.posts.length).toBe(3);

});


it('message of new posts should be correct', () => {

    // 1.test data
    let action = addPostActionCreator('eeeee bebi')

    //2. action
    let newState = profileReducer(state, action);

//3. expectation

    expect(newState.posts[2].message).toBe("eeeee bebi");
});

it('after deleting length of messages should be decrement', () => {

    // 1.test data
    let action = deletePost(1)

    //2. action
    let newState = profileReducer(state, action);

//3. expectation

   expect(newState.posts.length).toBe(1);
});