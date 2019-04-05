import microblogApi from './microblogApi';
import { GET_TITLES, GET_POST, ADD_POST, EDIT_POST, DELETE_POST, GET_COMMENTS, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, SHOW_ERR } from './actionTypes';

/** 
 * Format data to be sent to the reducer
*/

// gets all titles
export function getTitlesFromApi() {
	return async function (dispatch) {
		try {
			const titles = await microblogApi.getTitles();
			dispatch(gotTitles(titles));
		} catch(err) {
			const errMsg = err.response.data;
			dispatch(showErr(errMsg));
		}
	}
}

export function gotTitles(titles) {
	return {
		type: GET_TITLES,
		payload: { titles }
	}
}

// get a single post
export function getPostFromApi(postId) {
	return async function (dispatch) {
		try {
			const post = await microblogApi.getPost(postId);
			dispatch(gotPost(post));
		} catch(err) {
			console.log("POST ERR", err)
			const errMsg = err.response.data;
			dispatch(showErr(errMsg));
		}
	}
}

export function gotPost(post) {
	return {
		type: GET_POST,
		payload: { post }
	}
}

/**
 * Add new post to API
 * Add new post to Redux state
 * Add new title to Redux state
 */
export function addPostToApi(postData) {
	return async function (dispatch) {
		try {
			const post = await microblogApi.addPost(postData);
			// add an empty comments to post
			post.comments = [];
			// format a title for the new post
			const title = {
				id:post.id, 
				title: post.title,
				description: post.description,
				votes: post.votes
			}
			dispatch(addedPost(post, title));
		} catch(err) {
			const errMsg = err.response.data;
			dispatch(showErr(errMsg));
		}
	}
}

export function addedPost(newPost, newTitle) {
	return {
		type: ADD_POST,
		payload: { post: newPost, title: newTitle }
	}
}

/**
 * Send updated post to API
 * Update post in Redux state
 * Update title in Redux state
 */
export function editPostFromApi(postId, postData) {
	return async function (dispatch) {
		try {
			const post = await microblogApi.editPost(postId, postData);
			// format a new title for the edited post
			const title = {
				id: post.id, 
				title: post.title,
				description: post.description,
				votes: post.votes
			}
			dispatch(editedPost(postId, post, title));
		} catch(err) {
			console.log(err);
			const errMsg = err.response.data;
			dispatch(showErr(errMsg));
		}
	}
}

export function editedPost(postId, editedPost, editedTitle) {
	return {
		type: EDIT_POST,
		payload: { postId, post: editedPost, title: editedTitle }
	}
}

/**
 * Send delete req to API
 * Delete post from Redux state
 * Delete title from Redux state
 */
export function deletePostFromApi(postId) {
	return async function (dispatch) {
		try {
			await microblogApi.deletePost(postId);
			dispatch(deletedPost(postId));
		} catch(err) {
			const errMsg = err.response.data;
			dispatch(showErr(errMsg));
		}
	}
}

export function deletedPost(postId) {
	return {
		type: DELETE_POST,
		payload: { postId }
	}
}

export function getComments() {
	return {
		type: GET_COMMENTS
	}
}

/**
 * Adds a new comment a post to API
 * Update post with new comment in Redux state
 */
export function addCommentToApi(postId, text) {
	return async function (dispatch) {
		try {
			const comment = await microblogApi.addComment(postId, text);
			dispatch(addedComment(postId, comment));
		} catch(err) {
			const errMsg = err.response.data;
			dispatch(showErr(errMsg));
		}
	}
}


export function addedComment(postId, comment) {
	return {
		type: ADD_COMMENT,
		payload: { postId, comment },
	}
}

/**
 * Send updated comment to API
 * Update post with updated comment in Redux state
 */
export function editCommentFromApi(postId, commentId, text) {
	return async function (dispatch) {
		try {
			const comment = await microblogApi.editComment(postId, commentId, text);
			dispatch(editedComment(postId, comment));
		} catch(err) {

			const errMsg = err.response.data;
			dispatch(showErr(errMsg));
		}
	}
}

export function editedComment(postId, editedComment) {
	return {
		type: EDIT_COMMENT,
		payload: { postId, comment: editedComment }
	}
}

/**
 * Send delete comment req to API
 * Update post with deleted comment in Redux state
 */
export function deleteCommentFromApi(postId, commentId) {
	return async function (dispatch) {
		try {
			await microblogApi.deleteComment(postId, commentId);
			dispatch(deletedComment(postId, commentId));
		} catch(err) {
			console.log("DELETE ERR", err)
			const errMsg = err.response.data;
			dispatch(showErr(errMsg));
		}
	}
}

export function deletedComment(postId, commentId) {
	return {
		type: DELETE_COMMENT,
		payload: { postId, commentId }
	}
}

export function showErr(errMsg) {
	return {
		type: SHOW_ERR,
		payload: { message: errMsg }
	}
}