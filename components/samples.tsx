import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Banner = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseDown = (event) => {
        event.preventDefault();
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event) => {
        if (sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect();
            const position = ((event.clientX - rect.left) / rect.width) * 100;
            setSliderPosition(Math.min(Math.max(position, 0), 100));
        }
    };

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
            setSliderPosition((prev) => Math.max(prev - 1, 0));
        } else if (event.key === "ArrowRight") {
            setSliderPosition((prev) => Math.min(prev + 1, 100));
        }
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <div
                className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center justify-center p-8 bg-gradient-to-br from-indigo-600 to-purple-700`}
            >
                <div className={`${isMobile ? "w-full" : "w-1/2"} mb-8 md:mb-0 md:mr-8`}>
                    <h1 className="text-4xl font-bold text-white mb-4">Experience the Power of Artifixer</h1>
                    <p className="text-xl text-white mb-6">
                    Revolutionize your images with our AI-powered enhancement technology
                    </p>
                    <button className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full hover:bg-indigo-100 transition duration-300">
                        Try it now
                    </button>
                </div>
                <div
                    ref={containerRef}
                    className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl"
                    onMouseMove={handleMouseMove}
                    onTouchMove={(e) => {
                        const touch = e.touches[0];
                        handleMouseMove(touch);
                    }}
                >
                    <img
                        src="/assets/images/unblur-after.jpg"
                        alt="Before: Original image"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-full overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img
                            src="/assets/images/unblur-before.png"
                            alt="After: Enhanced image"
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    </div>
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                        style={{ left: `${sliderPosition}%` }}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleMouseDown}
                        tabIndex={0}
                        role="slider"
                        aria-valuenow={sliderPosition}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="Image comparison slider"
                        onKeyDown={handleKeyDown}
                    >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                            <FaArrowsAltH className="text-purple-700 text-xl" />
                        </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                        Before
                    </div>
                    <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                        After
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;