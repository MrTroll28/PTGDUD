import { useReducer } from "react";


const CounterReducer = () => {

    // useReducer
    const [count, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }, { count: 0 });

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Counter Reducer</h1>
            <p className="text-xl mb-4">Count: {count.count}</p>
            <div className="flex space-x-4">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    Decrement
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    Increment
                </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Click the buttons to change the count.</p>
        </div>
    );
}

export default CounterReducer;