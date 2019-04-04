import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from './actions';
import PostForm from './PostForm';

/**
 * Receives history from Route
 * 
 * Renders PostForm
 * 
 * Sends new post data to Redux store
 * Redirects to homepage
 */
class AddPost extends Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newPostData) {
    this.props.addPost({ ...newPostData, comments: {} });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="AddPost">
        <PostForm
          postData={{ title: "", description: "", body: "" }}
          triggerAction={this.handleAdd}
          btnText="Add"
        />
      </div>
    );
  }
}

function mapStateToProps(reduxState, ownProps) {
  if (ownProps.postId) {
    const id = ownProps.postId;
    const post = reduxState.posts[id];
    return { post: post };
  } else {
    return {};
  }
}

export default connect(mapStateToProps, { addPost })(AddPost);