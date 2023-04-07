import React from 'react'

const User = (props) => {
    let data="ashish@gmail.com";
  return (
    <div>
        <h1>User Name:{props.name}</h1>
        <button onClick={()=>props.alert(data)}>Click Me</button>
    </div>
  )
}

export default User