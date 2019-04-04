import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { deletePost, addComment, deleteComment } from '../actions';

import EditPostContainer from './EditPostContainer';
import Comments from '../Components/Comments';

/**
 * Receives history and postId from Route
 * Receives single post data from Redux store
 * 
 * Renders post data or an edit form
 * 
 * Sends post id to delete & comment data to add/delete to Redux store
 */
class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
    }

    toggleEdit() {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleDeletePost() {
        this.props.deletePost(this.props.postId);
        this.props.history.push('/');
    }

    handleAddComment(commentText) {
        this.props.addComment(this.props.postId, commentText);
    }

    handleDeleteComment(commentId) {
        this.props.deleteComment(this.props.postId, commentId);
    }

    render() {

        const postData =this.props;

        if (postData.post === undefined) return <Redirect to={postData.cantFind} />;

        const editComponents = <EditPostContainer
            triggerToggleEdit={this.toggleEdit} 
            postId={postData.postId}
            edit={true} />

        const showComponents = <><h3>{postData.post.title}</h3>
            <p><i>{postData.post.description}</i></p>
            <p>{postData.post.body}</p>
            <button onClick={this.toggleEdit}>Edit</button>
            <button onClick={this.handleDeletePost}>Delete</button>
            <Comments comments={postData.post.comments}
                triggerAddComment={this.handleAddComment} triggerDeleteComment={this.handleDeleteComment} /></>

        return (
            <div className="BlogPost" >
                {this.state.edit
                    ? <>{editComponents}</>
                    : <>{showComponents}</>
                }
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

const mapDispatchToProps = {
    deletePost,
    addComment,
    deleteComment
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);