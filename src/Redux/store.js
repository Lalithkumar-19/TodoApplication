import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('todos');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('todos', serializedState);
    } catch (error) {
        console.log(error)
    }
};


const store = configureStore({
    reducer: reducer,
    preloadedState: loadState()
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;