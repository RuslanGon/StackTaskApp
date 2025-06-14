import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { tasks } from "../assets/data.js";
import { MdGridView } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loader.jsx';

const TABS = [
  { title: "Board View", icon: <MdGridView /> },
  { title: "List View", icon: <FaList /> },
];

const TASK_TYPE = {
  todo: "bg-blue-600",
  "in progress": "bg-yellow-600",
  completed: "bg-green-600",
};

const Tasks = () => {

const params = useParams()
const [selected, setSelected] = useState(0) 
const [open, setOpen] = useState(false)  
const [loading, setLoading] = useState(true)  


  return (
loading ? <div className='py-10'><Loading /></div> : <div></div>
  )
}

export default Tasks