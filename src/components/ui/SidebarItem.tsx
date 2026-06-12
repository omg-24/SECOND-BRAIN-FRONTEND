import type { ReactElement } from "react";

export function SidebarItem({ text, icon, isActive = false, onClick }: {
    text: string;
    icon: ReactElement;
    isActive?: boolean;
    onClick?: () => void;
}) {
    return (
        <button onClick={onClick} className={`flex items-center gap-3 rounded-3xl px-3 py-2 text-xs font-semibold transition md:text-sm md:py-3 ${
            isActive 
              ? "bg-purple-600 text-white" 
              : "text-gray-700 hover:bg-purple-50 hover:text-purple-900"
        }`}>
            <div className={`flex h-8 w-8 items-center justify-center rounded-2xl md:h-10 md:w-10 ${
                isActive 
                  ? "bg-purple-500 text-white" 
                  : "bg-purple-100 text-purple-700"
            }`}>
                {icon}
            </div>
            <span>{text}</span>
        </button>
    );
}