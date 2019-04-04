import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm'

class Comments extends Component {

  render() {

    console.log("COM", this.props.comments);
    let comments = null;
    if(Object.keys(this.props.comments).length > 0){
      comments = Object.keys(this.props.comments).map((id) => <Comment key={id} id={id} text={this.props.comments[id]} triggerDeleteComment={this.props.triggerDeleteComment} />);
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