import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
export default class ToDoList extends Component {
  style = {
    minHeight: "100px",
  };
  returnItems() {
    const { items, handleDelete, handleEdit, handleComplete } = this.props;
    if (items.length > 0) {
      return (
        <ul className=' list-group list-group-flush ' style={this.style}>
          {items.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                title={item.title}
                duedate={item.duedate}
                dueDayCount={item.dueDayCount}
                complete={item.complete}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
                handleComplete={() => handleComplete(item.id)}
              />
            );
          })}
        </ul>
      );
    } else {
      return (
        <div className='text-center text-capitalize p-5'>
          there are no items in this list
        </div>
      );
    }
  }
  render() {
    const { clearList } = this.props;
    return (
      <div className='card h-7'>
        <div className='card-body p-0'>
          <div className='card-header-tab card-header'>
            <div className='card-header-title font-size-lg text-capitalize font-weight-normal'>
              <i className='fa fa-tasks'></i>&nbsp;&nbsp;Task Lists
            </div>
          </div>
          {this.returnItems()}
          <button
            className='btn btn-success text-capitalize float-left m-3'
            data-toggle='modal'
            data-target='#myModal'
          >
            Add Item
          </button>
          <button
            onClick={clearList}
            className='btn btn-danger text-capitalize float-right m-3'
          >
            Clear List
          </button>
        </div>
      </div>
    );
  }
}
