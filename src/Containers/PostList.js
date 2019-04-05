import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../Components/PostCard';
import {getTitlesFromApi} from '../actions'

/**
 * Recieves all posts data from Redux store
 * Renders PostCard for each post
 */
class PostList extends Component {


  render() {
    const postData = this.props;
    const postCards = Object.keys(postData.posts).map((id) =>       
      <PostCard 
        title={postData.posts[id].title} 
        key={id}
        postId={id}
        description={postData.posts[id].description} 
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

export default connect(mapStateToProps, { getTitlesFromApi })(PostList);