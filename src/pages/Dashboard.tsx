import { Button } from "../components/ui/Buttons"
import { PlusIcon } from "../icons/PlusIcon"
import { Card } from "../components/ui/Card"
import { ShareIcon } from "../icons/ShareIcon"
import { CreateContentModal } from "../components/ui/CreateContentModal"
import { useState } from "react"
import { Sidebar } from "../components/ui/Sidebar"
import { useContent } from "../hooks/useContent"
import axios from "axios"
import { BACKEND_URL } from "../config"

export function Dashboard() {

    const [modelOpen,setModelOpen] = useState(false);
    const { contents, refresh } = useContent();
  return (
    <>
      <Sidebar/>
      <div className="p-4 ml-72 min-h-screen bg-gray-200">
        <CreateContentModal refresh={refresh} open={modelOpen} onClose={()=>{
          setModelOpen(false);

        }}/>

        <div className="py-2 pr-1 justify-end gap-3 flex">
        
          <Button startIcon={<PlusIcon size="lg"/>} varient="primary" text="Add content" size="md" onClick={()=>{
            setModelOpen(true);
          }}/>
          <Button onClick={async()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
                "share": true
            },{
                headers:{
                    "Authorization": localStorage.getItem("token")
                }
            });
            const shareLink = `${BACKEND_URL}/api/v1/brain/${response.data.hash}`
            console.log({shareLink})
            alert(shareLink)
          }} startIcon={<ShareIcon size="lg"/>} varient="primary" text="Share content" size="md"/>
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({type,link, title})=>
            <Card type={type} link={link} title={title} />
        )}
        
        </div>
      </div>
    </>
  )
}

