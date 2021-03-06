import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Recieves postData from AddPost or EditPost
 * 
 * Renders form to edit/add post
 * 
 * On submit, sends postData to AddPost or EditPost
 * On cancel, redirects to props.cancelLinkTo
 */
class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.postData.title,
      description: this.props.postData.description,
      body: this.props.postData.body,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // trigger add or edit
    this.props.triggerAction(this.state);
  }

  render() {
    return (
      <div className="PostForm">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              name="title"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="body">Body: </label>
            <textarea
              name="body"
              id="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">{this.props.btnText}</button>
            <button onClick={this.props.triggerCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;