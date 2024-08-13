import React, { useState, useId, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../TodoSlice/todoSlice";

const Home = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  let editTodoObj = useSelector((state) => state.todoToEdit);

  useEffect(() => {
    if (editTodoObj) setTask(editTodoObj.todoText);
  }, [editTodoObj]); //<-- imp here , coz earlier when i was not passing it then it isnot working, coz useEffect only work one on first render and then when its values changed
  // on update button click, it iwas not updating the state

  function AddToLocalStorage(e) {
    e.preventDefault();

    if(!editTodoObj){
      let todoObj = {
        id: Date.now(),
        todoText: task,
      };
  
      dispatch(addTodo(todoObj));
    }else{
      let obj = {
        id: editTodoObj.id,
        todoText: task
      }
      // console.log("Edit object in Home ", obj);
      
      dispatch(updateTodo(obj));
    }


    setTask("");

    // let todoArray = JSON.parse(localStorage.getItem("todo"));
    // console.log(todoArray);

    // if (!todoArray) {
    //   // means nothing
    //   let array = [];
    //   array.push(task);
    //   localStorage.setItem("todo", JSON.stringify(array));
    // } else {
    //   todoArray.push(task);
    //   localStorage.setItem("todo", JSON.stringify(todoArray));
    // }

  

    // localStorage.clear()
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
    >
      <h3 className="text-slate-900 dark:text-slate-500 mt-5 text-base font-bold tracking-wide">
        Interactive ToDo
      </h3>
      <div>
        <form onSubmit={AddToLocalStorage}>
          <input
            className="w-80 rounded-xl h-11 p-4 m-3"
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="submit"
            className="text-slate-600 dark:text-white inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
          >
            {editTodoObj ? "Update" : "Add"}
          </button>
        </form>
      </div>

      {/* <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including
        upside-down. It even works in outer space.
      </p> */}
    </motion.div>
  );
};

export default Home;
