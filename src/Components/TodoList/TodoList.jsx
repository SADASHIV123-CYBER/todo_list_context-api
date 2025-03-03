import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/todoContext";
import TodoDispatchContext from "../../context/todoDispatchContext";

function TodoList() {
    const { list } = useContext(TodoContext);
    const { dispatch } = useContext(TodoDispatchContext);

    function onFinished(todo, isFinished) {
        dispatch({ type: "finish_todo", payload: { todo, isFinished } });
    }

    function onDelete(todo) {
        dispatch({ type: "delete_todo", payload: { todo } });
    }

    function onEdit(todo, todoText) {
        dispatch({ type: "edit_todo", payload: { todo, todoText } });
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
