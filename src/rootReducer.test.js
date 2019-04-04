import deepFreeze from 'deep-freeze';
import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';
import rootReducer from './rootReducer';

const INITIAL_STATE = {
  posts: {
    '1': {
      title: 'test-title',
      description: 'test-desc',
      body: 'test-body',
      comments: {
        '1': 'test comment'
      }
    }
  }
}

deepFreeze(INITIAL_STATE);

describe('reducer', function () {
  it("returns current state if no action type matches", function () {
    const action = {
      type: null
    }

    let state = rootReducer(INITIAL_STATE, action);
    expect(state).toEqual(INITIAL_STATE);
  });

  it("adds a new post", function () {
    const newPostData = {
      title: 'test-title2',
      description: 'test-desc2',
      body: 'test-body2',
      comments: {}
    }

    const action = {
      type: ADD_POST,
      payload: { ...newPostData, newId: 2 }
    }

    let state = rootReducer(INITIAL_STATE, action);
    expect(state).toEqual({
      posts: {
        '1': {
          title: 'test-title',
          description: 'test-desc',
          body: 'test-body',
          comments: {
            '1': 'test comment'
          }
        },
        '2': {
          title: 'test-title2',
          description: 'test-desc2',
          body: 'test-body2',
          comments: {},
          newId: 2
        }
      }
    });
  });

  it("edits a post", function () {
    const updatedPostData = {
      title: 'test-title-upd',
      description: 'test-desc-upd',
      body: 'test-body-upd',
      comments: {
        '1': 'test comment'
      }
    }

    const action = {
      type: EDIT_POST,
      payload: { postId: '1', data: updatedPostData }
    }

    let state = rootReducer(INITIAL_STATE, action);
    expect(state).toEqual({
      posts: {
        '1': {
          title: 'test-title-upd',
          description: 'test-desc-upd',
          body: 'test-body-upd',
          comments: {
            '1': 'test comment'
          }
        }
      }
    });
  });

  it("deletes a post", function () {
    const action = {
      type: DELETE_POST,
      payload: { postId: 1 }
    }

    let state = rootReducer(INITIAL_STATE, action);
    expect(state).toEqual({ posts: {} });
  });

  it("adds a comment", function() {
    const commentText = "test comment 2";

    const action = {
      type: ADD_COMMENT,
      payload: { postId: 1, commentText, newId: 2 }
    }

    let state = rootReducer(INITIAL_STATE, action);
    expect(state).toEqual({
      posts: {
        '1': {
          title: 'test-title',
          description: 'test-desc',
          body: 'test-body',
          comments: {
            '1': 'test comment',
            '2': 'test comment 2'
          }
        }
      }
    });
  });

  it("deletes a comment", function() {
    const action = {
      type: DELETE_COMMENT,
      payload: { postId: 1, commentId: 1 }
    }

    let state = rootReducer(INITIAL_STATE, action);
    expect(state).toEqual({
      posts: {
        '1': {
          title: 'test-title',
          description: 'test-desc',
          body: 'test-body',
          comments: {}
        }
      }
    });
  })
});