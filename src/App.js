import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import ToDoList from "./components/ToDoList";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/";

import uuid from "uuid/v1";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    duedate: "",
    complete: false,
    editItem: false,
    noitems: true,
  };
  handleChange = (e) => {
    if (e.target.name === "duedate") {
      e.target.value = e.target.value.match("^[0-9-]*$", "");
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.item !== "" && this.state.duedate !== "") {
      const oneDay = 24 * 60 * 60 * 1000;
      const dateNow = new Date();
      const duedate = new Date(this.state.duedate);
      const duedateTime = duedate.getTime();
      const diffDays = Math.round(Math.abs((dateNow - duedate) / oneDay));
      const newItem = {
        id: this.state.id,
        title: this.state.item,
        duedate: this.state.duedate,
        duedateTime: duedateTime,
        dueDayCount: diffDays,
        complete: this.state.complete,
      };
      const updatedItems = [newItem, ...this.state.items];
      const updatedItemsDueDate = updatedItems.sort(
        (a, b) => a.duedateTime - b.duedateTime
      );

      console.log(updatedItemsDueDate);
      this.setState({
        items: updatedItemsDueDate,
        id: uuid(),
        item: "",
        duedate: "",
        complete: false,
        editItem: false,
      });
    }
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItem,
    });
  };
  handleEdit = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      editItem: true,
      id: id,
      complete: selectedItem.complete,
    });
  };
  handleComplete = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          if (item.complete) {
            return {
              ...item,
              complete: false,
            };
          } else {
            return {
              ...item,
              complete: true,
            };
          }
        } else {
          return item;
        }
      }),
    });
  };
  render() {
    return (
      <div className='container d-flex h-100'>
        <div className='row align-self-center w-100'>
          <div className='col-10 mx-auto col-md-8 '>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <ToDoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleComplete={this.handleComplete}
              noitems={this.noitems}
            />
          </div>
        </div>
      </div>
    );
  }
}
