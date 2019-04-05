import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { getPostFromApi, deletePostFromApi, addCommentToApi, editCommentFromApi, deleteCommentFromApi, upvotePostFromApi, downvotePostFromApi } from '../actions';

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
			edit: false,
			error: false
		}
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleDeletePost = this.handleDeletePost.bind(this);
		this.handleDeleteComment = this.handleDeleteComment.bind(this);
		this.handleAddComment = this.handleAddComment.bind(this);
		this.handleUpvote = this.handleUpvote.bind(this);
		this.handleDownvote = this.handleDownvote.bind(this);
	}

	// checks if post in redux, if not, gets from api. updates state. handles errs
	async componentDidMount() {
		if (this.props.post === undefined) {
			try {
				await this.props.getPostFromApi(this.props.postId);
				this.setState({
					loading: false,
					error: false
				})
			} catch (err) {
				this.setState({error: true})
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

	handleDeleteComment(commentId) {
		this.props.deleteCommentFromApi(this.props.postId, commentId);
	}

	handleUpvote() {
		this.props.upvotePostFromApi(this.props.postId);
	}

	handleDownvote() {
		this.props.downvotePostFromApi(this.props.postId);
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
				<p>{postData.post.votes}</p>
				<button onClick={this.handleUpvote}>Upvote</button>
				<button onClick={this.handleDownvote}>Downvote</button>
				<p>{postData.post.body}</p>
				<button onClick={this.toggleEdit}>Edit</button>
				<button onClick={this.handleDeletePost}>Delete</button>
				<Comments comments={postData.post.comments}
					triggerAddComment={this.handleAddComment} triggerDeleteComment={this.handleDeleteComment} /></>
		}

		return (
			<div className="BlogPost" >
				{this.state.error && <Redirect to={this.props.cantFind} />}
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

	let post = reduxState.posts[postId];
	return { post };
}

const mapDispatchToProps = {
	getPostFromApi,
	deletePostFromApi,
	addCommentToApi,
	deleteCommentFromApi,
	upvotePostFromApi,
	downvotePostFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);