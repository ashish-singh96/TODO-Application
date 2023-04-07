import React,{useRef} from 'react'

const Practice = () => {
    let inputRef=useRef(null);
    let inputRef2=useRef(null);
    function submitButton(event){
        event.preventDefault();
        console.log(inputRef.current.value);
        console.log(inputRef2.current.value);
    }
    return (
        <div>
            <h1>UnControl Component</h1>
            <form onSubmit={submitButton}>
                <input ref={inputRef} type='text'></input><br></br><br></br>
                <input ref={inputRef2} type='text'></input><br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Practice
