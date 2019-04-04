import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost } from './actions';
import PostForm from './PostForm';

/**
 * Receives postId and toggleEdit function from BlogPost
 * Recieves post data from Redux store as props.post
 * 
 * Renders PostForm with pre-filled data
 * 
 * Sends toggleEdit trigger to BlogPost 
 * Sends updated post data to Redux store
 */
class EditPost extends Component {

  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(updatedPostData) {
    this.props.triggerToggleEdit();

    const editedData = { ...updatedPostData, comments: this.props.post.comments }
    this.props.editPost(this.props.postId, editedData);
  }

  render() {
    return (
      <div className="EditPost">
        <PostForm 
          postData={ this.props.post } 
          triggerAction={ this.handleEdit }
          triggerToggleEdit={this.props.triggerToggleEdit}
          btnText="Edit" 
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

export default connect(mapStateToProps, { editPost })(EditPost);