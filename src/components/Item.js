import './Item.css'
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

export default function Item(props) {
    const { data, deleteTask, editTask } = props;
    return (
        <div className="list-item">
            <p className="title">{data.title}</p>
            <div className='button-container'>
                <BsTrash className="btn" onClick={() => deleteTask(data.id)}/>
                <AiOutlineEdit className="btn" onClick={() => editTask(data.id)} />
            </div>
        </div>
    )
}