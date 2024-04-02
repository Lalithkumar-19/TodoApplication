import store from "./store";


export const handleRemoveTodo = (id) => {
    store.dispatch({ type: "Remove_todo", payload: id });
}

export const handleFinishedTodo = (id) => {
    store.dispatch({ type: "Mark_as_finish", payload: id });
}