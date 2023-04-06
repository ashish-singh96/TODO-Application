import React, { useState, useEffect } from 'react';
import './Style.css';

const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
}


const Todo = () => {
  const [inputData, SetInputData] = useState("");
  const [items, SetItems] = useState(getLocalData());



  const addItem = (event) => {
    event.preventDefault();
    if (!inputData) {
      alert("plz fill the data");
    } else {
      const myNewItemData = {
        id: new Date().getTime().toString(),
        name: inputData,
      }
      SetItems([...items, myNewItemData]);
      SetInputData("");
    }
  }


  const deleteItem = (index) => {
    const updateItems = items.filter((currEle) => {
      return currEle.id !== index;
    })
    SetItems(updateItems);
  }

  const removeAll = () => {
    SetItems([]);
  }


  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);
  return (

    <div>

      <div className='main-div'>

        <div className='child-div'>
          <figure>
            <img src='./images/todo.svg' alg='todologo' />
            <figcaption>Add your List Here</figcaption>
          </figure>
          <div className='addItems'>
            <input type='text' value={inputData} onChange={(event) => SetInputData(event.target.value)} placeholder='add item ✍️' />
            <i className="fa fa-plus add-btn" onClick={event => addItem(event)}></i>
          </div>
          <div className='showItems'>
            {items.map((currEle) => {
              return (
                <div className='eachItem' key={currEle.id} >
                  <h3>{currEle.name}</h3>
                  <div className='todo-btn'>
                    <i className="far fa-edit add-btn"></i>
                    <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(currEle.id)}></i>
                  </div>
                </div>
              )
            })}

          </div>
          <div className='showItems'>
            <button className='btn effect04' onClick={removeAll} data-sm-link-text='Remove All'> <span>Check List</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo;