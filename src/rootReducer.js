import { GET_TITLES, GET_POST, ADD_POST, EDIT_POST, DELETE_POST, GET_COMMENTS, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from './actionTypes';


const INITIAL_STATE = { titles: [], posts: {} };

/**
 * Receives state/action through action creators
 * Returns new/current state
 */
function rootReducer(state = INITIAL_STATE, action) {
  // not repeating action.payload ; 
  // const postData = action.payload? action.payload : {};

  switch(action.type){
    case GET_TITLES:
      return {...state, titles: [...action.payload.titles]};
    
    case GET_POST:
      // make a copy of state.posts and add the newly retreived post with key of id and val of the data
      const currPosts = {...state.posts, [action.payload.post.id]: action.payload.post}
      return {...state, posts: currPosts};

    case ADD_POST:
      return {...state, posts: {...state.posts, [action.payload.post.id]: action.payload.post}};

    case EDIT_POST:
      // get the comments from current state
      const editedPostComments = [...state.posts[action.paylod.postId].comments];
      const editedPost = {...action.payload.post, comments: editedPostComments};
      return {...state, posts: {...state.posts, [action.payload.post.id]: editedPost}};
    
    case DELETE_POST:
      const deletedPosts = {...state.posts};
      delete deletedPosts[postData.postId];

      return { posts: deletedPosts }
    
    case ADD_COMMENT:
      // make a copy of target post comments
      const targetPostAddComments = state.posts[postData.postId].comments;
      // create new comments obj with new comment
      const addedComments = {...targetPostAddComments, [postData.newId]: postData.commentText };
      // make a copy of target post with new comments obj
      const targetPostAdd = {...state.posts[postData.postId], comments: addedComments};

      // update post with new post data
      return editPost(state, postData.postId, targetPostAdd);

    case DELETE_COMMENT:
      // make a copy of target post comments
      const targetPostDeleteComments = {...state.posts[postData.postId].comments};
      // delete target comment
      delete targetPostDeleteComments[postData.commentId];
      // make a copy of target post with new comments obj
      const targetPostDelete = {...state.posts[postData.postId], comments: targetPostDeleteComments};

      // update post with new post data
      return editPost(state, postData.postId, targetPostDelete);

    default:
      return state;
  }
}

/**
 * Receives current state, id of post to update, and new post data
 * Returns new/updated state
 */
function editPost(state, postId, postData) {
  const editedPosts = {...state.posts, [postId]: postData}
  return { posts: editedPosts }
}

export default rootReducer;