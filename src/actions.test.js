import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';
import { addPost, editPost, deletePost, addComment, deleteComment } from './actions';

describe("addPost action creator", function () {
  it("returns action to add post", function () {
    let action = addPost({test: test});

    expect(action).toEqual({
      type: ADD_POST,
      payload: { test: test, newId: expect.any(String) }
    });
  });
});

describe("editPost action creator", function () {
  it("returns action to edit post", function () {
    let action = editPost(1, {test: test});

    expect(action).toEqual({
      type: EDIT_POST,
      payload: { postId: 1, data: {test: test} }
    });
  });
});

describe("deletePost action creator", function () {
  it("returns action to delete post", function () {
    let action = deletePost(1);

    expect(action).toEqual({
      type: DELETE_POST,
      payload: { postId: 1 }
    });
  });
});


describe("addComment action creator", function () {
  it("returns action to add comment", function () {
    let action = addComment(1, "test comment");

    expect(action).toEqual({
      type: ADD_COMMENT,
      payload: { postId: 1, commentText: "test comment", newId: expect.any(String) }
    });
  });
});


describe("deleteComment action creator", function () {
  it("returns action to delete comment", function () {
    let action = deleteComment(1, 1);

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: { postId:1, commentId: 1 }
    });
  });
});
