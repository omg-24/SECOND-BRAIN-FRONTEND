import { useEffect } from "react";
import { ShareIcon } from "../../icons/ShareIcon";

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
        console.log("LINK:", link);

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
        <div>
            <div className="p-4 bg-white rounded-md border border-gray-200 w-72 min-w-72 min-h-48">

                <div className="flex justify-between items-center">

                    <div className="flex items-center text-md">
                        <div className="text-gray-500 pr-2">
                             <ShareIcon size="md" />
                        </div>

                        {title}
                    </div>

                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <ShareIcon size="md" />
                            </a>
                        </div>

                        <div className="text-gray-500">
                            <ShareIcon size="md" />
                        </div>
                    </div>

                </div>

                <div className="pt-4">
                    {type === "youtube" && embedSrc ? (
                        <div className="w-full">
                            <iframe
                                className="w-full h-48"
                                src={embedSrc}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    ) : type === "youtube" && !embedSrc ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600">Open video</a>
                    ) : null}

                    {type === "twitter" && (
                        <blockquote className="twitter-tweet">
                            <a href={link.replace("x.com", "twitter.com")}></a>
                        </blockquote>
                    )}
                </div>

            </div>
        </div>
    );
}