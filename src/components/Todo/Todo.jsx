
import axios from "axios";
import { useEffect, useState } from "react";
import InputCard from "../InputCard";
import TodoList from "../TodoList";
import "./style.css";

const Todo = () => {
    let [data,setData]= useState([]);
    let [loading,setLoading]=useState(false)
    let [inputValue,setInputValue]=useState("")
    let [myData,setMyData]=useState([])


useEffect(()=>{
        (async()=>{
            try {
                setLoading(true)
                    let res =await axios.get("https://jsonplaceholder.typicode.com/todos")
                    setData(res.data.slice(0,10));
                    setMyData(res.data.slice(10))
                }
                catch(err) {
                    console.log(err)
                }
                finally {
                setLoading(false)
                }
        })()
    },[])

let addTodoHandler = () => {
    let newTodo ={"title":inputValue,"id": Math.round(Math.random() * 90000),"completed": true}
    inputValue.length > 0 && setData((prev)=>[newTodo,...prev])  
    setInputValue("");
}

let removeTodoHandler = (id) => {
    setData(data.filter((item)=>item.id !== id))
}

let updateTodoHandler = (id,Utitle) => {
    setData(data.map((item)=> item.id === id? {...item,"completed": !(item.completed)} : item))
    console.log(Utitle);
}



    return (
        <>
            <div className="todoWrapper">
                <div className="container">
                        <InputCard inputValue={inputValue} setInputValue={setInputValue} addTodoHandler={addTodoHandler} />
                        <TodoList myData={myData} setData={setData} data={data} loading={loading} removeTodoHandler={removeTodoHandler} updateTodoHandler={updateTodoHandler}/>
                </div>
            </div>
        </>
    );
}

export default Todo;


            // <div className="todoWrapper">
            //     
            //     <Button title="add" classN=""/>
            //     {data.map((item)=>{
            //         return <span key={item.id}>{item.title}</span>
            //     })}
            // </div>