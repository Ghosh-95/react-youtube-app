export default function Sidebar() {
    return (
        <section className="min-h-screen relative">
            <aside className="h-full sticky top-0 overflow-y-auto p-2 flex flex-col ml-1 shadow-md">
                <SidebarItems icon="fa-home" title="Home" url="/" />

                <SidebarItems icon="fa-repeat" title="Shorts" url="/" />
                <SidebarItems icon="fa-video" title="Subscriptions" url="/" />
                <SidebarItems icon="fa-book-open" title="Library" url="/" />
            </aside>

            <aside className="hidden lg:sticky absolute w-56 top-0 overflow-y-auto lg:flex flex-col gap-2 px-2">
                test
            </aside>
        </section>
    )
};

function SidebarItems({ icon, title, url }) {
    return (
        <a href={url} className="text-center mb-5 flex flex-col">
            <i className={`fa-solid ${icon}`}></i>
            <p className="hidden md:inline-block text-sm">{title}</p>
        </a>
    )
}