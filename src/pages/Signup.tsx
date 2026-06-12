import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Buttons";
import { useEffect, useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  async function signup() {
    try {
      if (!usernameRef.current?.value || !passwordRef.current?.value) {
        alert("Please enter both username and password");
        return;
      }

      const res = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
      });

      alert(res.data.message || "You are signed up!");
      navigate("/signin");
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.message || "Signup failed");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-md rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Create account</h1>
          <p className="mt-2 text-sm text-gray-600">Get started with Second Brain and save your favorite content.</p>
        </div>

        <div className="space-y-5">
          <Input ref={usernameRef} placeholder="Username" />
          <Input ref={passwordRef} type="password" placeholder="Password" />
        </div>

        <div className="mt-8 flex justify-center">
          <Button onClick={signup} varient="primary" size="md" text="Sign up" />
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <Link to="/signin" className="font-semibold text-purple-600 hover:text-purple-700">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
