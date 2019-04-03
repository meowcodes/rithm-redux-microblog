import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Microblog from './Microblog';
import PostForm from './PostForm';
import BlogPost from './BlogPost';

class Routes extends Component {

  constructor(props) {
    super(props);
    this.findOnePost=this.findOnePost.bind(this);
  }

  findOnePost(id) {
    const currPost = this.props.posts.filter((p) => p.postId===id)[0];

    return currPost;
  }

  render() {
    return (
        <Switch>
          <Route 
            exact
            path="/"
            render={ () => <Microblog  posts={this.props.posts}/> }
          />
          <Route 
            exact
            path="/new"
            render={ (rtProps) => <PostForm history={rtProps.history}
              triggerAdd={this.props.triggerAdd} /> }
          />
          <Route 
            exact
            path="/:postId"
            render={ (rtProps) => <BlogPost 
              history={rtProps.history}
              cantFind="/"
              data={this.findOnePost(rtProps.match.params.postId)} 
              triggerDelete={ this.props.triggerDelete }
              triggerEdit={ this.props.triggerEdit }
              triggerDeleteComment = { this.props.triggerDeleteComment }
            /> }
          />
          <Redirect to="/" />
        </Switch>
    );
  }
}

export default Routes;