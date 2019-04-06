import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm'

/**
 * Receives all comments for a single post from BlogPost
 * 
 * Renders Comment for each comment
 * Renders CommentForm
 */
class Comments extends Component {

  render() {
    
    const comments = this.props.comments.map((c) => <Comment
      key={c.id}
      id={c.id}
      text={c.text}
      triggerDeleteComment={this.props.triggerDeleteComment}
    />);

    return (
      <div>
        <h3>Comments</h3>
        <div>
          {comments}
        </div>
        <CommentForm triggerAddComment={this.props.triggerAddComment} />
      </div>
    );
  }
}

export default Comments;