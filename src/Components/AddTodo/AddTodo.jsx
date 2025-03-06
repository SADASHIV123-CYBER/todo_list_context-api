import { useState, useContext } from "react";
import TodoDispatchContext from "../../context/todoDispatchContext";
import { ADD_TODO } from "../../reducer/actionType";

function AddTodo() {
    const [inputText, setInputText] = useState('');
    const { dispatch } = useContext(TodoDispatchContext);

    return (
        <div className="relative w-full px-4 mb-8 flex flex-col items-center">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-3xl opacity-30 
                group-focus-within:opacity-50 transition-all duration-500 animate-pulse"></div>

            <div className="relative flex w-full max-w-2xl bg-slate-900 bg-opacity-80 backdrop-blur-lg shadow-xl 
                rounded-xl p-2 border border-cyan-500/30 focus-within:border-cyan-400 transition-all duration-500">
                
                <input 
                    type="text"
                    value={inputText}
                    placeholder="Type your task..."
                    onChange={(e) => setInputText(e.target.value)}
                    className="flex-1 px-5 py-4 text-lg text-white bg-transparent placeholder-gray-400 
                    rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-300 caret-cyan-300 selection:bg-cyan-500/30"
                />

                <button 
                    onClick={() => {
                        dispatch({ type: ADD_TODO, payload: { todoText: inputText } })
                        setInputText('')
                    }}
                    disabled={!inputText.trim()}
                    className="ml-3 px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold 
                    rounded-xl shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:pointer-events-none 
                    transition-all duration-300 flex items-center justify-center gap-2 border border-transparent 
                    hover:border-cyan-400 active:scale-95 w-[100px] sm:w-auto"
                >
                    <span className="text-2xl">🚀</span>
                    <span className="hidden sm:block bg-white/10 px-3 py-1 rounded-lg">Add</span>
                </button>
            </div>
        </div>
    );
}

export default AddTodo;
