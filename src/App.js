import './App.css';
import Headers from './components/Headers';
import AddForm from './components/AddForm';
import Item from './components/Item';
import { useState, useEffect } from 'react';

function App() {
  const [task, setTask] = useState( JSON.parse(localStorage.getItem("task")) || []);
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task))
  }, [task])

  function saveTask(e) {
    e.preventDefault();
    if (!task) {
      alert("กรุณาป้อนข้อมูลด้วย");
    } else if(editId) {
      const updateTask = task.map((item) => {
        if(item.id === editId) {
          return {...item, title: text}
        } else{
          return {...item}
        }
      })
      setTask(updateTask)
      setText('')
      setEditId(null)
    } else {
      const newTask = { 'id': task.length + 1, title: text }
      setTask([...task, newTask])
      setText('');
    }
  }

  function editTask(id) {
    setEditId(id);
    const editTask = task.find((item) => item.id === id)
    setText(editTask.title)
  } 

  function deleteTask(id) {
    return setTask(task.filter((data) => data.id !== id))
  }

  return (
    <div className={"App " + theme}>
      <Headers theme={theme} setTheme={setTheme} />
      <div className="container">
        <AddForm text={text} setText={setText} saveTask={saveTask} editId={editId} />
        <section>
          {task.map((data) => (
            <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask}/>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
