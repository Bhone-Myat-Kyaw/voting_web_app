import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
    const mediaQuery = typeof window == "undefined" ? null : window.matchMedia(query);

    const [match, setMatch] = useState(mediaQuery?.matches ?? false);

    useEffect(()=>{
        if(!match) return;

        const listener = (event: MediaQueryListEvent) => {
            setMatch(event.matches);
        }

        mediaQuery?.addEventListener("change", listener)

        return () => mediaQuery?.removeEventListener("change", listener);
    }, [query])

    return match;
}