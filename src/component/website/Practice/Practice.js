import React,{useState} from 'react'


const Practice = () => {
    const[count,SetCount]=useState(0);
  return (
    <div>
       <h1>Higher Order Component</h1>
       <h1>{count}</h1>
       <button onClick={()=>SetCount(count+1)}>Update</button>
    </div>
  )
}

export default Practice
