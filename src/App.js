import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid/v4'
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      posts: [{
        title: "Title",
        description: "Description",
        body: "body",
        postId: 0 // DO NOT FORGET
      }]
    }
    this.addPost = this.addPost.bind(this);
  }

  addPost(postDataObj) {
    postDataObj.postId = uuid();
    let currPosts = [...this.state.posts, postDataObj]
    this.setState({posts: currPosts})
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes triggerAdd={this.addPost} posts={this.state.posts}/>
      </div>
    );
  }
}

export default withRouter(App);
