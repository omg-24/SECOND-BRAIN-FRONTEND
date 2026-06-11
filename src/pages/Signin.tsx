import { Input } from "../components/ui/Input"; 
import { Button } from "../components/ui/Buttons";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export function Signin(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    async function signin() {

    try {
        const response = await axios.post(
            `${BACKEND_URL}/api/v1/signin`,
            {
                username: usernameRef.current?.value,
                password: passwordRef.current?.value
            }
        );
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard")
    } catch (err) {
        console.error("Signin Error:", err);
    }
}

    return <div className="h-screen w-screen bg-gray-200 flex-col flex justify-center items-center rounded-2xl">
        <div className="bg-white rounded border min-w-64 min-h-64 pt-4 pl-4 gap-2.5">
            <div className="">
                <div className="py-2">
                    <Input ref={usernameRef} placeholder="Username" />
                </div>
                <div className="py-2">

                    <Input ref={passwordRef} type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="py-4  flex  justify-center">
                <Button onClick={signin} varient="primary" size="md" text="Signin"/>
            </div>
        </div>
        
    </div>
}