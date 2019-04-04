import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addPost, editPost } from './actions';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.post ? this.props.post.title : "",
            description: this.props.post ? this.props.post.description : "",
            body: this.props.post ? this.props.post.body : "",
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
        if (this.props.post) {
            this.props.toggleEdit();

            const editedData = {...this.state, comments: this.props.post.comments}

            this.props.editPost(this.props.id, editedData);
        } else {
            this.props.addPost({ ...this.state, comments: {} });
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="NewPostForm">
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="title">Title: </label>
                    <input name="title" id="title"
                        value={this.state.title} onChange={this.handleChange} />

                    <label htmlFor="description">Description: </label>
                    <input name="description" id="description"
                        value={this.state.description} onChange={this.handleChange} />

                    <label htmlFor="body">Body: </label>
                    <textarea name="body" id="body"
                        value={this.state.body} onChange={this.handleChange} />

                    <button type="submit"> Save </button>
                    <Link to="/"><button> Cancel </button></Link>

                </form>
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
    addPost,
    editPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);