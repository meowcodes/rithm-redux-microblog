import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../Components/PostCard';
import {getTitlesFromApi} from '../actions'

/**
 * Recieves all posts data from Redux store
 * Renders PostCard for each post
 */
class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }


  async componentDidMount() {
    await this.props.getTitlesFromApi();
    this.setState({loading: false})
  }


  render() {
    const postData = this.props;
    let postCards = null;

    if(!this.state.loading && this.props.titles){
      postCards =  postData.titles.map((t) =>       
        <PostCard 
          title={t.title} 
          key={t.id}
          postId={t.id}
          description={t.description} 
        />
      );
    }
    
    return (
      <div className="PostList">
        { postCards }
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { titles: reduxState.titles };
}

export default connect(mapStateToProps, { getTitlesFromApi })(PostList);