import { Route, Routes, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Home from "./pages/Home/Home.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import Auth from "./pages/Login/Auth.tsx";
import ProfileById from "./pages/Profile/ProfileById.tsx";
import { RootState } from "./redux/store.ts";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";
import { cn } from "./utils/cn.ts";

function App() {
  const [mobileMenu, setMobileMenu] = useState(window.innerWidth <= 768);

  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleResize = useCallback(() => {
    setMobileMenu(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    console.log("render");
  }, [user, navigate]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <div className={cn("flex", mobileMenu && "flex-col")}>
        <Navbar variant={mobileMenu ? "Header" : "Side"} />
        <div>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<Home mobileMenu={mobileMenu} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<ProfileById />} />
          </Routes>
        </div>
        {mobileMenu && <Footer className="fixed bottom-0 w-full" />}
      </div>
    </>
  );
}

export default App;
