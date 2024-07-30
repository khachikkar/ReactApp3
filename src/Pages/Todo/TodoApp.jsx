import "./TodoApp.css"
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import GetStart from "../../Components/GetStart/GetStart";
import { motion } from "framer-motion";

let data = [
    {
      id: Math.random(),
      title: "Test me",
      completed: false,
    },
  ];


export default function TodoApp() {
 

  const [val, setVal] = useState("");
  const handleval = (e) => {
    setVal(e.target.value);
  };

  const [task, setTask] = useState(data);
const [quan, setQuan] = useState(0)
  const handleclick = () => {

    if(!val){
        alert("Enter a Task please!")
        return
    }

    setTask([
      ...task,
      {
        id: Math.random(),
        title: val,
        completed: false,
      },
    ]);
    setVal("");

  };

  const deleteTask = (id) => {
    setTask(task.filter((item) => id !== item.id));
  };

  const compl = (id) => {
    setTask(
      task.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
   
  };

useEffect(()=>{
   let a  =  task.filter((item)=> item.completed === true).length
   setQuan(a)
}, [task])

  const deletedone =()=>{
    setTask(task.filter((item)=> item.completed !== true))
  }

  return (
    <section className="t-app">
<div className="last">


    <div className="hj">

      <motion.h1
      initial={{ y: "-6rem", opacity: "0" }}
      animate={{ y: "0", opacity: "1" }}
      transition={{ duration: 4, type: "spring" }}
      >TOdo App</motion.h1>

      <div className=" i-search">
        <input
        
          onChange={handleval}
          value={val}
          className=" t-search Input"
          placeholder="Add a to do"
        />
        <button onClick={handleclick} className="primaryButton">
          Add
        </button>
      </div>

      <div className="t-list">
        {task.length >0 ? task.map((item) => (
          <TodoItem compl={compl} mydelete={deleteTask} key={item.id} data={item} />
        )) : <h2>No Task</h2>}
           <div className="task">{quan}/{task.length} completed 
        <button className="t-but secbutton"
      onClick={deletedone}>delee done
      </button>
      </div>
      </div>

   

      </div>

      </div>
      <GetStart />

    </section>
    
  );
}
