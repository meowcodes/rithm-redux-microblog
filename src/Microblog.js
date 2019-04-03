import React, { Component } from 'react';
import PostList from './PostList';

class Microblog extends Component {
    static defaultProps = {
        posts: [{
            title: "Title",
            description: "Description",
            body: "body",
            postId: 0 // DO NOT FORGET
        }]
    }

    render() {
        return (
            <div className="Microblog">
                <p>Welcome to Microblog, our innovative site 
                    for communicating on the information superhighway</p>
                <PostList posts={ this.props.posts } />
            </div>
        );
    }
}

export default Microblog;
