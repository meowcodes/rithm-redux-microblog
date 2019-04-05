import { GET_TITLES, GET_POST, ADD_POST, EDIT_POST, DELETE_POST, GET_COMMENTS, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, VOTE_POST } from './actionTypes';


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
      // add new post to posts
      const posts = {...state.posts, [action.payload.post.id]: action.payload.post};
      // add new title to titles
      const titlesAdd = [...state.titles, action.payload.title];

      return { titles: titlesAdd, posts };

    case EDIT_POST:
      // get the comments from current state
      const editedPostComments = [...state.posts[action.payload.postId].comments];
      const editedPost = {...action.payload.post, comments: editedPostComments};

      // replace old title with new title
      const titlesEdit = state.titles.filter(t => t.id !== action.payload.postId );

      return {
        titles : [...titlesEdit, action.payload.title], 
        posts: {...state.posts, [action.payload.post.id]: editedPost}
      };
    
    case DELETE_POST:
      // delete post from state
      const deletedPosts = {...state.posts};
      delete deletedPosts[action.payload.postId];

      // delete title from state
      const titlesDelete = state.titles.filter(t => t.id !== action.payload.postId)

      return { titles: titlesDelete, posts: deletedPosts }
    
    case ADD_COMMENT:
      // make a copy of target post comments
      const targetPostAddComments = state.posts[action.payload.postId].comments;
      // create new comments obj with new comment
      const addedComments = [
        ...targetPostAddComments, 
        {...action.payload.comment} 
      ];
      // make a copy of target post with new comments obj
      const targetPostAdd = {...state.posts[action.payload.postId], comments: addedComments};

      const addCommentPosts = {
        ...state.posts, 
        [action.payload.postId]: targetPostAdd
      }

      // update post with new post data
      return {...state, posts: addCommentPosts};

    case EDIT_COMMENT:
      // make a copy of target post comments
      const targetPostEditComments = state.posts[action.payload.postId].comments;
      // add edited comment to a new comment arr
      const editedComments = targetPostEditComments.map(c => {
        if(c.id === action.payload.comment.id){
          return action.payload.comment;
        }else {
          return c;
        }
      });
      // make a copy of target post with new comment obj;
      const targetPostEdit = {...state.posts[action.payload.postId], comments: editedComments};

      const editCommentPosts = {...state.posts,
        [action.payload.postId]: targetPostEdit}

      // update post with new post data
      return {...state, posts: editCommentPosts};

    case DELETE_COMMENT:
      // make a copy of target post comments
      const targetPostDeleteComments = state.posts[action.payload.postId].comments;

      // delete target comment
      const deletedComments = targetPostDeleteComments.filter(c => c.id !== action.payload.commentId);
      // make a copy of target post with new comments obj

      const targetPostDelete = {...state.posts[action.payload.postId],
        comments: deletedComments};

      const deleteCommentPosts = {...state.posts,
        [action.payload.postId]: targetPostDelete}

      return {...state, posts: deleteCommentPosts};

    case VOTE_POST:
        // get copy of specific post (from state)
        const downvotedPost = {...state.posts[action.payload.postId], votes: action.payload.votes}

        // create new post w/ updated votes 

        // make new object of all current posts
        const downvotedPosts = {...state.posts, [action.payload.postId]: downvotedPost}
        // make new title
        const downvotedTitle = {
          id: downvotedPost.id, 
          title: downvotedPost.title,
          description: downvotedPost.description,
          votes: downvotedPost.votes
        }

        const downvotedTitles = state.titles.map(t => {
          if(t.id === downvotedPost.id) {
            return downvotedTitle;
          } else {
            return t;
          }
        })

        // return updated state
        return {titles: downvotedTitles, posts: downvotedPosts}

    default:
      return state;
  }
}

export default rootReducer;