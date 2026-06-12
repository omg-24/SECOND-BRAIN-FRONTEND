import { BrainIcon } from "../../icons/BrainIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { LogoutIcon } from "../../icons/LogoutIcon";
import { SidebarItem } from "./SidebarItem";
import { Button } from "./Buttons";
import { useNavigate } from "react-router-dom";

export function Sidebar({ selectedFilter, onFilterChange }: { selectedFilter: "all" | "youtube" | "twitter"; onFilterChange: (filter: "all" | "youtube" | "twitter") => void }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    onFilterChange("all");
    navigate("/dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-lg md:sticky md:top-0 md:bottom-auto md:border-b md:border-t-0 md:border-r md:shadow-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:flex-col md:items-start md:justify-start md:gap-6 md:px-5 md:py-6">
        <button onClick={handleLogoClick} className="flex cursor-pointer items-center gap-2 rounded-lg transition hover:opacity-80 text-xl font-semibold text-gray-900 md:text-2xl">
          <BrainIcon />
          <span className="hidden md:inline">Second Brain</span>
        </button>

        <div className="flex gap-2 md:w-full md:flex-col md:space-y-2">
          <SidebarItem
            text="Twitter"
            icon={<TwitterIcon />}
            isActive={selectedFilter === "twitter"}
            onClick={() => onFilterChange("twitter")}
          />
          <SidebarItem
            text="Youtube"
            icon={<YoutubeIcon />}
            isActive={selectedFilter === "youtube"}
            onClick={() => onFilterChange("youtube")}
          />
        </div>

        <div className="w-full border-t border-gray-200 pt-3 md:pt-5">
          <Button varient="secondary" size="md" text="Logout" onClick={handleLogout} startIcon={<LogoutIcon />} />
        </div>
      </div>
    </div>
  );
}