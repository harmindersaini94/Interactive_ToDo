import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { getTodoToEdit, deleteTodo, addTodo } from "../TodoSlice/todoSlice";

const ViewComponent = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [cursor, setCursor] = useState("cursor-pointer");
  let todoArray = useSelector((state) => state.todoArr);
  let editObj = useSelector((state) => state.todoToEdit);
  let dispatch = useDispatch();

  /**
   * So Here we will check if the state is empty, then we will check if the Local storage is also empty
   * State will be empty if we refresh, but in that case if we have Todo in local storage we will display them
   */
  if (todoArray.length === 0) {
    // control comes inside means Todo array empty , either there are 0 Todo or user refreshed page
    // Get data from local storage
    let tempArr = JSON.parse(localStorage.getItem("todo"));
    if (tempArr != null && tempArr.length > 0) {
      // dispatch the local storage data to the slice, it will automatically trigger the store and data will be displayed
      console.log("Data From Local Storage ", tempArr);
      dispatch(addTodo(tempArr));
    }
  }

  useEffect(() => {
    if (!editObj) {
      setIsDisabled(false);
      setCursor("cursor-pointer");
    }
  }, [editObj]);

  function updateTodo(item) {
    setCursor("cursor-not-allowed");
    dispatch(getTodoToEdit(item));
    setIsDisabled(true);
  }

  function deleteTodoObj(item) {
    dispatch(deleteTodo(item));
  }

  return (
    <>
      <div className="relative overflow-hidden -top-8 lg:top-6 flex flex-col lg:flex-row w-full flex-wrap content-center items-center justify-center gap-8 p-4 mt-3">
        {todoArray &&
          todoArray?.map((item, index) => (
            <motion.div
              className="bg-customTan p-6 border-b-4 border-t-4 rounded-3xl border-customBrown w-3/4 sm:w-1/3 lg:w-1/4 xl:w-1/6 hover:scale-110"
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              key={index}
            >
              <div className="w-full h-64 rounded-3xl flex flex-col justify-between">
                <p className="text-customBrown font-semibold text-xl break-words text-left">
                  {item?.todoText}
                </p>
                <div className="w-full">
                  <h3 className="font-semibold border-b-2 border-customBrown mb-2"></h3>
                  <div className="flex flex-wrap justify-between items-center">
                    <button
                      className={`p-1 px-2 m-1 text-sm font-bold text-customTan bg-customBrown rounded-lg ${cursor}`}
                      disabled={isDisabled}
                      onClick={() => updateTodo(item)}
                    >
                      Update
                    </button>
                    <button
                      className={`text-sm font-bold text-customTan bg-customBrown p-1 px-2 m-2 rounded-lg ${cursor}`}
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
      </div>
    </>
  );
};

export default ViewComponent;
