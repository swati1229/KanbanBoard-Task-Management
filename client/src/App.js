import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/tasks' element={<Tasks />} exact />
      </Routes>
    </div>
  );
}

export default App;
