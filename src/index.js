import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function TodoApp() {
  let [list, setList] = useState([]); //created a state to store the todo items
    let [text, setText] = useState('');
    let [todo, setTodo] = useState();
    let [btn, setBtn] = useState(true);


    const addTodo = () => {
        if(text !== "") {

            let tempList = [...list]
            tempList.push(text);
            setList(tempList)
            
            setText("")
        }else{
            alert("Fill the Todo")
        }

    }

    const getInput = (e) => {
        setText(e.target.value)
    }

    const deleteTodo = (index) => {
        let deletedList = [...list];
        deletedList.splice(index, 1)
        setList(deletedList);
    }

    const updateTodo = (item, index) => {
        let updateList = [...list]; //make copy of array 
        let returedValue = updateList.splice(index, 1); //remove the item from array
        setList(updateList) //update the list on UI after removal of item
        setText(returedValue)//show the removed item on input text to be updated 
        //set the updated Todo on the same position

        setTodo(index)
        setBtn(false)

    }

    const editTodo = () => {
        let changeList = [...list];
        changeList.splice(todo, 0, text)
        setList(changeList)
        setBtn(true)
        setText("")
    }

    return (
        <div className='main'>
            <h1>Todo App</h1>

            <input value={text} type="text" placeholder="Enter To Do" onChange={getInput} />
            <br/>
            <br />
            {

                btn ?
                    <button className='addTodo' onClick={addTodo}>Add New Task</button>
                    :
                    <button className='editTodo' onClick={editTodo}>Edit Todo</button>
            }


            <div>
                {list.map((item, index) => {
                    return (
                        <div className='todo'>
                            {item}
                            <br />
                            <button className='delBtn' onClick={() => deleteTodo(index)}>Delete</button>
                            <button className = "UpdateBtn" onClick={() => updateTodo(item, index)}>Update</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

ReactDOM.render(
  <TodoApp/>,
  document.querySelector("#root")
)

