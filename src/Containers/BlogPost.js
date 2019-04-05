import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { getPostFromApi, deletePostFromApi, addCommentToApi, editCommentFromApi, deleteCommentFromApi } from '../actions';

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
			loading: true,
			edit: false
		}
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleDeletePost = this.handleDeletePost.bind(this);
		this.handleDeleteComment = this.handleDeleteComment.bind(this);
		this.handleAddComment = this.handleAddComment.bind(this);
	}

	async componentDidMount() {
		if (this.props.post === undefined) {
			try {
				await this.props.getPostFromApi(this.props.postId);
				this.setState({
					loading: false
				})
			} catch (err) {
				if (this.props.post === undefined) return <Redirect to={this.props.cantFind} />;
			}
		} else {
			this.setState({
				loading: false
			})
		}
	}

	toggleEdit() {
		this.setState({
			edit: !this.state.edit
		})
	}

	handleDeletePost() {
		this.props.deletePostFromApi(this.props.postId);
		this.props.history.push('/');
	}

	async handleAddComment(commentText) {
		await this.props.addCommentToApi(this.props.postId, commentText);
	}

	// FIXME: add edit comment

	async handleDeleteComment(commentId) {
		await this.props.deleteCommentFromApi(this.props.postId, commentId);
	}

	render() {

		const postData = this.props;
		let editComponents;
		let showComponents;

		if (!this.state.loading) {
			editComponents = <EditPostContainer
				triggerToggleEdit={this.toggleEdit}
				postId={postData.postId}
				edit={true} />

			showComponents = <><h3>{postData.post.title}</h3>
				<p><i>{postData.post.description}</i></p>
				<p>{postData.post.body}</p>
				<button onClick={this.toggleEdit}>Edit</button>
				<button onClick={this.handleDeletePost}>Delete</button>
				<Comments comments={postData.post.comments}
					triggerAddComment={this.handleAddComment} triggerDeleteComment={this.handleDeleteComment} /></>
		}

		return (
			<div className="BlogPost" >
				{this.state.loading && <p>Loading</p>}
				{!this.state.loading && this.state.edit
					? <>{editComponents}</>
					: <>{showComponents}</>
				}
			</div>
		);
	}
}

function mapStateToProps(reduxState, { postId }) {
	if (postId) {
		let post = reduxState.posts[postId];
		return { post };
	} else {
		return {};
	}
}

const mapDispatchToProps = {
	getPostFromApi,
	deletePostFromApi,
	addCommentToApi,
	deleteCommentFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);