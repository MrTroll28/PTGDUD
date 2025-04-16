import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeSlice";

const ThemeRedux = () => {
    const theme = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();

    const isDark = theme === 'dark';

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <h1 className="text-3xl font-bold mb-6">Theme Toggle (RTK)</h1>
            <p className="mb-4 text-lg">Current Theme: <strong>{theme}</strong></p>
            <button
                onClick={() => dispatch(toggleTheme())}
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
                Toggle Theme
            </button>
        </div>
    );
};

export default ThemeRedux;