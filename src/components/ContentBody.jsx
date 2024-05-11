import CategoryBar from "./CategoryBar";
import Videos from "./Videos";

export default function ContentBody() {
    return (
        <section className="overflow-x-hidden w-[85%]">
            <CategoryBar />
            <Videos />
        </section>
    )
}