import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Microblog from './Microblog';
import AddPost from './AddPost';
import BlogPost from './BlogPost';

/**
 * Routes to home (Microblog), new post form (AddPost), and indv posts (BlogPost)
 */
class Routes extends Component {

  render() {
    return (
      <Switch>
        
        <Route
          exact
          path="/"
          render={() => <Microblog />}
        />

        <Route
          exact
          path="/new"
          render={(rtProps) => <AddPost
            history={rtProps.history}
          />}
        />

        <Route
          exact
          path="/:postId"
          render={(rtProps) => <BlogPost
            cantFind="/"
            history={rtProps.history}
            postId={rtProps.match.params.postId}
          />}
        />

        <Redirect to="/" />

      </Switch>
    );
  }
}

export default Routes;