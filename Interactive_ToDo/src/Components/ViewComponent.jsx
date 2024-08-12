import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

const ViewComponent = () => {
    const [todo, setTodo] = useState([])
    // let allTodo = JSON.parse(localStorage.getItem("todo"))
    // setTodo(allTodo)

    useEffect(() => {
        let allTodo = JSON.parse(localStorage.getItem("todo"))
        console.log(allTodo);
        
        setTodo(allTodo)

    }, [])
  return (
    <>
    <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mt-4">
      <h3 className="text-slate-900 dark:text-slate-500 mt-5 text-base font-bold tracking-wide ">
        Interactive ToDo
      </h3>
      <div>
        {
            todo && (
                todo.map((item, index) => (
                    <li key={index} className='list-none align-baseline text-center dark:text-white'>
                        {item} | 
                        <span  className='text-sm bg-slate-500 px-2 mx-2 rounded-lg'>Update</span> | 
                        <span  className='text-sm bg-slate-500 px-2 mx-2 rounded-lg'>Delete</span>
                    </li>
                ))
            )
        }
      </div>


    </div>



    <div className="relative overflow-hidden top-16 lg:top-32 flex flex-col lg:flex-row w-full flex-wrap content-center items-center justify-center gap-8 p-4">
        <motion.div
          className="bg-slate-800 p-6 border-b-4 border-t-4 rounded-3xl border-cyan-600 "
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
<div className="leading-relaxed tracking-wide w-full lg:w-1/8 p-4">
  <p className="text-cyan-600 font-bold text-lg break-words">Sign Uvsfvfvfvsfvcdcdcdcdc
    cdcdcdcdcfvcadcdcdcdcdcdcfvrvfrvsfvvsfvdvfrsfvrdp</p>
  <h3 className="mt-8 mb-2 p-6 text-gray-400 text-xl font-semibold border-b-2"></h3>
  <span className="text-sm font-semibold bg-slate-500 p-1 m-1 rounded-lg">Update</span>
  <span className="text-sm font-semibold bg-slate-500 p-1 mx-2 rounded-lg">Delete</span>
</div>

        </motion.div>
      </div>


    </>
  )
}

export default ViewComponent