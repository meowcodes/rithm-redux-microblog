import React, { Component } from 'react';

/**
 * Receives one comment from Comments
 * 
 * Renders one comment with delete button
 * 
 * Sends triggerDelete with comment id to BlogPost (through Comments)
 */
class Comment extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.triggerDeleteComment(this.props.id);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>X</button>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Comment;