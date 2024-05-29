import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function MainBody() {
    return (
        <main className="flex relative">
            <Sidebar />
            <Outlet />
        </main>
    )
}