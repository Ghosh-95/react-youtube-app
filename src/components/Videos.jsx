import youtubeLogo from "../assets/youtube-logo.png";
function VideoItems() {
    return (
        <div className="transition-transform hover:shadow-xl flex flex-col gap-2 w-full md:w-[20rem] rounded-lg h-[15rem]">
            <a href={`/watch-v?=`} className="bg-green-500 rounded-t-lg relative h-[60%] grid place-items-center">
                <img src={youtubeLogo} alt="" width={200} className="rounded-lg" />
                <p className="absolute right-3 bottom-2">5:34:00</p>
            </a>

            <section className="flex gap-5 items-start mt-3 px-3">
                <figure>
                    <img className="rounded-full h-[3.25rem] w-[3.25rem]" src={youtubeLogo} width={60} alt="" />
                </figure>
                <div>
                    <p>ABC</p>
                    <p>TEST</p>
                </div>
            </section>
        </div>
    )
}

export default function Videos() {
    return (
        <article className="w-[99%] mx-auto my-5" >
            <section className="w-[88%] mx-auto flex flex-wrap gap-12 items-center justify-start">
                <VideoItems />
                <VideoItems />
                <VideoItems />
                <VideoItems />
            </section>
        </article>
    )
}