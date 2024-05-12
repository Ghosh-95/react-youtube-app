import youtubeLogo from "../assets/youtube-logo.png";
function VideoItems() {
    return (
        <div className="shadow-xl flex flex-col gap-2 w-[15rem] rounded-lg h-[15rem]">
            <a href={`/watch-v?=`} className="bg-green-500 rounded-t-lg relative h-[60%]">
                <img src={youtubeLogo} alt="" width={200} className="rounded-lg transition-transform hover:scale-110" />
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
        <article className="flex w-[95%] flex-wrap gap-8 mx-auto my-5" >
            <VideoItems />
            <VideoItems />
            <VideoItems />
            <VideoItems />
        </article>
    )
}