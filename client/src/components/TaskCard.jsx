import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { useSelector } from 'react-redux';

const ICONS = {
    high: <MdKeyboardDoubleArrowUp />,
    medium: <MdKeyboardArrowUp />,
    low: <MdKeyboardArrowDown />,
  };

const TaskCard = ({task}) => {

    const { user } = useSelector((state) => state.auth);
    const [open, setOpen] = useState(false);    

  return (
<>

</>
  )
}

export default TaskCard