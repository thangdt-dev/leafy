"use client";

import { useRef, useState, useEffect } from "react";

const testimonials = [
    {
        quote:
            "My Monstera arrived perfectly packaged and so incredibly vibrant. Leafy's care guides have kept it thriving even in my dimly lit apartment!",
        name: "Elena Rostova",
        role: "Urban Jungle Creator",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
    },
    {
        quote:
            "I recommend Leafy to all my interior design clients. The plants are stunning statement pieces, healthy, and the customer experience is unmatched.",
        name: "Marcus Thorne",
        role: "Interior Architect",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
    },
    {
        quote:
            "The 30-day health guarantee gave us the confidence to finally try raising a Fiddle Leaf Fig. It is now the center of our living room!",
        name: "Sarah & Leo",
        role: "Fiddle Leaf Parents",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
    },
    {
        quote:
            "Ordering was seamless and the packaging alone told me this company cares. My Snake Plant has already grown two new leaves in a month.",
        name: "David Kim",
        role: "First-time Plant Owner",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        rating: 5,
    },
    {
        quote:
            "The plant coaching sessions are a game changer. I finally understand watering schedules instead of guessing and hoping for the best.",
        name: "Priya Nair",
        role: "Balcony Gardener",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (index: number) => {
        const container = scrollRef.current;
        if (!container) return;
        const card = container.children[index] as HTMLElement;
        if (card) {
            container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: "smooth" });
        }
    };

    const handlePrev = () => {
        const newIndex = Math.max(activeIndex - 1, 0);
        setActiveIndex(newIndex);
        scrollToIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = Math.min(activeIndex + 1, testimonials.length - 1);
        setActiveIndex(newIndex);
        scrollToIndex(newIndex);
    };

    // Sync activeIndex with manual scroll/swipe
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            let closestIndex = 0;
            let closestDistance = Infinity;

            Array.from(container.children).forEach((child, i) => {
                const el = child as HTMLElement;
                const distance = Math.abs(el.offsetLeft - container.offsetLeft - scrollLeft);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = i;
                }
            });

            setActiveIndex(closestIndex);
        };

        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-black">What Our Plant Parents Say</h2>
                <p className="text-gray-500 mt-3 text-sm sm:text-base">
                    Join over 25,000 happy plant parents sharing daily growth updates with our community.
                </p>
            </div>

            {/* Slider */}
            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#e7ede4] rounded-2xl p-6 sm:p-7 flex flex-col"
                        >
                            {/* Stars */}
                            <div className="flex gap-1">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.363 1.118l1.287 3.955c.3.922-.755 1.688-1.538 1.118l-3.367-2.448a1 1 0 00-1.176 0l-3.367 2.448c-.783.57-1.838-.196-1.538-1.118l1.287-3.955a1 1 0 00-.363-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.955z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-black mt-4 text-sm sm:text-base leading-relaxed flex-1">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 mt-6">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-bold text-black text-sm">{t.name}</p>
                                    <p className="text-gray-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Arrows - hidden on mobile, shown from sm */}
                <button
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    aria-label="Previous testimonial"
                    className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 items-center justify-center shadow-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    disabled={activeIndex === testimonials.length - 1}
                    aria-label="Next testimonial"
                    className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 items-center justify-center shadow-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setActiveIndex(i);
                            scrollToIndex(i);
                        }}
                        aria-label={`Go to testimonial ${i + 1}`}
                        className={`h-2 rounded-full transition-all ${i === activeIndex ? "w-6 bg-black" : "w-2 bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}