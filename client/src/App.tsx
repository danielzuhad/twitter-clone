import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import Auth from "./pages/Login/Auth.tsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store.ts";

function App() {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    console.log("render");
  }, [user, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
