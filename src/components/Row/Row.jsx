import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import Button from '../Button';
import './style.css';
const Row = ({rTitle,buttonTitle,className,removeTodoHandler,id,updateTodoHandler}) => {
    return (
        <>
            <tr className='rowWrapper'>
                <td className='title'>{rTitle}</td>
                <td>
                    <Button title={buttonTitle} classN={className}/>
                </td>
                <td>
                    <button onClick={()=>{removeTodoHandler(id)}} disabled={buttonTitle === "pending"} className={buttonTitle === "pending" ? "disabledBtn" :"button"}>
                        <DeleteIcon sx={{color:"red",cursor:"pointer"}}/>
                    </button>
                    <button className="button" style={{marginLeft: "1rem"}} onClick={()=>{updateTodoHandler(id,"update")}}>
                        <UpdateIcon sx={{color:"blue",cursor:"pointer"}}/>
                    </button>
                </td>
            </tr>
        </>
    );
}

export default Row;
