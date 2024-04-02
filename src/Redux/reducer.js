

const initialstate = {
    todos: []
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case "Add_todo":
            return { ...state, todos: [...state.todos, action.payload] };
        case "Remove_todo":
            const filteredTodos = state.todos.filter(todo => todo.id !== action.payload);
            return { ...state, todos: filteredTodos };
        case "Mark_as_finish":
            const updatedTodos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, finished: !todo.finished } : todo
            );
            return { ...state, todos: updatedTodos };
        default:
            return state;
    }
}
export default reducer;