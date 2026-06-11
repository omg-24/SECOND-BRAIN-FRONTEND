import type { ReactElement } from "react";


export function SidebarItem({text,icon}:{
    text: string;
    icon: ReactElement;
}){
    return <div className="flex items-center cursor-pointer hover:bg-gray-200 transition-all duration-150">
        <div className="p-2">{icon}</div>
        
        <div className="p-2">{text}</div>
    </div>
}