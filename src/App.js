import React, { useState } from "react";
import ToDoLists from "./todo";
import './App.css';

const App = () => {
    const[inputList , setInputList] = useState("");
    const [items,setItems] = useState([])

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
           return [...oldItems,inputList];
        });
        setInputList("");
    }

    const deleteItems = (id) => {
        console.log("deleted");

        setItems((oldItems) =>{
             return oldItems.filter((arrElem, index) =>{
                return index !== id
             })
        })
    }

    

    return(
        <>
            <div className="main-div">
                <div className="child-div">
                    <h1> To Do List</h1>
                    
                    <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputList}/>
                    <button onClick={listOfItems}>+</button>

                    
                    <ol>
                        {items.map((itemVal , index) => {
                            return <ToDoLists text = {itemVal} 
                                key = {index} id = {index}
                                onSelect = {deleteItems}
                            />
                        })}
                        
                    </ol>
                </div>

            </div>
        </>
    );
}

export default App;