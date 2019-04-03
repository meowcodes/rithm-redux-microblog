import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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