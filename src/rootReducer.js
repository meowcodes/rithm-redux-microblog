import uuid from 'uuid/v4';
import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';

const INITIAL_STATE = { posts: [] };


function rootReducer(state = INITIAL_STATE, action) {
  const postData = action.payload? action.payload : null;

  switch(action.type){

    case ADD_POST:
      postData.postId = uuid();
      const addedPosts = [...state.posts, postData];
      return { posts: addedPosts }

    case EDIT_POST:
      return editPost(state, postData);

    case DELETE_POST:
      const deletedPosts = state.posts.filter(p => p.postId !== postData.postId);
      return { posts: deletedPosts }
    
    case ADD_COMMENT:
      const targetPostAdd = state.posts.filter(c => c.id === postData.postId);
      const addedComments = [...targetPostAdd.comments, {id: uuid(), "text": postData.commentText}]

      return editPost(state, {...targetPostAdd, comments: addedComments});

    case DELETE_COMMENT:
      const targetPostDelete = state.posts.filter(c => c.id === postData.postId);
      const deletedComments = targetPostDelete.comments.filter( c => c.id !== postData.commentId)

      return editPost(state, {...targetPostDelete, comments: deletedComments});

    default:
      return state;
  }
}

function editPost(state, postData) {
  const editedPosts = state.posts.filter(p => p.postId !== postData.postId);
  return { posts: [...editedPosts, postData] }
}

export default rootReducer;