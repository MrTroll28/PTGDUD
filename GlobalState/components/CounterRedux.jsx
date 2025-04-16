import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

const CounterRedux = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Counter Redux</h1>
            <p className="text-xl mb-4">Count: {count}</p>
            <div className="flex space-x-4">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Click the buttons to change the count.</p>
        </div>
    );
};

export default CounterRedux;
