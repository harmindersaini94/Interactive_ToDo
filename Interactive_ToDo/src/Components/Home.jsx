import React, { useState, useId, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../TodoSlice/todoSlice";
import Typed from "typed.js";

const Home = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  let editTodoObj = useSelector((state) => state.todoToEdit);
  const workRoles = useRef(null);

  useEffect(() => {
    if (editTodoObj) setTask(editTodoObj.todoText);
  }, [editTodoObj]); //<-- imp here , coz earlier when i was not passing it then it isnot working, coz useEffect only work one on first render and then when its values changed
  // on update button click, it iwas not updating the state

  function AddToLocalStorage(e) {
    e.preventDefault();

    if (!editTodoObj) {
      if (task !== "") {
        let todoObj = {
          id: Date.now(),
          todoText: task,
        };

        dispatch(addTodo(todoObj));
      }
    } else {
      let obj = {
        id: editTodoObj.id,
        todoText: task,
      };
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
    // <motion.div
    //   initial={{ y: -100, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   transition={{ duration: 0.6, delay: 0.4 }}
    //   className="bg-white dark:bg-slate-800 -mt-5  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
    // >
    //   <h3 className="text-cyan-500 -mt-4 text-xl font-bold tracking-wide">
    //     Interactive ToDo
    //   </h3>
    //   <div>
    //     <form onSubmit={AddToLocalStorage} className="flex flex-wrap justify-center items-center">
    //       <input
    //         className="w-80 rounded-xl h-11 p-4 m-3"
    //         type="text"
    //         placeholder="Enter Task"
    //         value={task}
    //         onChange={(e) => setTask(e.target.value)}
    //       />
    //       <button
    //         type="submit"
    //         className="text-slate-600 dark:text-white inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
    //       >
    //         {editTodoObj ? "Update" : "Add"}
    //       </button>
    //     </form>
    //   </div>
    // </motion.div>

    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      // className="relative z-10 dark:bg-slate-800 m-1 rounded-lg px-6 py-8  ring-1 ring-slate-900/5 shadow-xl max-w-lg mx-auto"
      className="relative z-10 r px-6 py-20  ring-1 ring-slate-900/5 shadow-xl max-w-lg mx-auto"
    >
      {/* <h3
        className="text-cyan-500 -mt-4 text-xl font-bold tracking-wide text-center h-16 overflow-hidden flex items-center justify-center"
        ref={workRoles}
      >
        INTERACTIVE TODO
      </h3> */}
      <div>
        <form
          onSubmit={AddToLocalStorage}
          className="flex flex-wrap justify-center items-center"
        >
          <input
            className="w-full sm:w-80 rounded-xl h-11 p-4 m-3"
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="submit"
            className="text-customTan font-bold inline-flex items-center justify-center p-2 bg-customBrown rounded-md shadow-lg w-1/4 sm:w-auto"
          >
            {editTodoObj ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Home;
