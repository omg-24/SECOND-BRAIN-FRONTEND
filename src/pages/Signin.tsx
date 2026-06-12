import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Buttons";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  async function signin() {
    try {
      if (!usernameRef.current?.value || !passwordRef.current?.value) {
        alert("Please enter both username and password");
        return;
      }

      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
      });

      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/dashboard");
    } catch (err: any) {
      console.error("Signin Error:", err);
      alert(err?.response?.data?.message || "Signin failed");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-md rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
          <p className="mt-2 text-sm text-gray-600">Welcome back! Enter your credentials to continue.</p>
        </div>

        <div className="space-y-5">
          <Input ref={usernameRef} placeholder="Username" />
          <Input ref={passwordRef} type="password" placeholder="Password" />
        </div>

        <div className="mt-8 flex justify-center">
          <Button onClick={signin} varient="primary" size="md" text="Sign in" />
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account? <Link to="/signup" className="font-semibold text-purple-600 hover:text-purple-700">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
