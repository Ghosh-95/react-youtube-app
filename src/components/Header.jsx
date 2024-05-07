import youtubeLogo from "../assets/youtube-logo.png"

function HeaderIcons({ icon }) {
    return (
        <i className={`text-2xl fa-regular ${icon} hover:bg-gray-400 hover:rounded-full w-10 h-10 px-[0.5rem] py-1 cursor-pointer`}></i>
    )
}

export default function Header() {
    return (
        <header className="py-3 px-5 flex items-center justify-between shadow-xl">
            <figure className="w-24 flex items-center gap-4">
                <i className="text-xl fa-solid fa-bars"></i>
                <img src={youtubeLogo} className="w-full" alt="" />
            </figure>

            <article className="w-[55%] flex items-center gap-5">
                <section className="w-[85%]">
                    <input className="w-[90%] font-semibold rounded-l-full p-2 pl-5 border border-gray-300 outline-none" type="search" placeholder="Search" />
                    <button className=" border border-gray-300 py-[0.5rem] rounded-r-full w-[10%] bg-gray-300 transition-colors hover:bg-gray-400 text-white">
                        <i className="fa-solid fa-search"></i>
                    </button>
                </section>
                <div className="h-10 grid place-items-center w-10 rounded-full bg-gray-400">
                    <i className="fa-solid fa-microphone text-2xl text-white"></i>
                </div>
            </article>

            <section className="flex items-center gap-7">
                <HeaderIcons icon="fa-square-plus" />
                <HeaderIcons icon="fa-bell" />
                <HeaderIcons icon="fa-circle-user" />
            </section>
        </header>
    )
}