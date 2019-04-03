import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

  render() {
    let comments = this.props.data.comments.map(c => <Comment key={c.id} id={c.id} text={c.text} triggerDeleteComment={this.props.triggerDeleteComment} />);

    return (
      <div>
        { comments }
      </div>
    );
  }
}

export default Comments;