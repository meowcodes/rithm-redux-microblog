import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPostFromApi } from '../actions';
import PostForm from '../Components/PostForm';


/**
 * Receives postId and toggleEdit function from BlogPost
 * Recieves post data from Redux store as props.post
 * 
 * Renders PostForm with pre-filled data
 * 
 * Sends toggleEdit trigger to BlogPost 
 * Sends updated post data to Redux store
 */
class EditPostContainer extends Component {

  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(updatedPostData) {
    this.props.triggerToggleEdit();

    const editedData = { ...updatedPostData, comments: this.props.post.comments }
    this.props.editPost(this.props.postId, editedData);
  }

  handleCancel() {
    this.props.triggerToggleEdit();
  }

  render() {
    return (
      <div className="EditPost">
        <PostForm
          postData={this.props.post}
          triggerAction={this.handleEdit}
          triggerCancel={this.handleCancel}
          btnText="Edit"
        />
      </div>
    );
  }
}

function mapStateToProps(reduxState, {postId}) {
  if (postId) {
    const post = reduxState.posts[postId];
    return { post };
  } else {
    return {};
  }
}

export default connect(mapStateToProps, { editPostFromApi })(EditPostContainer);