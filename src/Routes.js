import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Microblog from './Microblog';
import NewPostForm from './NewPostForm';
import BlogPost from './BlogPost';

class Routes extends Component {
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
            render={ (rtProps) => <NewPostForm history={rtProps.history}
              triggerAdd={this.props.triggerAdd}/> }
          />
          <Route 
            exact
            path="/:postId"
            render={ (rtProps) => <BlogPost id={rtProps.match.params.postId} /> }
          />
          <Redirect to="/" />
        </Switch>
    );
  }
}

export default Routes;