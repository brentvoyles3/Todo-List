import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import Popup from '../Popup/Popup';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isOpen: false
    };
    }
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

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
            <div className="total">
                {/* Website landing page content */}
                <div className="body">
                        {/* Add content */}
                        <h1>
                            Todo List
                        </h1>
                <div className="items">
                <Button variant="primary" onClick={this.openModal}> Add item </Button>
                <Modal show={this.state.isOpen}>{/* ... */}</Modal>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>Which item would you like to add to the list?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
                <select>
                    <option value="chore1">Exercise</option>
                    <option value="chore2">Wash Car</option>
                    <option value="chore3">Workout</option>
                    <option value="chore4">Clean House</option>
                    <option value="chore5">Laundry</option>
                </select>
                <Button variant="primary" onClick={this.openModal}> Complete Item </Button>
                <Modal show={this.state.isOpen}>{/* ... */}</Modal>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Remove Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>Which item would you like to remove from the list?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
                </div>
      </div>
            </div>
        );
        }
}

export default LandingPage