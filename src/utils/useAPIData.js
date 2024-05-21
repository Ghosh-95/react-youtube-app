import { useEffect, useState } from "react";
import { DATA_API_LINK } from "./constants";

export function useAPIData() {
    const [youtubeData, setYoutubeData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch(DATA_API_LINK);
        const data = await response.json();
        setYoutubeData(data.items);
    };

    return youtubeData;
}