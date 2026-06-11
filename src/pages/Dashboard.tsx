import { Button } from "../components/ui/Buttons"
import { PlusIcon } from "../icons/PlusIcon"
import { Card } from "../components/ui/Card"
import { ShareIcon } from "../icons/ShareIcon"
import { CreateContentModal } from "../components/ui/CreateContentModal"
import { useState } from "react"
import { Sidebar } from "../components/ui/Sidebar"

export function Dashboard() {

  <script async src="https://platform.twitter.com/widgets.js"></script>
  const [modelOpen,setModelOpen] = useState(false);

  return (
    <>
      <Sidebar/>
      <div className="p-4 ml-72 min-h-screen bg-gray-200">
        <CreateContentModal open={modelOpen} onClose={()=>{
          setModelOpen(false);

        }}/>

        <div className="py-2 pr-1 justify-end gap-3 flex">
        
          <Button startIcon={<PlusIcon size="lg"/>} varient="primary" text="Add content" size="md" onClick={()=>{
            setModelOpen(true);
          }}/>
          <Button startIcon={<ShareIcon size="lg"/>} varient="primary" text="Share content" size="md"/>
        </div>

        <div className="flex gap-4 ">
          <Card type="youtube" link="https://youtu.be/AE39gJYuRog?si=BC29zTmRgKI5DW_W" title="DSA Solution"/>
          <Card type="twitter" link="https://x.com/FCB_nenn/status/2064633227965267999?s=20" title="DSA Solution"/>
          <Card type="twitter" link="https://x.com/FCB_nenn/status/2064633227965267999?s=20" title="DSA Solution"/>
          <Card type="twitter" link="https://x.com/FCB_nenn/status/2064633227965267999?s=20" title="DSA Solution"/>
          <Card type="twitter" link="https://x.com/FCB_nenn/status/2064633227965267999?s=20" title="DSA Solution"/>
          <Card type="twitter" link="https://x.com/FCB_nenn/status/2064633227965267999?s=20" title="DSA Solution"/>
        
        </div>
      </div>
    </>
  )
}

