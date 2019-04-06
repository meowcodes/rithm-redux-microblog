import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

/**
 * Receives single post data from PostList
 * Renders a card with post data
 */
class PostCard extends Component {

	constructor(props) {
		super(props)
		this.handleUpvote = this.handleUpvote.bind(this);
		this.handleDownvote = this.handleDownvote.bind(this);
	}

	handleUpvote() {
		
		this.props.triggerUpvote(this.props.postId);
	}

	handleDownvote() {
		this.props.triggerDownvote(this.props.postId);
	}


	render() {
		return (
			<div className="PostCard">
				<Link to={`/${this.props.postId}`}><p>{this.props.title}</p></Link>
				<p><i>{this.props.description}</i></p>
				<p>{this.props.votes}</p>
				<button onClick={this.handleUpvote}>Upvote</button>
				<button onClick={this.handleDownvote}>Downvote</button>
			</div>
		);
	}
}

export default PostCard;