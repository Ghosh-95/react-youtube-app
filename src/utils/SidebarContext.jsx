import { createContext, useContext, useState } from "react"

const sidebarContext = createContext(null);

export function useSidebarContext() {
    const value = useContext(sidebarContext);

    if (value === null) throw new Error("Cannot use context! Something error occurred");

    return value;
}

export function SidebarContextProvider({ children }) {
    const [isLargeOpen, setLargeOpen] = useState(true);
    const [isSmallOpen, setSmallOpen] = useState(false);

    const isSmallScreen = window.innerWidth < 1024;

    function toggle() {
        if (isSmallScreen) setSmallOpen(!isSmallOpen);
        else setLargeOpen(!isLargeOpen);
    };

    function close() {
        if (isSmallScreen) setSmallOpen(false);
        else setLargeOpen(false);
    };

    return (
        <sidebarContext.Provider value={{ isLargeOpen, isSmallOpen, toggle, close }}>
            {children}
        </sidebarContext.Provider>
    )
}