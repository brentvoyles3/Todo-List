import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import axios from 'axios';
import { Link } from "react-router-dom";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
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
                <select>
<option value="fruit">Exercise</option>
<option value="vegetable">Wash Car</option>
<option value="meat">Workout</option>
<option value="meat">Clean House</option>
<option value="meat">Laundry</option>
</select>
</div>
            </div>
        );
        }
}

export default LandingPage