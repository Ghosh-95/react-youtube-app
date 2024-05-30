import { Link } from "react-router-dom";
import youtubeLogo from "../assets/youtube-logo.png";
import { useAPIData } from "../utils/useAPIData";
import useContentDuration from "../utils/useContentDuration";
import useTimeDiff from "../utils/useTimeDiff";
import useViewCount from "../utils/useViewCount";

function VideoItems({ data }) {

    const { channelTitle, localized: { title }, thumbnails: { medium: { url } }, publishedAt } = data.snippet;

    const { viewCount } = data.statistics;
    const { duration } = data.contentDetails;

    return (
        <div className="transition-transform hover:shadow-xl flex flex-col gap-2 w-[20rem] rounded-lg h-[19rem] px-1">
            <article href={`/watch?v=${data.id}`} className="rounded-t-lg relative h-[60%] grid place-items-center">
                <img src={url} alt="" className="rounded-t-lg h-[11rem] w-full" />
                <p className="absolute text-white text-sm bg-black bg-opacity-60 rounded-md px-1 right-3 bottom-2">{useContentDuration(duration)}</p>
            </article>

            <section className="flex gap-6 items-start mt-2 px-3">
                <figure>
                    <img className="rounded-full h-[3.25rem] w-[3.25rem]" src={youtubeLogo} width={60} alt="" />
                </figure>
                <div className="text-sm">
                    <p className="font-semibold text-md text-wrap">{title.length > 40 ? `${title.substr(0, 40)}...` : title}</p>
                    <p className="text-gray-500">{channelTitle}</p>
                    <p>
                        <span> {useViewCount(viewCount) + ' views'} • {useTimeDiff(publishedAt)}</span>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default function Videos() {

    const data = useAPIData();
    console.log(data);
    return data && (
        <article className="w-[99%] mx-auto my-5" >
            <section className="md:w-[88%] mx-auto flex flex-wrap gap-5 items-center justify-center md:justify-start">
                {data.map(d => (
                    <Link to={"/watch?v=" + d.id} key={d.id}>
                        <VideoItems data={d} />
                    </Link>
                ))}
            </section>
        </article>
    )
}