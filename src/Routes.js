import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Microblog from './Microblog';
import PostForm from './PostForm';
import BlogPost from './BlogPost';

class Routes extends Component {

  render() {
    return (
        <Switch>
          <Route 
            exact
            path="/"
            render={ () => <Microblog /> }
          />
          <Route 
            exact
            path="/new"
            render={ (rtProps) => <PostForm history={rtProps.history} />}
          />
          <Route 
            exact
            path="/:postId"
            render={ (rtProps) => <BlogPost 
              cantFind="/"
              history={rtProps.history}
              id={rtProps.match.params.postId}
            /> }
          />
          <Redirect to="/" />
        </Switch>
    );
  }
}

export default Routes;