import { Link } from "react-router-dom"

const Choose = () => {
    return (
        <header className="App-header">
            <div className="flex space-x-4">
                <Link to={"/counter-reducer"} className="bg-green-500 text-white px-4 py-2 rounded">
                    Counter Reducer
                </Link>
                <Link to={"/counter-redux"} className="bg-green-500 text-white px-4 py-2 rounded">
                    Counter Redux
                </Link>
                <Link to={"/todo-redux"} className="bg-green-500 text-white px-4 py-2 rounded">
                    Todo Redux
                </Link>
                <Link to={"/theme-redux"} className="bg-green-500 text-white px-4 py-2 rounded">
                    Theme Redux
                </Link>
            </div>
        </header>
    )
}
export default Choose