import { Route, Routes, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home/Home.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import Auth from "./pages/Login/Auth.tsx";
import ProfileById from "./pages/Profile/ProfileById.tsx";
import { AuthState } from "./redux/authSLice.ts";
import { setMobileMenu } from "./redux/mobileMenuSlice.tsx";
import Layout from "./layout/Layout.tsx";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: { auth: AuthState }) => state.auth.user);

  const handleResize = useCallback(() => {
    dispatch(setMobileMenu(window.innerWidth <= 813));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [navigate, user]);

  console.log({ user });

  return (
    <>
      <Routes>
        <Route path="auth" element={<Auth />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:id" element={<ProfileById />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
