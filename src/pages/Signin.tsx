import { Input } from "../components/ui/Input"; 
import { Button } from "../components/ui/Buttons";
export function Signin(){
    return <div className="h-screen w-screen bg-gray-200 flex-col flex justify-center items-center rounded-2xl">
        <div className="bg-white rounded border min-w-64 min-h-64 pt-4 pl-4 gap-2.5">
            <div className="">
                <div className="py-2">
                    <Input placeholder="Username" />
                </div>
                <div className="py-2">

                    <Input placeholder="Password"/>
                </div>
            </div>
            <div className="py-4  flex  justify-center">
                <Button varient="primary" size="md" text="Signin"/>
            </div>
        </div>
        
    </div>
}