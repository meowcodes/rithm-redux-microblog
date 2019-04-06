import React, { Component } from 'react';
import './Comment.css'

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
      <div className="Comment">
        <p>{this.props.text}</p>
        <button onClick={this.handleClick}><i class="far fa-times-circle"></i></button>
      </div>
    );
  }
}

export default Comment;