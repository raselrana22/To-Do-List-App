import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = { description: newTask, completed: false };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const currentDate = new Date();
  const date = currentDate.toLocaleDateString(); // Get the local date in the format 'MM/DD/YYYY'
  const day = currentDate.toLocaleDateString("en-US", { weekday: "long" }); // Get the local day in the full name format (e.g., 'Monday')

  return (
    <div>
      <h1 className='text-3xl text-center font-bold underline mb-1'>
        To Do List
      </h1>
      <div className='text-m text-center text-lime-950 mb-4'>
        <b>Today:</b> {date}, {day}
      </div>
      <div className='mb-3 flex justify-between flex-wrap'>
        <input
          className='mx-3 my-1 w-auto px-1 rounded-lg bg-slate-200 hover:scale-105 duration-200
           sm:w-[250px]'
          type='text'
          value={newTask}
          onChange={handleTaskInputChange}
          placeholder='Enter a new task'
        />
        <button
          className='border border-black rounded-lg bg-black text-white
          font-bold mx-3 my-1 px-1 hover:bg-white hover:text-black 
          transition duration-300'
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      <div className='ml-3 p-1'>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className='grid grid-cols-5 my-2'>
                <span
                  className='text-l mr-3 col-span-3'
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.description}
                </span>
                <button
                  className='col-span-1 hover:scale-105 hover:font-bold duration-200'
                  onClick={() => handleToggleComplete(index)}
                >
                  {task.completed ? "Incomplete" : "Complete"}
                </button>
                <button
                  className='ml-3 col-span-1 hover:scale-105 hover:font-bold duration-2
                  00'
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-l'>No tasks yet. Add a task to get started!</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
