import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

/**
 * Receives single post data from PostList
 * Renders a card with post data
 */
class PostCard extends Component {
    render() {
        return (
            <div className="PostCard">
                <Link to={`/${this.props.postId}`}><p>{this.props.title}</p></Link>
                <p><i>{this.props.description}</i></p>
            </div>
        );
    }
}

export default PostCard;