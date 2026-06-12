import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Content {
    type: "youtube" | "twitter";
    link: string;
    title: string;
}

export function useContent() {
    const [contents, setContents] = useState<Content[]>([]);

    async function refresh() {
        const response = await axios.get(
            `${BACKEND_URL}/api/v1/content`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        );

        setContents(response.data.content);
    }

    useEffect(() => {
        refresh();
    }, []);

    return {
        contents,
        refresh
    };
}