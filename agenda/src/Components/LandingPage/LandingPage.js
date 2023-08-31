import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import Popup from '../Popup/Popup';
import axios from 'axios';
import { Link } from "react-router-dom";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
    };
    }
    saySomething(something) {
        console.log(something);
    }

    handleClick(e) {
        this.saySomething("element clicked");
    }

    componentDidMount() {
        this.saySomething("component did mount");
    }

    render() {
        return (
            <div>
                {/* Website landing page content */}
                <div className="body">
                    <div className="landingContent">
                        {/* Add content */}
                        <h1>
                            Todo List
                        </h1>
                    </div>
                </div>
                <div className="items">
                    <label>
                        Chore:
                    </label>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Add item
                </button>
                <select>
                    <option value="chore1">Exercise</option>
                    <option value="chore2">Wash Car</option>
                    <option value="chore3">Workout</option>
                    <option value="chore4">Clean House</option>
                    <option value="chore5">Laundry</option>
                </select>
                <button>
                    Remove item
                    </button>
                </div>
                <p>You clicked {this.state.count} times</p>
            </div>
        );
        }
}

export default LandingPage