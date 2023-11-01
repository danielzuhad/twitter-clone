import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { AuthInput } from "../../components/Login/AuthInput";
import { AuthButton } from "../../components/Login/AuthButton";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../redux/authSLice";
import { RootState } from "../../redux/store";

const API = import.meta.env.VITE_API;

export default function Auth() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authType, setAuthType] = useState<"Login" | "Register">("Register");

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [picturePath, setPicturePath] = useState<string>("");

  // Navigate Other Link
  const navigate = useNavigate();

  //  Redux
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  // Register Api
  async function handleRegister() {
    try {
      setIsLoading(true);
      if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        password === "" ||
        picturePath === ""
      ) {
        toast.error("Harap Isi Semua");
      } else {
        const data = {
          firstName,
          lastName,
          email,
          password,
          picturePath,
        };

        const response = await axios.post(`${API}/auth/register`, data);
        console.log("Register Succesfull", response.data);

        setFirstName("");
        setLastName("");
        setPicturePath("");
        setEmail("");
        setPassword("");
        toast.success("Register Berhasil, Harap Login");
        setAuthType("Login");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  // Login Api
  async function handleLogin() {
    try {
      setIsLoading(true);
      if (email === "" || password === "") {
        toast.error("Harap Isi Semua");
      } else {
        const data = {
          email,
          password,
        };

        const response = await axios.post(`${API}/auth/login`, data);

        if (response.status === 200) {
          dispatch(
            setLogin({
              user: response.data.user,
              token: response.data.token,
            })
          );

          toast.success("Login Berhasil");
          navigate("/home");
        } else {
          // Handle other status codes or errors here
          toast.error(
            "Terjadi kesalahan saat melakukan login. Silakan coba lagi."
          );
        }
      }
    } catch (error) {
      setIsLoading(false);

      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.data.message === "User Dont Exist") {
            toast.error(
              "Pengguna tidak ditemukan. Silakan daftar terlebih dahulu."
            );
          } else {
            toast.error(
              "Terjadi kesalahan saat melakukan login. Silakan coba lagi."
            );
          }
        } else {
          toast.error(
            "Tidak ada respons dari server. Silakan coba lagi nanti."
          );
        }
      } else {
        toast.error("Terjadi kesalahan. Silakan coba lagi.");
      }
    } finally {
      setIsLoading(false);
      setPassword("");
    }
  }

  // React Drop Zone
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const fileURL = URL.createObjectURL(file);
    setPicturePath(fileURL);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Auth Toggle
  const handleAuthTypeToggle = useCallback(() => {
    if (authType === "Register") {
      setAuthType("Login");
    } else {
      setAuthType("Register");
    }
  }, [authType]);

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [navigate, user]);

  return (
    <>
      <div
        className={clsx(
          `flex flex-col items-center gap-10 `,
          authType === "Login" && "mt-[10em]",
          authType === "Register" && "mt-[5em]"
        )}
      >
        <h1 className="text-[2em] font-bold">Twitter Clone</h1>

        <div className=" max-sm:w-[18em] md:w-[30em]  border-2 p-3 rounded-md">
          <h2 className="text-center text-[1.5em] font-semibold">
            {authType === "Register" ? "Sign Up" : "Sign In"}
          </h2>
          {/* Login (Sign In) */}
          <AuthInput
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            placeholder="johndoe@mail.com"
            type="email"
          />
          <AuthInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            type="password"
          />

          {/* Register (Sign Up) */}
          {authType === "Register" && (
            <div>
              <AuthInput
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={isLoading}
                placeholder="John"
                type="text"
              />
              <AuthInput
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={isLoading}
                placeholder="Do"
                type="text"
              />

              {/* Upload Image (React Drop Zone)*/}
              <div>
                <p className="mt-4 mb-[-10px]">Image Profile</p>
                <div
                  {...getRootProps()}
                  className={clsx(
                    `border-dashed border-2 border-gray-300 p-4 rounded-md text-center cursor-pointer mt-4 `,
                    isLoading &&
                      "opacity-50 cursor-default bg-gray-200 pointer-events-none"
                  )}
                >
                  <input {...getInputProps()} />
                  <p>
                    {picturePath
                      ? "File Terupload"
                      : "Drag & drop sebuah gambar di sini, atau klik untuk memilih"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Auth Type Toggle */}
          <div className="flex gap-2 justify-center my-2 text-sm">
            <p>
              {authType === "Register"
                ? "jika sudah punya akun bisa klik "
                : "jika belum punya akun bisa klik "}
            </p>
            <button
              onClick={handleAuthTypeToggle}
              className={clsx(`underline`, isLoading && "pointer-events-none")}
            >
              {authType === "Register" ? "Sign In" : "SIgn Up"}
            </button>
          </div>

          {authType === "Register" ? (
            <AuthButton onClick={handleRegister} disabled={isLoading}>
              {authType}
            </AuthButton>
          ) : (
            <AuthButton onClick={handleLogin} disabled={isLoading}>
              {authType}
            </AuthButton>
          )}
        </div>
      </div>
    </>
  );
}
