import { useReducer } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";
import TodoContext from "./context/todoContext";
import todoReducer from "./reducer/todoReducer";
import TodoDispatchContext from "./context/todoDispatchContext";

function App() {
  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black py-12 px-4 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[150px]"></div>
          </div>

          <div className="relative z-10 max-w-2xl w-full">
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-xl border border-white/20 p-8 transition-all duration-300 hover:shadow-blue-500/40">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 text-center tracking-tight">
                Cosmic Tasks
              </h1>
              <AddTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
