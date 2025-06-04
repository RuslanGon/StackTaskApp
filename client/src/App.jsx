import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import Users from "./pages/Users.jsx";
import Trash from "./pages/Trash.jsx";
import TaskDetails from "./pages/TaskDetails.jsx";
import { Toaster } from 'sonner';
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

const user = useSelector(state => state.auth.user)


function Layout() {

  const location = useLocation();
  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </div>
      {/* <MobileSidebar /> */}
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
        </div>
    </div>
  ) : (
    <Navigate to="log-in" state={{ from: location }} replace />
  );
}  

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
