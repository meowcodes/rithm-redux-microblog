import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PostForm from './PostForm';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggleEdit() {
        const currEdit = this.state.edit;
        this.setState({
            edit: !currEdit
        })
    }
    
    handleEdit(editedData) {
        console.log("IN HANDLE EDIT", editedData);
        this.props.triggerEdit(editedData);
        this.toggleEdit();
    }

    handleDelete() {
        this.props.triggerDelete(this.props.data.postId);
        this.props.history.push('/');
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
                    </>
                }
                
            </div>
        );
    }
}

export default BlogPost;