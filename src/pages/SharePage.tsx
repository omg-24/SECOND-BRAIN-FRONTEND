import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Buttons";

interface SharedContent {
  title: string;
  link: string;
  type: "youtube" | "twitter";
}

export function SharePage() {
  const { shareId } = useParams<{ shareId: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);
  const [content, setContent] = useState<SharedContent[]>([]);

  useEffect(() => {
    const loadShared = async () => {
      if (!shareId) {
        setError("Invalid share link.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${shareId}`);
        setAuthor(response.data.username ?? null);
        setContent(response.data.content ?? []);
      } catch (err: any) {
        if (err?.response?.status === 404) {
          setError("This shared link is not valid or has been removed.");
        } else {
          setError("Unable to load shared content. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadShared();
  }, [shareId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-10">
      <div className="mx-auto max-w-screen-xl space-y-6">
        <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900">Shared Brain</h1>
              <p className="mt-2 text-sm text-slate-600">Browse the public collection shared by another user.</p>
              {author ? <div className="mt-3 text-sm text-slate-500">Owner: <span className="font-semibold text-slate-900">{author}</span></div> : null}
            </div>
            <div className="flex items-center gap-3">
              <Button varient="secondary" size="md" text="Go Home" onClick={() => navigate("/")} />
              <Button varient="primary" size="md" text="Sign In" onClick={() => navigate("/signin")} />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="rounded-[32px] border border-dashed border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm">
            <div className="inline-flex items-center gap-3 text-lg font-medium">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
              Loading shared content...
            </div>
          </div>
        ) : error ? (
          <div className="rounded-[32px] border border-red-200 bg-red-50 p-10 text-center text-red-700 shadow-sm">
            {error}
          </div>
        ) : content.length === 0 ? (
          <div className="rounded-[32px] border border-gray-200 bg-white p-10 text-center text-slate-500 shadow-sm">
            This shared brain has no public content yet.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {content.map((item, index) => (
              <Card key={`${item.type}-${index}-${item.link}`} type={item.type} link={item.link} title={item.title} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
