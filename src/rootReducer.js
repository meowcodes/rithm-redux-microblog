import uuid from 'uuid/v4';
import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';

const INITIAL_STATE = { posts: {} };


function rootReducer(state = INITIAL_STATE, action) {
  const postData = action.payload? action.payload : null;

  switch(action.type){

    case ADD_POST:
      const addedPosts = {...state.posts, [uuid()]: postData};

      return { posts: addedPosts }

    case EDIT_POST:
      return editPost(state, postData.id, postData.data );

    case DELETE_POST:
      const deletedPosts = {...state.posts};
      delete deletedPosts(Object.keys(postData)[0]);

      return { posts: deletedPosts }
    
    case ADD_COMMENT:
      console.log("IN RED", state.posts[postData.postId])
      const targetPostAdd = state.posts[postData.postId];
      const addedComments = {...targetPostAdd.comments, [uuid()]: postData.commentText };
      console.log("IN RED2", addedComments);

      return editPost(state, postData.postId, {...targetPostAdd, comments: addedComments});

    case DELETE_COMMENT:
      const targetPostDelete = state.posts[postData.postId];
      delete targetPostDelete.comments[postData.commentId];

      return editPost(state, postData.postId, targetPostDelete);

    default:
      return state;
  }
}

function editPost(state, postId, postData) {
  console.log("IN REDIT edit", state, postId, postData)
  const editedPosts = {...state.posts, [postId]: postData}
  return { posts: editedPosts }
}

export default rootReducer;