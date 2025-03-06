import { ADD_TODO, DELETE_TODO, EDIT_TODO, FINISH_TODO, LOAD_TODOS } from "./actionType";

function todoReducer(state, action) {
    let updatedList;

    switch (action.type) {
        case ADD_TODO:
            let todoText = action.payload.todoText;
            updatedList = [...state, { id: state.length + 1, todoData: todoText, finished: false }];
            break;

        case EDIT_TODO:
            updatedList = state.map(t => 
                t.id === action.payload.todo.id ? { ...t, todoData: action.payload.todoText } : t
            );
            break;

        case DELETE_TODO:
            updatedList = state.filter(t => t.id !== action.payload.todo.id);
            break;

        case FINISH_TODO:
            updatedList = state.map(t => 
                t.id === action.payload.todo.id ? { ...t, finished: action.payload.isFinished } : t
            );
            break;

        case LOAD_TODOS: 
            return action.payload;

        default:
            return state;
    }

 
    localStorage.setItem("todos", JSON.stringify(updatedList));
    return updatedList;
}

export default todoReducer;
