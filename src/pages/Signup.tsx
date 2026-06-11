import { Input } from "../components/ui/Input"; 
import { Button } from "../components/ui/Buttons";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signup(){

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    async function signup() {
        try {
            const res = await axios.post(
                `${BACKEND_URL}/api/v1/signup`,
                {
                    username: usernameRef.current?.value,
                    password: passwordRef.current?.value
                }
            );
            navigate("/signin")
            alert(res.data.message || "You are Signed Up!");
        } catch (err: any) {
            console.error(err);
``
            alert(
                err?.response?.data?.message ||
                "Signup failed"
            );
        }
    }
    return <div className="h-screen w-screen bg-gray-200 flex-col flex justify-center items-center rounded-2xl">
        <div className="bg-white rounded border min-w-64 min-h-64 pt-4 pl-4 gap-2.5">
            <div className="">
                <div className="py-2">
                    <Input ref={usernameRef} placeholder="Username" />
                </div>
                <div className="py-2">

                    <Input ref={passwordRef} placeholder="Password" type="password"/>
                </div>
            </div>
            <div className="py-4  flex  justify-center">
                <Button onClick={signup} varient="primary" size="md" text="SignUp"/>
            </div>
        </div>
        
    </div>
}