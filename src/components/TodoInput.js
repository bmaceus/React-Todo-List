import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, duedate, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className='modal' id='myModal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Add Item</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                onClick={handleSubmit}
              >
                &times;
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit}>
                <div className='input-group'>
                  <div className='input-group-prepend'>
                    <div className='input-group-text bg-primary text-white'>
                      <i className='icon-book'></i>
                    </div>
                  </div>
                  <input
                    name='item'
                    type='text'
                    className='form-control text-capitalize'
                    placeholder='add a todo item'
                    value={item}
                    onChange={handleChange}
                  />
                </div>
                <div className='input-group my-3'>
                  <div className='input-group-prepend'>
                    <div className='input-group-text bg-primary text-white'>
                      <i className='icon-calendar'></i>
                    </div>
                  </div>
                  <input
                    name='duedate'
                    type='date'
                    className='form-control text-capitalize'
                    placeholder='10/20/19'
                    value={duedate}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className={
                    editItem
                      ? "btn btn-block btn-warning mt-3"
                      : "btn btn-block btn-primary mt-3"
                  }
                  type='submit'
                >
                  {editItem ? "Edit Item" : "Add Item"}
                </button>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-danger'
                data-dismiss='modal'
                onClick={handleSubmit}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
