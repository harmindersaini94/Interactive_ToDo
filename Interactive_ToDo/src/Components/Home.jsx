import React, { useState, useId, useEffect, useRef } from "react";
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
      dispatch(updateTodo(obj));
    }

    setTask("");
  }

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative z-10 r px-6 py-20  ring-1 ring-slate-900/5 shadow-xl max-w-lg mx-auto"
    >
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
