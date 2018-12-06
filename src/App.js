import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CommentDetail from "./CommentDetail";
import faker from 'faker';
import ApprovalCard from "./ApprovalCard";

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
            </div>
        );
    }
}

export default App;
