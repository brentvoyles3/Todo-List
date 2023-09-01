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

const App = () => {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });
  const [chore, setchore] = React.useState('');

  function handleChange(event) {
    setchore(event.target.value);
  }

  function handleAdd() {
    dispatchListData({ type: 'ADD_ITEM', chore, id: uuidv4() });
    setchore('');
  }

  return (
    <div className="body">
    {/* Add content */}
    <h1>
        Todo List
    </h1>
    <div>
      <AddItem
        chore={chore}
        onChange={handleChange}
        onAdd={handleAdd}
      />
      <List list={listData.list} />
    </div>
    </div>
  );
};

const AddItem = ({ chore, onChange, onAdd }) => (
  <div className="add">
        <button className="addButton" type="button" onClick={onAdd}>
      Add Chore
    </button>
    <input type="text" value={chore} onChange={onChange} />
  </div>
);

const RemoveItem = ({ chore, onChange, onAdd }) => (
  <div className="remove">
        <button className="removeButton" type="button" onClick={onAdd}>
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

export default App;