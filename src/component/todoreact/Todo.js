import React, { useState } from 'react';
import './Style.css';

const Todo = () => {
  const [inputData, SetInputData] = useState("");
  const [items, SetItems] = useState([]);
  


  const addItem = (event) => {
    // console.log(addItem);
    event.preventDefault();
    if (!inputData) {
      alert("plz fill the data");
    } else {
      SetItems([...items, inputData]);
      SetInputData("");
    }
  }
  return (

    <div>

      <div className='main-div'>

        <div className='child-div'>
          <figure>
            <img src='./images/todo.svg' alg='todologo' />
            <figcaption>Add your List Here</figcaption>
          </figure>
          <div className='addItems'>
            <input type='text' value={inputData} onChange={(event) => SetInputData(event.target.value)} placeholder='add item ✍️'/>
            <i className="fa fa-plus add-btn" onClick={event=>addItem(event)}></i>
          </div>
          <div className='showItems'>
            {items.map((currEle, index) => {
              return (
                <div className='eachItem'>
                  <h3>{currEle}</h3>
                  <div className='todo-btn'>
                    <i className="far fa-edit add-btn"></i>
                    <i className="far fa-trash-alt add-btn"></i>
                  </div>
                </div>
              )
            })}

          </div>
          <div className='showItems'>
            <button className='btn effect04' data-sm-link-text='Remove All'> <span>Check List</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo;