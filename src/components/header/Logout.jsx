import React from "react";
import { useDispatch } from "react-redux";

import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const logoutHandler=()=>{
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }
  return <button className="inline-block px-6 py-2 rounded-full">Logout</button>;
};

export default Logout;
 