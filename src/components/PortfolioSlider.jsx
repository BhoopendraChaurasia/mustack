import { useEffect, useRef, useState } from "react";

import mustack from "../assets/images/slider/mustack.png";
import myclnq from "../assets/images/slider/myclnq.png";
import prologify from "../assets/images/slider/prologify.png";
import trigoelectric from "../assets/images/slider/trigoelectric.png";
import jurisverse from "../assets/images/slider/jurisverse.png";
import img1 from "../assets/images/slider/img1.jpg";
import img2 from "../assets/images/slider/img2.jpg";
import img3 from "../assets/images/slider/img3.jpg";
import img4 from "../assets/images/slider/img4.jpg";
import img5 from "../assets/images/slider/img5.jpg";
import img6 from "../assets/images/slider/img6.jpg";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";


const images = [
    mustack,
    myclnq,
    prologify,
    trigoelectric,
    jurisverse,
];

export default function PortfolioSlider() {
    const [active, setActive] = useState(2);
    const intervalRef = useRef(null);
    const startX = useRef(0);

    // 🔁 Auto Slide
    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, [active]);

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            next();
        }, 3000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const next = () => {
        setActive((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setActive((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    // 🖱 Drag / Swipe
    const handleStart = (e) => {
        stopAutoSlide();
        startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    };

    const handleEnd = (e) => {
        const endX = e.changedTouches
            ? e.changedTouches[0].clientX
            : e.clientX;

        const diff = startX.current - endX;

        if (diff > 50) next();
        else if (diff < -50) prev();

        startAutoSlide();
    };

    return (
        <div className="relative mt-20 w-full h-[550px] overflow-hidden bg-black flex items-center justify-center">

            {/* 🌌 Parallax Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30 transition-all duration-800"
                style={{
                    backgroundImage: `url(${images[active]})`,
                    transform: "scale(1.1)",
                }}
            />

            {/* Slider */}
            <div
                className="relative w-full h-full flex items-center justify-center perspective-[1200px]"
                onMouseDown={handleStart}
                onMouseUp={handleEnd}
                onTouchStart={handleStart}
                onTouchEnd={handleEnd}
            >
                {images.map((img, index) => {
                    let position = index - active;

                    if (position < -2) position += images.length;
                    if (position > 2) position -= images.length;

                    const isActive = position === 0;

                    return (
                        <div
                            key={index}
                            className="absolute transition-all duration-700 ease-in-out"
                            style={{
                                transform: `
                  translateX(${position * 320}px)
                  scale(${isActive ? 1 : 0.75})
                  rotateY(${position * -35}deg)
                `,
                                zIndex: isActive ? 20 : 10,
                                opacity: Math.abs(position) > 2 ? 0 : 1,
                                filter: isActive ? "none" : "blur(3px)",
                            }}
                        >
                            <img
                                src={img}
                                alt=""
                                className={`w-[600px] h-[270px] object-cover rounded-2xl transition-all duration-500
                  ${isActive ? "border-2 border-green-400 shadow-[0_0_40px_#22c55e]" : ""}
                `}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Buttons */}
            <button
                onClick={prev}
                className="absolute left-5 z-30 bg-white/10 hover:bg-white/20 px-4 py-4 rounded-full"
            >
                <IoArrowBackCircleOutline />
            </button>

            <button
                onClick={next}
                className="absolute right-5 z-30 bg-white/10 hover:bg-white/20 px-4 py-4 rounded-full"
            >
                <IoArrowForwardCircleOutline />
            </button>
        </div>
    );
}