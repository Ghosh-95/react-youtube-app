import CategoryBar from "./CategoryBar";
import Videos from "./Videos";

export default function ContentBody() {
    return (
        <section className="overflow-x-hidden w-[95%] mx-auto">
            <CategoryBar />
            <Videos />
        </section>
    )
}