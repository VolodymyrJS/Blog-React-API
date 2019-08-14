import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Posts from "../../containers/Blog/Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent";
//import NewPost from "../Blog/NewPost/NewPost";
import "./Blog.css";

const asyncNewPost = asyncComponent(() => {
  return import("../Blog/NewPost/NewPost");
});

class Blog extends Component {
  state = {
    isAuth: true
  };
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul className="Blog">
              <li>
                <NavLink to="/posts/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.isAuth ? (
            <Route path="/new-post" component={asyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route
            render={() => (
              <h1 style={{ textAlign: "center" }}>Page not found 404.</h1>
            )}
          />
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
