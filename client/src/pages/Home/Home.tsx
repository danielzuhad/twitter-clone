import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <div>home</div>
      </div>
    </>
  );
}
