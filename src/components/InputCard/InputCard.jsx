import Button from "../Button";
import "./style.css";
const InputCard = ({inputValue,setInputValue,addTodoHandler}) => {
    return (
        <>
                <div className="inputCardWrapper">
                    <input onChange={(e)=>{setInputValue(e.target.value)}} type="text" placeholder="What Would You Like To Do ?" value={inputValue} />
                    <Button onClick={addTodoHandler} title="Add" classN="primary"/>
                </div>
        </>
    );
}

export default InputCard;
