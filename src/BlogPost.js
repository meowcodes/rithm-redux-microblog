import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { deletePost, addComment, deleteComment } from './actions';

import EditPost from './EditPost';
import Comments from './Comments';

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
        const currEdit = this.state.edit;
        this.setState({
            edit: !currEdit
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
        if (this.props.post === undefined) return <Redirect to={this.props.cantFind} />;

        return (
            <div className="BlogPost" >
                {this.state.edit
                    ? <EditPost
                        triggerToggleEdit={ this.toggleEdit } 
                        postId={ this.props.postId } 
                        edit={ true }/>
                    : <>
                        <h3>{this.props.post.title}</h3>
                        <p><i>{this.props.post.description}</i></p>
                        <p>{this.props.post.body}</p>
                        <button onClick={this.toggleEdit}>Edit</button>
                        <button onClick={this.handleDeletePost}>Delete</button>
                        <Comments comments={this.props.post.comments}
                            triggerAddComment={this.handleAddComment} triggerDeleteComment={this.handleDeleteComment} />
                    </>
                }

            </div>
        );
    }
}

function mapStateToProps(reduxState, ownProps) {
    if(ownProps.postId){
        const id = ownProps.postId;
        const post = reduxState.posts[id];
        return { post: post };
    }else {
        return {};
    }
}

const mapDispatchToProps = {
    deletePost,
    addComment,
    deleteComment
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);