import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserAvatar = () => {
    const  user  = useSelector((state) => state.auth.user);

    const [open, setOpen] = useState(false);
    const [openPassword, setOpenPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();    

  return (
    <div>UserAvatar</div>
  )
}

export default UserAvatar