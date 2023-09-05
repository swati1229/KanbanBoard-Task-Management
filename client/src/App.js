import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import TaskPage from './Pages/TaskPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/tasks' element={<TaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
