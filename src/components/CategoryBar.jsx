import { categories } from "../data/categoryData.js";
import { useEffect, useRef, useState } from "react";
import { TRANSLATE_VALUE } from "../utils/constants.js";

function CategoryButton({ className, children, activeCategory, onClick, currentCategory }) {

    return <button onClick={() => onClick(currentCategory)} className={`${className || ''} md:px-3.5 md:py-1.5 px-2 py-1 whitespace-nowrap rounded-lg w-max transition-all ${activeCategory === children ? 'bg-black text-white' : 'bg-gray-400'} hover:bg-gray-500 hover:text-white active:bg-black active:text-white`}>{children}</button>
}

export default function CategoryBar() {
    const [translate, setTranslate] = useState(TRANSLATE_VALUE);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [isRightVisible, setRightVisible] = useState(false);
    const [isLeftVisible, setLeftVisible] = useState(true);
    const containerRef = useRef(null);

    return (
        <article ref={containerRef} className={`p-5 relative overflow-x-hidden}`}>
            {isLeftVisible && <i onClick={() => {
                setRightVisible(true);
                setTranslate(translate => {
                    const newTranslate = translate - TRANSLATE_VALUE;
                    if (newTranslate <= 0) return 0;
                    return newTranslate;
                })
            }} className="w-24 absolute z-10 left-2 p-3.5 top-1.5  rounded-xl bg-gradient-to-r from-white to-transparent fa-solid fa-chevron-left mt-2.5 cursor-pointer active:text-gray-500"></i>}
            <div className="flex gap-5" style={{ transform: `translateX(-${translate}px)` }}>
                {categories.map(category => (
                    <CategoryButton key={category} onClick={setActiveCategory} currentCategory={category} activeCategory={activeCategory}>{category}</CategoryButton>
                ))}
            </div>
            {isRightVisible && <i onClick={() => {
                setLeftVisible(true);
                setTranslate(translate => {
                    if (containerRef.current === null) return translate;

                    const newTranslate = translate + TRANSLATE_VALUE;

                    const edge = containerRef.current.scrollWidth;
                    const width = containerRef.current.clientWidth;

                    if (newTranslate + width >= edge) return edge - width;

                    return newTranslate;
                })

            }} className="w-24 p-3.5 rounded-xl text-end top-1.5 bg-gradient-to-l from-white to-transparent absolute right-2 fa-solid fa-chevron-right mt-2.5 cursor-pointer active:text-gray-500"></i>}
        </article>
    )
}