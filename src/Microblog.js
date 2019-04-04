import React, { Component } from 'react';
import PostList from './PostList';

/**
 * Renders PostList
 */
class Microblog extends Component {
    render() {
        return (
            <div className="Microblog">
                <p>Welcome to Microblog, our innovative site 
                    for communicating on the information superhighway</p>
                <PostList />
            </div>
        );
    }
}

export default Microblog;
