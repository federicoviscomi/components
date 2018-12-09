import React, { Component } from "react";

class CommentDetail extends Component {
  author;
  timeAgo;
  img;
  avatar;
  constructor(props) {
    super(props);
    console.log(props);
    this.author = props.author;
    this.timeAgo = props.timeAgo;
    this.img = props.img;
    this.avatar = props.avatar;
  }

  render() {
    return (
      <div className="comment">
        <div>
          <a href="/" className="avatar">
            <img alt="avatar" src={this.avatar} />
          </a>
        </div>
        <div className="content">
          <a href="/" className="author">
            <p>{this.author}</p>
          </a>
          <div className="metadata">
            <span className="date">{this.timeAgo}</span>
          </div>
          <div className="text">{this.content}</div>
        </div>
      </div>
    );
  }
}

export default CommentDetail;
