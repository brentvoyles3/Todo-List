import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import Popup from '../Popup/Popup';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";


const initialList = [
  {
    id: 'a',
    chore: 'Clean Clothes',
  },
  {
    id: 'b',
    chore: 'Workout',
  },
];


const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: state.list.concat({ chore: action.chore, id: action.id }),
      };
    default:
      throw new Error();
      console.log("Not good");
  }
};

const LandingPage = () => {
  const [list, setList] = React.useState(initialList);
  const [chore, setChore] = React.useState('');


  function handleChange(event) {
    setChore(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ chore, id: uuidv4() });
    setList(newList);
    setChore('');
  }

  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }


  return (
    <div className="body">
    {/* Add content */}
    <h1>
        Todo List
    </h1>
    <div className="addRemove">
      <AddItem
        chore={chore}
        onChange={handleChange}
        onAdd={handleAdd}
      />
      <List list={list} />
    </div>
    </div>
  );
};


const AddItem = ({ chore, onChange, onAdd }) => (
  <div>
        <button className="addButton" type="button" onClick={onAdd}>
      Add Chore
    </button>
    <input type="text" value={chore} onChange={onChange} />
  </div>
);

const RemoveItem = ({ chore, onChange, onRemove }) => (
  <div className="remove">
        <button className="removeButton" type="button" onClick={onRemove}>
      Remove Chore
    </button>
  </div>
);

const List = ({ list }) => (
<div className="addList">
  <ul>
    {list.map((item) => (
      <li key={item.id}>{item.chore}</li>
    ))}
  </ul>
  </div>
);

export default LandingPage;