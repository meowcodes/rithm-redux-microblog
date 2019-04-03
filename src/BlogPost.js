import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import uuid from 'uuid/v4';
import PostForm from './PostForm';
import Comments from './Comments';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
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
    
    handleEdit(editedData, toggle=true) {
        this.props.triggerEdit(editedData);
        if(toggle){
            this.toggleEdit();
        }
    }

    handleDelete() {
        this.props.triggerDelete(this.props.data.postId);
        this.props.history.push('/');
    }

    handleDeleteComment(commentId) {
        let updatedComments = this.props.data.comments.filter(c => c.id !== commentId);
        let updatedPost = {...this.props.data, comments: updatedComments}
        this.handleEdit(updatedPost, false);
    }

    handleAddComment(commentText) {
        let updatedComments = [...this.props.data.comments, {id: uuid(), "text": commentText}]
        let updatedPost = {...this.props.data, comments: updatedComments}
        this.handleEdit(updatedPost, false);
    }
    
    render() {
        if(this.props.data === undefined ) return <Redirect to={this.props.cantFind} />;

        return (
            <div className="BlogPost" >
                { this.state.edit 
                    ? <PostForm history={this.props.history} data={this.props.data} triggerEdit={ this.handleEdit } />
                    : <>
                        <h3>{this.props.data.title}</h3>
                        <p><i>{this.props.data.description}</i></p>
                        <p>{this.props.data.body}</p>
                        <button onClick={ this.toggleEdit }>Edit</button>
                        <button onClick={ this.handleDelete }>Delete</button>
                        <Comments comments={this.props.data.comments} 
                        triggerAddComment={this.handleAddComment}triggerDeleteComment={this.handleDeleteComment }/>
                    </>
                }
                
            </div>
        );
    }
}

export default BlogPost;