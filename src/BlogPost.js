import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { deletePost, addComment, deleteComment } from './actions';

import PostForm from './PostForm';
import Comments from './Comments';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
    }

    toggleEdit() {
        const currEdit = this.state.edit;
        this.setState({
            edit: !currEdit
        })
    }

    handleDelete() {
        this.props.deletePost(this.props.id);
        this.props.history.push('/');
    }
    
    handleAddComment(commentText) {
        this.props.addComment(this.props.id, commentText);
    }

    handleDeleteComment(commentId) {
        this.props.deleteComment(this.props.id, commentId);
    }

    render() {
        if (this.props.post === undefined) return <Redirect to={this.props.cantFind} />;

        return (
            <div className="BlogPost" >
                {this.state.edit
                    ? <PostForm history={this.props.history} id={this.props.id} toggleEdit={ this.toggleEdit }/>
                    : <>
                        <h3>{this.props.post.title}</h3>
                        <p><i>{this.props.post.description}</i></p>
                        <p>{this.props.post.body}</p>
                        <button onClick={this.toggleEdit}>Edit</button>
                        <button onClick={this.handleDelete}>Delete</button>
                        <Comments comments={this.props.post.comments}
                            triggerAddComment={this.handleAddComment} triggerDeleteComment={this.handleDeleteComment} />
                    </>
                }

            </div>
        );
    }
}


function mapStateToProps(reduxState, ownProps) {
    if(ownProps.id){
        const id = ownProps.id;
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