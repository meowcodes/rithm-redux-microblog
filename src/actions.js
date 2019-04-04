import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';


export function addPost(postDataObj) {
    return {
        type: ADD_POST,
        payload: postDataObj
    }
}

export function editPost(postId, postDataObj) {
    return {
        type: EDIT_POST,
        payload: { id: postId, data: postDataObj }
    }
}

export function deletePost(postId) {
    return {
        type: DELETE_POST,
        payload: {postId}
    }
}

export function addComment(postId, commentText) {
    return {
        type: ADD_COMMENT,
        payload: {postId, commentText},
    }
}

export function deleteComment(postId, commentId) {
    return {
        type: DELETE_COMMENT,
        payload: {postId, commentId}
    }
}