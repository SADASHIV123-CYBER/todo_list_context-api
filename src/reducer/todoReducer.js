function todoReducer(state, action) {
    let updatedList;

    switch (action.type) {
        case 'add_todo':
            let todoText = action.payload.todoText;
            updatedList = [...state, { id: state.length + 1, todoData: todoText, finished: false }];
            break;

        case 'edit_todo':
            updatedList = state.map(t => 
                t.id === action.payload.todo.id ? { ...t, todoData: action.payload.todoText } : t
            );
            break;

        case 'delete_todo':
            updatedList = state.filter(t => t.id !== action.payload.todo.id);
            break;

        case 'finish_todo':
            updatedList = state.map(t => 
                t.id === action.payload.todo.id ? { ...t, finished: action.payload.isFinished } : t
            );
            break;

        case 'load_todos': 
            return action.payload;

        default:
            return state;
    }

 
    localStorage.setItem("todos", JSON.stringify(updatedList));
    return updatedList;
}

export default todoReducer;
