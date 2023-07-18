import { BackGround } from "./Components/BackGround";
import TodoList from "./Components/ToDoListApp";

function App() {
  return (
    <div className='relative'>
      <BackGround />
      <div
        className='z-10 absolute top-14 h-auto min-h-[400px] 
         inset-x-3 w-auto bg-gradient-to-r from-violet-500 to-fuchsia-500
         lg:inset-x-1/3 lg:w-1/3 md:inset-x-28 sm:inset-x-14'
      >
        <TodoList />
      </div>
    </div>
  );
}

export default App;
