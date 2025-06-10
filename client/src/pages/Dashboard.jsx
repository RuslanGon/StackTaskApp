import React from 'react';
import {
  MdAdminPanelSettings,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
  MdEdit // <--- Додаємо MdEdit, якщо це потрібна іконка
} from "react-icons/md";
// import { LuClipboardEdit } from "react-icons/lu"; // <--- Закоментуємо або видалимо, якщо LuClipboardEdit не існує
import { FaNewspaper, FaUsers } from "react-icons/fa";
import { FaArrowsToDot } from "react-icons/fa6";
import moment from "moment";
import {summary} from '../assets/data.js'


const Dashboard = () => {
  // Змінна `totals` також не визначена. 
  // Припустимо, вона має бути взята з `summary` або обчислена.
  // Наприклад, якщо `summary` містить `totals` об'єкт:
  const totals = summary?.totals || {}; 

  const stats = [
    {
      _id: "1",
      label: "TOTAL TASK",
      total: summary?.totalTasks || 0,
      icon: <FaNewspaper />,
      bg: "bg-[#1d4ed8]",
    },
    {
      _id: "2",
      label: "COMPLTED TASK",
      total: totals["completed"] || 0,
      icon: <MdAdminPanelSettings />,
      bg: "bg-[#0f766e]",
    },
    {
      _id: "3",
      label: "TASK IN PROGRESS ",
      total: totals["in progress"] || 0,
      icon: <MdEdit />, // <--- Використовуємо MdEdit замість LuClipboardEdit
      bg: "bg-[#f59e0b]",
    },
    {
      _id: "4",
      label: "TODOS",
      total: totals["todo"] || 0, 
      icon: <FaArrowsToDot />,
      bg: "bg-[#be185d]", 
    },
  ]; 

  return (
    <div className='h-full py-4'>
      <div className='grid grid-cols-1 md:grid-cols-4'>

      </div>
    </div>
  )
}

export default Dashboard;