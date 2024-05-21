import youtubeLogo from "../assets/youtube-logo.png";
import { useAPIData } from "../utils/useAPIData";
import useTimeDiff from "../utils/useTimeDiff";

function VideoItems({ data }) {

    const { channelTitle, localized: { title, description }, thumbnails: { standard: { url } }, publishedAt } = data.snippet;

    return (
        <div className="transition-transform shadow-xl flex flex-col gap-2 w-full md:w-[20rem] rounded-lg h-[22rem] px-1">
            <a href={'/'} className="rounded-t-lg relative h-[60%] grid place-items-center">
                <img src={url} alt="" className="rounded-t-lg h-[14rem] w-full" />
                <p className="absolute right-3 bottom-2">5:34:00</p>
            </a>

            <section className="flex gap-6 items-start mt-7 px-3">
                <figure>
                    <img className="rounded-full h-[3.25rem] w-[3.25rem]" src={youtubeLogo} width={60} alt="" />
                </figure>
                <div className="text-sm">
                    <p className="font-semibold text-md">{title.length > 40 ? `${title.substr(0, 40)}...` : title}</p>
                    <p className="text-gray-500">{channelTitle}</p>
                    <p>
                        <span> { } • {useTimeDiff(publishedAt)}</span>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default function Videos() {

    const data = useAPIData();

    return data && (
        <article className="w-[99%] mx-auto my-5" >
            <section className="w-[88%] mx-auto flex flex-wrap gap-5 items-center justify-start">
                {data.map(d => (
                    <VideoItems key={d.id} data={d} />
                ))}
            </section>
        </article>
    )
}