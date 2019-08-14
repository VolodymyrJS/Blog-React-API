import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Posts from "../../containers/Blog/Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
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
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
