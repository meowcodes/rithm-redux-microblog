import { GET_TITLES, GET_POST, ADD_POST, EDIT_POST, DELETE_POST, GET_COMMENTS, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from './actionTypes';

/** 
 * Format data to be sent to the reducer
*/
export function getTitles() {
	return {
		type: GET_TITLES
	}
}

export function getPost() {
	return {
		type: GET_POST
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