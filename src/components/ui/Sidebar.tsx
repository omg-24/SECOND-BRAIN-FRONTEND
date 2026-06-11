import { BrainIcon } from "../../icons/BrainIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";


export function Sidebar(){
    return <div className="bg-white h-screen w-72 border-r fixed  left-0 top-0">
        <div className="text-2xl flex items-center px-2 gap-2 font-sans py-3.5 cursor-pointer">
            {/* <SidebarItem text="BrainSync" icon={<BrainIcon />} /> */}
            <BrainIcon/>
            BrainSync
        </div>
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />

    </div>
}