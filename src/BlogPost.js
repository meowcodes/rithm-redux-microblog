import React, { Component } from 'react';

class BlogPost extends Component {
    static defaultProps = {
        title: "Title",
        description: "Description",
        body: "body",
        postId: 0 // DO NOT FORGET
    }
    render() {
        return (
            <div className="BlogPost" >
                <h3>{this.props.title}</h3>
                <p><i>{this.props.description}</i></p>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

export default BlogPost;