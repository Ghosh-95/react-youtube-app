import youtubeLogo from "../assets/youtube-logo.png"

export default function Header() {
    return (
        <header className="py-3 px-5 flex items-center justify-between shadow-xl">
            <figure className="w-24 flex items-center gap-4">
                <i className="text-xl fa-solid fa-bars"></i>
                <img src={youtubeLogo} className="w-full" alt="" />
            </figure>

            <article className="w-[50%] flex items-center gap-5">
                <section className="w-[85%]">
                    <input className="w-[90%] rounded-l-2xl p-2 border border-red-500 outline-none" type="search" />
                    <i className="fa-solid fa-search border border-red-500 py-[0.75rem] pl-4 rounded-r-2xl w-[10%]"></i>
                </section>
                <div className="h-10 grid place-items-center w-10 rounded-full bg-red-500">
                    <i className="fa-solid fa-microphone text-2xl text-white"></i>
                </div>
            </article>

            <figure>

            </figure>
        </header>
    )
}