import React, { Component } from 'react';
import PostCard from './PostCard';

class PostList extends Component {
  render() {
    const postCards = this.props.posts.map((p) => <PostCard 
      title={p.title} 
      key={p.postId}
      postId={p.postId}
      description={p.description} />)
    return (
      <div className="PostList">
        { postCards }
      </div>
    );
  }
}

export default PostList;