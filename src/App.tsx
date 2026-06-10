import { Button } from "./components/ui/Buttons"
import { PlusIcon } from "./icons/PlusIcon"
import { Card } from "./components/ui/Card"
import { ShareIcon } from "./icons/ShareIcon"

function App() {

  <script async src="https://platform.twitter.com/widgets.js"></script>

  return (
    <>

      <div className="py-2 pr-1 justify-end gap-3 flex">
         <Button startIcon={<PlusIcon size="lg"/>} varient="primary" text="Add content" size="md"/>
        <Button startIcon={<ShareIcon size="lg"/>} varient="primary" text="Share content" size="md"/>
      </div>

      <div className="flex gap-4">
        <Card type="youtube" link="https://youtu.be/AE39gJYuRog?si=BC29zTmRgKI5DW_W" title="DSA Solution"/>
        <Card type="twitter" link="https://x.com/FCB_nenn/status/2064633227965267999?s=20" title="DSA Solution"/>
      
      </div>
    </>
  )
}

export default App
