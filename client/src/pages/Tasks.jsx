import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { tasks } from "../assets/data.js";
import { MdGridView } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loader.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import Tabs from '../components/Tabs.jsx';
import TaskTitle from '../components/TaskTitle.jsx';
import BoardView from '../components/BoardView.jsx';
import Table from '../components/task/Table.jsx';
import AddTask from '../components/task/AddTask.jsx';

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
  const params = useParams();
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const status = params?.status || "";

  return loading ? (
    <div className="py-10">
      <Loading />
    </div>
  ) : (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <Title title={status ? `${status} Tasks` : "Tasks"} />
        {!status && (
          <Button
            className="flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5"
            label="Create Task"
            icon={<IoMdAdd className="text-lg" />}
            onClick={() => { setOpen(true) }}
          />
        )}
      </div>
      <div>
        <Tabs tabs={TABS} setSelected={setSelected}>
        {!status && (
          <div className='w-full flex justify-between gap-4 md:gap-x-12 py-4'>
            <TaskTitle label='To Do' className={TASK_TYPE.todo} />
            <TaskTitle
              label='In Progress'
              className={TASK_TYPE["in progress"]}
            />
            <TaskTitle label='completed' className={TASK_TYPE.completed} />
          </div>
        )}
         {selected !== 1 ? (
          <BoardView tasks={tasks} />
        ) : (
          <div className='w-full'>
            <Table tasks={tasks} />
          </div>
        )}
        </Tabs>
      </div>
      <AddTask open={open} setOpen={setOpen} />
    </div>
  );
}

export default Tasks