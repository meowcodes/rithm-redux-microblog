import React, { Component } from 'react';

class Comment extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.triggerDeleteComment(this.props.id);
  }

  render() {
    console.log("IN INV COM", this.props)
    return (
      <div>
        <button onClick={this.handleClick}>X</button>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Comment;