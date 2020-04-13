import React, { Component } from "react";

export default class ToDoItem extends Component {
  render() {
    const {
      title,
      duedate,
      dueDayCount,
      complete,
      handleDelete,
      handleEdit,
      handleComplete,
    } = this.props;
    return (
      <li className='list-group-item text-capitalize d-flex justify-content-start position-relative'>
        <div
          className={
            dueDayCount >= 3
              ? "todo-indicator bg-success"
              : "todo-indicator bg-warning"
          }
        ></div>
        <div className='container  float-left '>
          <h6
            style={{
              textDecoration: complete ? "line-through" : "",
            }}
          >
            {title}
            {complete ? (
              <div className='badge badge-success ml-2'>Completed</div>
            ) : (
              ""
            )}
            {!complete && dueDayCount >= 3 ? (
              <div className='badge badge-success ml-2'>
                Dues in {dueDayCount} days
              </div>
            ) : (
              ""
            )}
            {!complete && dueDayCount < 3 ? (
              <div className='badge badge-warning ml-2'>
                Dues in {dueDayCount} days
              </div>
            ) : (
              ""
            )}
            <div className=' text-secondary my-1' style={{ fontSize: ".8em" }}>
              {duedate}
            </div>
          </h6>
        </div>
        <div className=' d-flex'>
          <p style={{ minWidth: "180px" }}>
            <span
              className='mx-2 border-0 btn-transition btn btn-outline-success'
              onClick={handleComplete}
            >
              <i className='icon-check'></i>
            </span>
            <span
              className='mx-2 border-0 btn-transition btn btn-outline-warning'
              onClick={handleEdit}
              data-toggle='modal'
              data-target='#myModal'
            >
              <i className='icon-edit'></i>
            </span>
            <span
              className='mx-2  border-0 btn-transition btn btn-outline-danger'
              onClick={handleDelete}
            >
              <i className='icon-trash'></i>
            </span>
          </p>
        </div>
      </li>
    );
  }
}
