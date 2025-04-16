import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counterSlice';
import todoReducer from '../components/todoSlice';
import themeReducer from '../components/themeSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
        theme: themeReducer,
    }
});

export default store;