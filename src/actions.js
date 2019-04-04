import microblogApi from './microblogApi';
import { GET_TITLES, GET_POST, ADD_POST, EDIT_POST, DELETE_POST, GET_COMMENTS, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, SHOW_ERR } from './actionTypes';

/** 
 * Format data to be sent to the reducer
*/

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

export function getPostFromApi() {
	return async function (dispatch) {
		try {
			const post = await microblogApi.getPost();
			dispatch(gotPost(post));
		} catch(err) {
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

export function addPost(postDataObj) {
	return {
		type: ADD_POST,
		payload: {...postDataObj}
	}
}

export function editPost(postId, postDataObj) {
	return {
		type: EDIT_POST,
		payload: { postId, data: postDataObj }
	}
}

export function deletePost(postId) {
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

export function addComment(postId, commentText) {
	return {
		type: ADD_COMMENT,
		payload: { postId, commentText },
	}
}

export function editComment(postId, commentId, commentText) {
	return {
		type: EDIT_COMMENT,
		payload: { postId, commentId, commentText }
	}
}

export function deleteComment(postId, commentId) {
	return {
		type: DELETE_COMMENT,
		payload: { postId, commentId }
	}
}

export function showErr(errMsg) {
	return {
		type: SHOW_ERR,
		payload: { message: errMsg}
	}
}