import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
// import FullPost from './FullPost/FullPost.js';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import asyncComponent from './../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});
// import axios from 'axios';


class Blog extends Component {
  state = {
    auth: true
  };

    render () {

      return (
        <div className="Blog">
          <header>
            <nav>
              <ul>
                <li><NavLink
                    exact
                    to="/posts"
                    activeClassName="my-active"
                    activeStyle={{
                      color: '#fa923f',
                      textDecoration: 'underline'
                    }}
                  >Posts</NavLink></li>
                <li><NavLink to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submut=true'
                }}>New Post</NavLink></li>
          </ul>
        </nav>
      </header>
      {/*<Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/new-post" render={() => <h1>New Post</h1>} />*/}
          <Switch>
            {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
            <Route path="/posts" component={Posts} />
            <Route render={() => <h1>Not Found</h1>} />
            {/* <Redirect from="/" to="/posts" /> */}
            {/* <Route path="/:id" component={FullPost} /> */}
          </Switch>
        </div>
      );
    }
}

export default Blog;
