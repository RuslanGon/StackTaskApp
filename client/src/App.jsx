import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login.jsx';
import Layout from './pages/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx'; // Предположим, что есть такая страница

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
