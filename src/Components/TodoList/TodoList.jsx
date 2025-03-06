import { useEffect, useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/todoContext";
import TodoDispatchContext from "../../context/todoDispatchContext";
import { DELETE_TODO, EDIT_TODO, FINISH_TODO, LOAD_TODOS } from "../../reducer/actionType";

function TodoList() {
    const { list } = useContext(TodoContext);
    const { dispatch } = useContext(TodoDispatchContext);

    // Load todos from localStorage when the component mounts
    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            dispatch({ type: LOAD_TODOS, payload: JSON.parse(storedTodos) });
        }
    }, [dispatch]);

    // Save todos to localStorage whenever the list changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(list));
    }, [list]);

    function onFinished(todo, isFinished) {
        dispatch({ type: FINISH_TODO, payload: { todo, isFinished } });
    }

    function onDelete(todo) {
        dispatch({ type: DELETE_TODO, payload: { todo } });
    }

    function onEdit(todo, todoText) {
        dispatch({ type: EDIT_TODO, payload: { todo, todoText } });
    }

    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            {list.length > 0 ? (
                <div className="space-y-4">
                    {list.map((todo) => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            todoData={todo.todoData}
                            isFinished={todo.finished}
                            changeFinished={(isFinished) => onFinished(todo, isFinished)}
                            onDelete={() => onDelete(todo)}
                            onEdit={(todoText) => onEdit(todo, todoText)}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center text-white/60 text-lg mt-8">
                    No todos yet. Start by adding one! 🚀
                </div>
            )}
        </div>
    );
}

export default TodoList;
