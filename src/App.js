
// CSS 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Icons
import { TfiAgenda } from "react-icons/tfi";

import { useState } from "react";
import ListItems from "./Components/ListItems";


function App() {
  const [task, setTask] = useState("");
  const [currentTask, setCurrentTask] = useState([]);

  //=============Add your task method==============//
  const addTask = (e) => {
    e.preventDefault();
    setCurrentTask([
      ...currentTask,
      { task: task, id: Date.now(), isCompleted: false },
    ]);
    setTask("");
  };

// ========== Delete individual task================

  const deleteTask = (id) => {
    const newTask = currentTask.filter((e) => {
      return e.id !== id;
    });
    console.log(newTask);
    setCurrentTask(newTask);
  };

  //====================Completed task method==================

  const doneTask = (id) => {    
    //first find the element or task or id
    const element = currentTask.findIndex((elem) => elem.id === id);
    //console.log(element, id)
    //copay of array objects ot set new variable for editing purpose
    const newtask = [...currentTask];
    //Edit our task in particular element
    newtask[element] = {
      ...newtask[element],
      isCompleted: true,
    };

    //then updated to settasklist
    setCurrentTask(newtask);
  };

  // const [lineThrough , setLineThrough] = useState(false)
  //  const doneTask =()=>{
  //   setLine(!lineThrough );
  //  }


  return (
    <div className="bg_image">
      <header className="header bg-dark ">
        <h1>Todo App</h1>
      </header>
      <section className="container">
        <form className="form-center" onSubmit={addTask} autoComplete="off">
          <div className="mb-3 mt-3 ">
            <label className="form-label fw-bold">Add Todo</label>
            <input autofocus
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              className="form-control form-control-lg"
              minlength="4"
              placeholder="Enter Todo"
              required 
            />
            <button
              type="submit"
              className="btn btn-lg btn-warning mt-3 mbt-3 w-100 fw-bold"
            >
              <TfiAgenda /> ADD TASK
            </button>
          </div>
        </form>
      </section>

      <ListItems
        doneTask={doneTask}
        deleteTask={deleteTask}
        currentTask={currentTask}
      />
    </div>
  );
}

export default App;
