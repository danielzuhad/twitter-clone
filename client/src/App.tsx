import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import AuthFom from "./pages/Login/AuthForm.tsx";
import Profile from "./pages/Profile/Profile.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthFom />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
