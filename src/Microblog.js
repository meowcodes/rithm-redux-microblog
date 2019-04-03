import React, { Component } from 'react';
import PostCard from './PostCard'

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
        const postCards = this.props.posts.map((p) => <PostCard 
            title={p.title} 
            key={p.postId}
            postId={p.postId}
            description={p.description} />)


        return (
            <div className="Microblog">
                <p>Welcome to Microblog, our innovative site 
                    for communicating on the information superhighway</p>
                {postCards}
            </div>
        );
    }
}

export default Microblog;


// Add funcs for post 
// add post cards