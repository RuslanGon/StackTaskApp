import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import Users from "./pages/Users.jsx";
import Trash from "./pages/Trash.jsx";
import TaskDetails from "./pages/TaskDetails.jsx";
import { Toaster } from 'sonner';
import {  useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import { Fragment } from "react";
import { setOpenSidebar } from "./redux/slices/authSlice.js";
import { Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

function App() {

const user = useSelector(state => state.auth.user)


function Layout() {

  const location = useLocation();
  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </div>
      <MobileSidebar />
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

const MobileSidebar = () => {
  const isSidebarOpen = useSelector((state) => state.auth.isSidebarOpen);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <Transition
      show={isSidebarOpen}
      as={Fragment}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 z-50 flex md:hidden">
        <div
          className="fixed inset-0 bg-black/40"
          onClick={closeSidebar}
        />
        <div className="relative bg-white w-3/4 h-full shadow-lg z-50">
          <div className="w-full flex justify-end px-4 mt-4">
            <button onClick={closeSidebar} aria-label="Close sidebar">
              <IoClose size={24} />
            </button>
          </div>
          <div className="-mt-6">
            <Sidebar />
          </div>
        </div>
      </div>
    </Transition>
  );
};

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
