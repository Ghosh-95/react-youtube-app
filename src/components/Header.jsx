import youtubeLogo from "../assets/youtube-logo.png"
import { useSidebarContext } from "../utils/SidebarContext"

function HeaderButtons({ className, children }) {
    return (
        <button className={`h-10 text-2xl grid place-items-center w-10 transition-colors rounded-full ${className || 0} hover:bg-gray-400`}>
            {children}
        </button>
    )
}

export default function Header() {
    const { toggle } = useSidebarContext();
    return (
        <header className="py-3 px-5 flex items-center justify-between shadow-xl">
            <figure className="w-24 flex items-center gap-4">
                <i onClick={(e) => {
                    toggle();
                    e.target.classList.toggle('rotate-180');
                }
                } className="transition-transform cursor-pointer text-xl fa-solid fa-bars"></i>
                <img src={youtubeLogo} className="w-full" alt="youtube logo png image" width={200} />
            </figure>

            <article className="w-[55%] flex items-center flex-shrink-0 gap-5">
                <form id="search-form" className="md:w-[85%] w-[10%] ml-auto">
                    <input className="hidden md:inline w-[90%] font-semibold rounded-l-full p-2 pl-5 border border-gray-300 outline-none" type="search" placeholder="Search" />
                    <button className="md:border border-gray-300 md:py-[0.5rem] rounded-r-full md:w-[10%] md:bg-gray-300 transition-colors md:hover:bg-gray-400 md:text-white">
                        <i className="md:hover:bg-none hover:bg-gray-300 md:hover:bg-inherit md:p-0 p-4 md:rounded-none rounded-full transition-colors fa-solid fa-search"></i>
                    </button>
                </form>
                <HeaderButtons className="bg-gray-300">
                    <i className="fa-solid fa-microphone text-white"></i>
                </HeaderButtons>
            </article>

            <section className="flex items-center gap-7">
                <HeaderButtons>
                    <i className="fa-regular fa-square-plus"></i>
                </HeaderButtons>
                <HeaderButtons>
                    <i className="fa-regular fa-bell"></i>
                </HeaderButtons>
                <HeaderButtons>
                    <i className="fa-regular fa-circle-user"></i>
                </HeaderButtons>
            </section>
        </header>
    )
}