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
    const [modelOpen, setModelOpen] = useState(false);
    const [filter, setFilter] = useState<"all" | "youtube" | "twitter">("all");
    const { contents, refresh } = useContent();

    const filteredContents = filter === "all" 
      ? contents 
      : contents.filter(content => content.type === filter);

  return (
    <>
      <div className="flex min-h-screen flex-col md:flex-row">
        <Sidebar selectedFilter={filter} onFilterChange={setFilter} />
        <div className="flex-1 bg-gray-100 pb-24 md:pb-0">
          <div className="mx-auto max-w-screen-xl space-y-6 px-4 py-6 md:px-6">
            <CreateContentModal refresh={refresh} open={modelOpen} onClose={() => {
              setModelOpen(false);
            }} />

            <div className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Your second brain</h1>
                <p className="mt-2 text-sm text-gray-600">All your saved Twitter and YouTube content in one responsive workspace.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button startIcon={<PlusIcon size="lg" />} varient="primary" text="Add content" size="md" onClick={() => {
                  setModelOpen(true);
                }} />
                <Button onClick={async () => {
                  const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                    "share": true
                  }, {
                    headers: {
                      "Authorization": localStorage.getItem("token")
                    }
                  });
                  
                  const shareLink = `https://second-brain-frontend-upxm.vercel.app/share/${response.data.hash}`;
                  console.log({ shareLink });
                  alert("Your Link "+ shareLink);
                }} startIcon={<ShareIcon size="lg" />} varient="secondary" text="Share content" size="md" />
              </div>
            </div>

            {filteredContents.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-600 shadow-sm">
                {filter === "all" ? "No content yet. Add a YouTube or Twitter link to get started." : `No ${filter} content. Try adding some or change the filter.`}
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredContents.map(({ type, link, title }, index) => (
                  <Card key={`${type}-${index}-${link}`} type={type} link={link} title={title} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

