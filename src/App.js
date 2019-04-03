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
      posts: [
        {
          title: "Title",
          description: "Description",
          body: "body",
          postId: 0,
          comments: [
            {id:uuid(),text:"HAHAHAHA"}, 
            {id:uuid(),text:"MEow"}
          ]
        }
    ]
    }
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  addPost(postDataObj) {
    postDataObj.postId = uuid();
    let currPosts = [...this.state.posts, postDataObj]
    this.setState({posts: currPosts})
  }

  editPost(postDataObj) {
    console.log("IN EDIT", postDataObj)
    let filteredPosts = this.state.posts.filter(p => p.postId !== postDataObj.postId);
    let currPosts = [...filteredPosts, postDataObj]
    this.setState({posts: currPosts})
  }

  deletePost(id) {
    let filteredPosts = this.state.posts.filter(p => p.postId !== id);
    this.setState({posts: filteredPosts})
  }

  deleteComment(updatedPost){
    let filteredPosts = this.state.posts.filter(p => p.postId !== updatedPost.postId);
    let currPosts = [...filteredPosts, updatedPost]
    this.setState({posts: currPosts})
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes triggerAdd={this.addPost} triggerDelete={ this.deletePost } triggerEdit={ this.editPost } posts={this.state.posts} triggerDeleteComment={ this.deleteComment }/>
      </div>
    );
  }
}

export default withRouter(App);
