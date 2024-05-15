import { Children } from "react"

export default function Sidebar() {
    return (
        <section className="min-h-screen relative top-0">
            <aside className="lg:hidden h-full sticky top-0 overflow-y-auto p-2 flex flex-col ml-1 mt-4 shadow-md">
                <SidebarItems icon="fa-home" title="Home" url="/" />

                <SidebarItems icon="fa-repeat" title="Shorts" url="/" />
                <SidebarItems icon="fa-video" title="Subscriptions" url="/" />
                <SidebarItems icon="fa-book-open" title="Library" url="/" />
            </aside>

            <aside className="hidden lg:sticky absolute w-48 top-0 overflow-y-auto lg:flex flex-col items-center gap-2 px-5 mt-4">
                <LargeSideBarSection title="Youtube">
                    <LargesideBarIcon isActive icon="fa-home" title="Home" url="/" />
                    <LargesideBarIcon icon="fa-repeat" title="Shorts" url="/" />
                </LargeSideBarSection>
            </aside>
        </section>
    )
};


function LargeSideBarSection({ children, title, visibleChildCount = Number.POSITIVE_INFINITY }) {

    const childrenArray = Children.toArray(children).flat();
    const visibleChildren = childrenArray.slice(0, visibleChildCount);
    return (
        <div className="w-full border-b border-black py-2">
            {title && (
                <p className="text-lg text-bold mb-1 mt-2">{title}</p>
            )}
            {visibleChildren}
        </div>
    )
}


function LargesideBarIcon({ icon, title, url, isActive }) {
    return (
        <a href={url} className={`w-full flex items-center p-3 gap-2 mb-2 rounded-lg transition-colors ${isActive ? 'bg-black text-white' : 'hover:bg-gray-300'}`}>
            <i className={`fa-solid ${icon}`}></i>
            <p className="hidden md:inline-block ml-5 text-sm">{title}</p>
        </a>
    )
}

function SidebarItems({ icon, title, url }) {
    return (
        <a href={url} className="text-center mb-5 flex flex-col">
            <i className={`fa-solid ${icon}`}></i>
            <p className="hidden md:inline-block text-sm">{title}</p>
        </a>
    )
}