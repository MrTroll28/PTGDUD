import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./todoSlice";
import { useState } from "react";

const TodoRedux = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== "") {
            dispatch(addTodo(text));
            setText("");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">To-do List (RTK)</h2>

            <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
                <input
                    className="flex-1 border border-gray-300 px-3 py-2 rounded"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Nhập công việc..."
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
                    Thêm
                </button>
            </form>

            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className={`flex justify-between items-center mb-2 p-2 rounded ${
                            todo.completed ? "bg-green-300" : "bg-gray-200"
                        }`}
                    >
                        <span onClick={() => dispatch(toggleTodo(todo.id))} className="cursor-pointer flex-1">
                            {todo.text}
                        </span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Xoá
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoRedux;
