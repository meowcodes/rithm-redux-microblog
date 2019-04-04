import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from './PostCard';

/**
 * Recieves all posts data from Redux store
 * Renders PostCard for each post
 */
class PostList extends Component {
  render() {
    
    const postCards = Object.keys(this.props.posts).map((id) =>       
      <PostCard 
        title={this.props.posts[id].title} 
        key={id}
        postId={id}
        description={this.props.posts[id].description} 
      />
    );
    
    return (
      <div className="PostList">
        { postCards }
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { posts: reduxState.posts };
}

export default connect(mapStateToProps)(PostList);