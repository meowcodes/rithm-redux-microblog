import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import PostForm from '../Components/PostForm';

/**
 * Receives history from Route
 * 
 * Renders PostForm
 * 
 * Sends new post data to Redux store
 * Redirects to homepage
 */ 
class AddPostContainer extends Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newPostData) {
    this.props.addPost({ ...newPostData, comments: {} });
    this.props.history.push('/');
  }

  handleCancel() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="AddPost">
        <PostForm
          postData={{ title: "", description: "", body: "" }}
          triggerAction={this.handleAdd}
          triggerCancel={this.handleCancel}
          btnText="Add"
        />
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, { addPost })(AddPostContainer);