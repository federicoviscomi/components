import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CommentDetail from "./CommentDetail";
import faker from 'faker';
import ApprovalCard from "./ApprovalCard";
import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import faker from "fakswer";

class App extends Component {
    author = 'asdf author';

    render() {
        return (
            <div className="App">
                <div>
                    <CommentDetail author="Sam" timeAgo="asdf asdf asdf" img={faker.image.avatar()}/>
                </div>
                <div>
                    <ApprovalCard/>
                </div>
                <div>
                    <div className="ui container comments">
                        <div className="comment">
                            <a href="/" className="avatar">
                                <img alt="avatar" src={faker.image.avatar()}/>
                            </a>
                            <div className="content">
                                <a href="/" className="author">
                                    Sam
                                </a>
                                <div>
                                    <span className="date">Today at 6:00PM</span>
                                </div>
                                <div className="text">Nice blog post!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
