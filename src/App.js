import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost, editPost, deletePost } from './actions';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes triggerAdd={this.props.addPost} triggerDelete={ this.props.deletePost } triggerEdit={ this.props.editPost } posts={this.props.posts} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { posts: reduxState.posts };
}

const mapDispatchToProps = {
  addPost,
  editPost,
  deletePost

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
