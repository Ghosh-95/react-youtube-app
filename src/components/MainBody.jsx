import ContentBody from "./ContentBody";
import Sidebar from "./Sidebar";

export default function MainBody() {
    return (
        <main className="flex relative">
            <Sidebar />
            <ContentBody />
        </main>
    )
}