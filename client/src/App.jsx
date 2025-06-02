import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
import Layout from "./pages/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import Users from "./pages/Users.jsx";
import Trash from "./pages/Trash.jsx";
import TaskDetails from "./pages/TaskDetails.jsx";
import { Toaster } from 'sonner';

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
          <Route path="/completed/:status" element={<Tasks />}></Route>
          <Route path="/in-progress/:status" element={<Tasks />}></Route>
          <Route path="/todo/:status" element={<Tasks />}></Route>
          <Route path="/team" element={<Users />}></Route>
          <Route path="/trashed" element={<Trash />}></Route>
          <Route path="/task/:id" element={<TaskDetails />}></Route>
        </Route>
        <Route />
        <Route path="/log-in" element={<Login />}></Route>
      </Routes>
      <Toaster richColors />
    </main>
  );
}

export default App;
