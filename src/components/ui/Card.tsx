import { useEffect } from "react";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

function getYouTubeId(url: string | undefined) {
    if (!url) return null;
    // Handles watch?v=, youtu.be/, and embed/ URLs
    const m = url.match(/(?:v=|\/embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : null;
}

export function Card({ title, link, type }: CardProps) {
    useEffect(() => {
        if (type === "twitter") {
            const initTwitter = () => {
                const w = (window as any);
                if (w && w.twttr && w.twttr.widgets) {
                    w.twttr.widgets.load();
                    return;
                }

                const id = "twitter-wjs";
                if (!document.getElementById(id)) {
                    const script = document.createElement("script");
                    script.id = id;
                    script.src = "https://platform.twitter.com/widgets.js";
                    script.async = true;
                    document.body.appendChild(script);
                    script.onload = () => w.twttr?.widgets?.load?.();
                }
            };

            initTwitter();
        }
    }, [link, type]);

    const youtubeId = type === "youtube" ? getYouTubeId(link) : null;
    const embedSrc = youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : undefined;

    return (
        <div className="w-full">
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                        <div className="text-base font-semibold text-gray-900">{title}</div>
                        <div className="text-sm text-gray-500">{type === "youtube" ? "YouTube content" : "Twitter content"}</div>
                    </div>
                    <div className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-purple-700">
                        {type}
                    </div>
                </div>

                <div className="space-y-4">
                    {type === "youtube" && embedSrc ? (
                        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
                            <iframe
                                className="h-full w-full"
                                src={embedSrc}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    ) : type === "youtube" && !embedSrc ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600 hover:text-purple-800">Open video</a>
                    ) : null}

                    {type === "twitter" && (
                        <blockquote className="twitter-tweet">
                            <a href={link.replace("x.com", "twitter.com")}></a>
                        </blockquote>
                    )}
                </div>

                <div className="flex items-center justify-between pt-2 text-sm text-gray-500">
                    <span>Link saved</span>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="font-medium text-purple-700 hover:text-purple-900">
                        Open source
                    </a>
                </div>
            </div>
        </div>
    );
}