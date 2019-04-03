import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class BlogPost extends Component {
    // static defaultProps = {
    //     data: {
    //         title: "Title",
    //         description: "Description",
    //         body: "body",
    //         postId: 0 // DO NOT FORGET
    //     }
    // }
    render() {
        if(this.props.data === undefined ) return <Redirect to={this.props.cantFind} />;

        return (
            <div className="BlogPost" >
                <h3>{this.props.data.title}</h3>
                <p><i>{this.props.data.description}</i></p>
                <p>{this.props.data.body}</p>
            </div>
        );
    }
}

export default BlogPost;