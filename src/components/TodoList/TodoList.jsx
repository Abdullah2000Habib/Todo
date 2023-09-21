
import Button from "../Button";
import Row from "../Row";
import "./style.css";
const TodoList = ({data,loading,removeTodoHandler,updateTodoHandler,setData,myData}) => {
    return (
        loading?"loading....":
        (<div className="todoListWrapper">
            <h3>Todo List</h3>
            <table>
                <thead>
                    <tr>
                        <th>List</th>
                        <th>Status</th>
                        <th>Close</th>
                    </tr>
                </thead>
                {data.map((item)=>{
                    return (<Row removeTodoHandler={removeTodoHandler} updateTodoHandler={updateTodoHandler} id={item.id} key={item.id} buttonTitle={item.completed?"pending":"completed"} rTitle={item.title} className={item.completed?"secondary":"primary"}/>)
                })}
            </table>
            <div className="showMoreBtn">
                <Button title="Show More" classN=""  onClick={()=>setData((prev)=>{return [...prev,...myData]})}/>
            </div>
        </div>)
    );
}

export default TodoList;
