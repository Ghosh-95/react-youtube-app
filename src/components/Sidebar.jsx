import { Children, useState } from "react";
import { playlists, subscriptions } from "../data/sidebarData";
import { useSidebarContext } from "../utils/SidebarContext";

export default function Sidebar() {
    const { isLargeOpen, isSmallOpen, closed } = useSidebarContext();
    return (
        <section className="min-h-screen displ relative top-0">
            <aside className={`${isLargeOpen ? 'lg:hidden' : 'lg:flex'} ${closed && 'lg:hidden'} h-[100vh] hidden sticky top-0 overflow-y-auto p-2 flex-col ml-1 mt-4 shadow-md transition-all delay-500`}>
                <SidebarItems icon="fa-home" title="Home" url="/" />

                <SidebarItems icon="fa-repeat" title="Shorts" url="/" />
                <SidebarItems icon="fa-video" title="Subscriptions" url="/" />
                <SidebarItems icon="fa-lines-leaning" title="Library" url="/library" />
            </aside>

            <aside className={`h-[100vh] lg:sticky absolute w-48 top-0 overflow-y-scroll scrollbar-hidden ${isLargeOpen ? "lg:flex" : "lg:hidden"} ${isSmallOpen ? 'flex z-[999] bg-white min-h-screen' : 'hidden'} flex-col items-center gap-2 px-5 mt-4 transition-all delay-500`}>
                <LargeSideBarSection>
                    <LargesideBarIcon icon="fa-home" title="Home" url="/" />
                    <LargesideBarIcon icon="fa-video" title="Subscriptions" url="/" />
                </LargeSideBarSection>

                <LargeSideBarSection visibleChildCount={5} title="You">
                    <LargesideBarIcon icon="fa-lines-leaning" title="Library" url="/library" />
                    <LargesideBarIcon icon="fa-clock-rotate-left" title="History" url="/history" />
                    <LargesideBarIcon icon="fa-sliders" title="Your videos" url="/your-videos" />
                    <LargesideBarIcon icon="fa-thumbs-up" title="Liked videos" url="/your-videos" />
                    <LargesideBarIcon icon="fa-clock" title="Watch Later" url="/playlist?list=WL" />

                    {playlists.map(list => (
                        <LargesideBarIcon key={list.id} className="text-[0.8rem]" icon="fa-play" title={list.name} url={`/playlist?list?list=${list.id}`} />
                    ))}
                </LargeSideBarSection>

                <LargeSideBarSection title="Explore">
                    <LargesideBarIcon icon="fa-fire" title="Trending" url="/trending" />
                    <LargesideBarIcon icon="fa-bag-shopping" title="Shopping" url="/shopping" />
                    <LargesideBarIcon icon="fa-music" title="Music" url="/music" />
                    <LargesideBarIcon icon="fa-clapperboard" title="Movies" url="/movies" />
                    <LargesideBarIcon icon="fa-headset" title="Live" url="/live" />
                    <LargesideBarIcon icon="fa-gamepad" title="Gaming" url="/gaming" />
                    <LargesideBarIcon icon="fa-newspaper" title="News" url="/news" />
                    <LargesideBarIcon icon="fa-trophy" title="Sports" url="/sports" />
                    <LargesideBarIcon icon="fa-graduation-cap" title="Courses" url="/courses" />
                    <LargesideBarIcon icon="fa-podcast" title="Podcasts" url="/podcasts" />

                </LargeSideBarSection>

                <LargeSideBarSection title="Subscriptions" visibleChildCount={3}>
                    {subscriptions.map(sub => (
                        <LargesideBarIcon key={sub.id} title={sub.channelName} iconImage={sub.imgUrl} />
                    ))}
                </LargeSideBarSection>

                <LargeSideBarSection>
                    <LargesideBarIcon icon="fa-gear" title="Settings" url="/settings" />
                    <LargesideBarIcon icon="fa-flag" title="Report history" url="/report-history" />
                    <LargesideBarIcon icon="fa-circle-question" title="Help" url="/help" />
                    <LargesideBarIcon icon="fa-comment-dots" title="Feedback" url="/feedback" />

                </LargeSideBarSection>
            </aside>
        </section>
    )
};


function LargeSideBarSection({ children, title, visibleChildCount = Number.POSITIVE_INFINITY }) {
    const [isExpanded, setExpanded] = useState(false);

    const childrenArray = Children.toArray(children).flat();
    const showExpandButton = childrenArray.length > visibleChildCount;
    const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleChildCount);
    const ButtonIcon = isExpanded ? <i className="fa-solid fa-chevron-up mr-2"></i> : <i className="fa-solid fa-chevron-down mr-2"></i>
    return (
        <div className="w-full border-b border-gray-400 py-2 transition-all">
            {title && (
                <p className="text-md font-semibold mb-1 mt-2">{title}</p>
            )}
            {visibleChildren}
            {showExpandButton && (
                <button className="text-sm p-2 rounded-md transition-colors hover:bg-gray-200" onClick={() => setExpanded(!isExpanded)}>
                    {ButtonIcon}
                    {isExpanded ? "Show less" : "Show more"}
                </button>
            )}
        </div>
    )
}


function LargesideBarIcon({ icon, iconImage, title, url, isActive, className }) {
    return (
        <a href={url} className={`w-full flex items-center p-2 mb-2 rounded-lg transition-colors ${isActive ? 'bg-black text-white' : 'hover:bg-gray-300'}`}>
            {icon ? <i className={`fa-solid ${icon}`}></i> : (<img className="w-5 h-5 rounded-full" src={iconImage} />)}
            <p className={`ml-5 ${className || 'text-sm'}`}>{title}</p>
        </a>
    )
}

function SidebarItems({ icon, title, url }) {
    return (
        <a href={url} className="text-center mb-5 flex flex-col">
            <i className={`fa-solid ${icon}`}></i>
            <p className="text-[0.8rem]">{title}</p>
        </a>
    )
}