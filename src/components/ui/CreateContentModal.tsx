
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

    return (
        <div>
            {open && (
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-xl rounded-[32px] bg-white p-6 shadow-2xl">
                        <div className="flex justify-end">
                            <button onClick={onClose} className="rounded-full p-2 transition hover:bg-gray-100">
                                <CancelIcon />
                            </button>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">Add new content</h2>
                                <p className="mt-1 text-sm text-gray-500">Save a YouTube or Twitter link to your brain.</p>
                            </div>

                            <div className="space-y-4">
                                <Input ref={titleRef} placeholder="Title" />
                                <Input ref={linkRef} placeholder="Link" />
                            </div>

                            <div className="space-y-3">
                                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Type</div>
                                <div className="flex flex-wrap gap-2">
                                    <Button
                                        text="Youtube"
                                        size="sm"
                                        varient={type === ContentType.Youtube ? "primary" : "secondary"}
                                        onClick={() => setType(ContentType.Youtube)}
                                    />

                                    <Button
                                        text="Twitter"
                                        size="sm"
                                        varient={type === ContentType.Twitter ? "primary" : "secondary"}
                                        onClick={() => setType(ContentType.Twitter)}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button onClick={addContent} varient="primary" size="md" text="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
