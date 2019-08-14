import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    selectedPost: null
  };

  getData = () => {
    if (this.props.match.params.id) {
      if (
        !this.state.selectedPost ||
        this.state.selectedPost.id !== +this.props.match.params.id
      ) {
        const url = `/posts/${this.props.match.params.id}`;
        axios.get(url).then(response => {
          this.setState({ selectedPost: response.data });
        });
      }
    }
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.getData();
  }

  deletePostHandler = () => {
    const url = `/posts/${this.props.match.params.id}`;
    axios.delete(url).then(resp => console.log(resp));
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.selectedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.selectedPost.title}</h1>
          <p>{this.state.selectedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
