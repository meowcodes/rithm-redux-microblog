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
    let comments = null;

    // render comments if they exist
    if(Object.keys(this.props.comments).length > 0){
      comments = Object.keys(this.props.comments).map((id) => <Comment 
        key={id} 
        id={id} 
        text={this.props.comments[id]} 
        triggerDeleteComment={this.props.triggerDeleteComment} 
      />);
    }

    return (
      <div>
        <h3>Comments</h3>
        <div>
          { comments }
        </div>
        <CommentForm triggerAddComment={this.props.triggerAddComment}/>
      </div>
    );
  }
}

export default Comments;