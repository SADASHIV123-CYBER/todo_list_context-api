import { useReducer } from 'react';
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList'
import TodoContext from './context/todoContext';
import todoReducer from './reducer/todoReducer';
import TodoDispatchContext from './context/todoDispatchContext';

function App() {

  // const [list, setList] = useState(
  //   [
  //     {id: 1, todoData: 'todo 1', finished: false},
  //     {id: 2, todoData: 'todo 2', finished: true}
  //   ]
  // )

  const [list, dispatch] = useReducer(todoReducer, [])

  return (
   <TodoContext.Provider value={{list}} >
    <TodoDispatchContext.Provider value={{dispatch}} >
   <AddTodo />
   <TodoList/>
    </TodoDispatchContext.Provider>
   </TodoContext.Provider>
  )
}

export default App
