import React, { useEffect, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { getTodoToEdit, deleteTodo } from "../TodoSlice/todoSlice";

const ViewComponent = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [cursor, setCursor] = useState("cursor-pointer");
  let todoArray = useSelector((state) => state.todoArr);
  let editObj = useSelector((state) => state.todoToEdit);
  let dispatch = useDispatch();

  useEffect(() => {
    if (!editObj) {
      setIsDisabled(false);
      setCursor("cursor-pointer");
      console.log("Inside UseEffect ", isDisabled);
    }
  }, [editObj]);

  function updateTodo(item) {
    console.log(item);

    setCursor("cursor-not-allowed");
    console.log(cursor);
    console.log("Inside updateBtn, before dispatch ", isDisabled);
    dispatch(getTodoToEdit(item));
    setIsDisabled(true);
    console.log("Inside  updateBtn, after dispatch ", isDisabled);
  }

  function deleteTodoObj(item) {
    //console.log(item);
    dispatch(deleteTodo(item));
  }

  // let allTodo = JSON.parse(localStorage.getItem("todo"))
  // setTodo(allTodo)

  // useEffect(() => {
  //     let allTodo = JSON.parse(localStorage.getItem("todo"))
  //     console.log(allTodo);

  //     setTodo(allTodo)

  // }, [])
  return (
    <>
      {/* <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mt-4">
        <h3 className="text-slate-900 dark:text-slate-500 mt-5 text-base font-bold tracking-wide ">
          Interactive ToDo
        </h3>
        <div>
          {todoArray &&
            todoArray.map((item, index) => (
              <li
                key={index}
                className="list-none align-baseline text-center dark:text-white"
              >
                {item.todoText} |
                <button
                  disabled={access}
                  className={`text-sm bg-green-700 px-2 mx-2 rounded-lg ${cursor}`}
                  onClick={() => updateTodo(item)}
                >
                  Update
                </button>{" "}
                |
                <button
                  disabled={access}
                  className={`text-sm bg-green-700 px-2 mx-2 rounded-lg ${cursor}`}
                  onClick={() => deleteTodoObj(item)}
                >
                  Delete
                </button>
              </li>
            ))}
        </div>
      </div> */}

      {/* <div className="relative overflow-hidden top-16 lg:top-14 flex flex-col lg:flex-row w-full flex-wrap content-center items-center justify-center gap-8 p-4">
        {todoArray &&
          todoArray.map((item, index) => (
            <motion.div
              className="bg-slate-800 p-6 border-b-4 border-t-4 rounded-3xl border-cyan-600 "
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              key={index}
            >
              <div className="w-60 h-64 rounded-3xl ">
                <p className="text-cyan-500 font-semibold text-md break-words text-left ">
                  {item.todoText}
                </p>
                <div className="absolute bottom-7 w-60">
                  <h3 className=" text-gray-400 font-semibold border-b-2"></h3>
                  <div className="flex flex-wrap justify-between items-center">
                    <button
                      className={`p-1 m-2 text-xs font-bold text-black bg-cyan-500 rounded-lg ${cursor}`}
                      disabled={isDisabled}
                      onClick={() => updateTodo(item)}
                    >
                      Update
                    </button>
                    <button
                      className={`text-xs font-bold text-black bg-cyan-500 p-1 m-2 rounded-lg ${cursor}`}
                      disabled={isDisabled}
                      onClick={() => deleteTodoObj(item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div> */}

      <div className="relative overflow-hidden -top-8 lg:top-6 flex flex-col lg:flex-row w-full flex-wrap content-center items-center justify-center gap-8 p-4">
        {todoArray &&
          todoArray.map((item, index) => (
            <div
              className="bg-customBlue p-6 border-b-4 border-t-4 rounded-3xl border-customPurple w-3/4 sm:w-1/3 lg:w-1/4 xl:w-1/6 hover:scale-110"
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              key={index}
            >
              <div className="w-full h-64 rounded-3xl flex flex-col justify-between">
                <p className="text-customPurple font-semibold text-xl break-words text-left">
                  {item.todoText}
                </p>
                <div className="w-full">
                  <h3 className="text-gray-400 font-semibold border-b-2 mb-2"></h3>
                  <div className="flex flex-wrap justify-between items-center">
                    <button
                      className={`p-1 m-1 text-sm font-bold text-black bg-customPurple rounded-lg ${cursor}`}
                      disabled={isDisabled}
                      onClick={() => updateTodo(item)}
                    >
                      Update
                    </button>
                    <button
                      className={`text-sm font-bold text-black bg-customPurple p-1 m-2 rounded-lg ${cursor}`}
                      disabled={isDisabled}
                      onClick={() => deleteTodoObj(item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ViewComponent;
