
import { useRef, useState } from "react";
import { CancelIcon } from "../../icons/CancelIcon"
import { Button } from "./Buttons";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";
enum ContentType{
    Youtube = "youtube",
    Twitter = "twitter"
}


export function CreateContentModal({open, onClose, refresh}:{open: boolean; onClose: () => void; refresh: () => Promise<void>;}){
    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)
    const [type, setType] = useState(ContentType.Youtube)

    async function addContent(){
        const title = titleRef.current?.value
        const link = linkRef.current?.value

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            title,
            link,
            type
        },{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
        await refresh();
        onClose();
    }

    return <div>
        {open && <div className="w-screen h-screen fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white rounded px-3">
                <span className="bg-white rounded opacity-100 ">
                  <div className="flex justify-end pt-2">
                        <div onClick={onClose} className="cursor-pointer ">
                            <CancelIcon/>
                        </div>
                    </div>
                    <div className="pt-3">
                            <Input ref={titleRef} placeholder = {"Title"} />
                            <div className="pt-2 "></div>
                            <Input ref={linkRef} placeholder = {"Link"} />

                    </div>
                    <h1 className="font-mono">Type</h1>
                    <div className="flex p-1.5 gap-1">
                        
                        <Button
                            text="Youtube" size="sm"
                            varient={type === ContentType.Youtube ? "primary" : "secondary"} onClick={()=>{
                                setType(ContentType.Youtube)
                            }}
                        />

                        <Button
                            text="Twitter" size="sm"
                            varient={type === ContentType.Twitter ? "primary" : "secondary"}  onClick={()=>{
                                setType(ContentType.Twitter)
                            }}
                        />
                    </div>

                    <div className="justify-center flex pt-2.5 py-2.5  ">
                            <Button onClick={addContent} varient="primary" size="md" text="Submit"/>
                    </div>
                </span>
            </div>
        </div> }
    </div>
}
