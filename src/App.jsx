import conf from "./conf/conf";

import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authservice from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  // console.log(conf.appwriteUrl);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch({});
  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if(loading) return "...loading";
  else return <div className="">
    my app
  </div>
}

export default App;
