import './App.css';
import CounterReducer from '../components/CounterReducer';
import CounterRedux from '../components/CounterRedux';
import Choose from '../components/Choose';
import TodoRedux from '../components/TodoRedux';
import ThemeRedux from '../components/ThemeRedux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Choose />
      <Routes>
        <Route path="/counter-redux" element={<CounterRedux />} />
        <Route path="/counter-reducer" element={<CounterReducer />} />
        <Route path="/todo-redux" element={<TodoRedux />} />
        <Route path="/theme-redux" element={<ThemeRedux />} />
      </Routes>
    </Router>
  );
}

export default App;
