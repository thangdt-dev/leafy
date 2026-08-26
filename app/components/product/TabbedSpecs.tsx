"use client";

import { useState } from "react";

type TabKey = "description" | "care" | "reviews";

interface CareItem {
    label: string;
    content: string;
}

interface Review {
    name: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
}

interface TabbedSpecsProps {
    description: string;
    careGuide: CareItem[];
    reviews: Review[];
}

export default function TabbedSpecs({ description, careGuide, reviews }: TabbedSpecsProps) {
    const [activeTab, setActiveTab] = useState<TabKey>("care");

    const tabs: { key: TabKey; label: string }[] = [
        { key: "description", label: "Description" },
        { key: "care", label: "Care Guide" },
        { key: "reviews", label: `Reviews (${reviews.length})` },
    ];

    return (
        <div className="max-w-7xl mx-auto w-full border border-gray-200 rounded-3xl px-6 sm:px-8 py-6">
            {/* Tab headers */}
            <div className="flex items-center gap-6 sm:gap-8 ">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`relative pb-3 text-sm sm:text-base font-medium whitespace-nowrap transition-colors ${activeTab === tab.key ? "text-black font-bold" : "text-gray-500 hover:text-black"
                            }`}
                    >
                        {tab.label}
                        {activeTab === tab.key && (
                            <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-black rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            <div className="border-b border-gray-200 -mx-6 sm:-mx-8 mb-6" />

            {/* Tab content */}
            <div className="min-h-[120px]">
                {activeTab === "description" && (
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
                )}

                {activeTab === "care" && (
                    <div className="flex flex-col gap-4 sm:gap-5">
                        {careGuide.map((item) => (
                            <div key={item.label} className="flex flex-col sm:flex-row sm:gap-8">
                                <span className="font-bold text-black text-sm w-24 flex-shrink-0 uppercase tracking-wide">
                                    {item.label}
                                </span>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1 sm:mt-0">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "reviews" && (
                    <div className="flex flex-col gap-6">
                        {reviews.map((review, i) => (
                            <div key={i} className="flex gap-3 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-black text-sm">{review.name}</span>
                                        <span className="text-xs text-gray-400">{review.date}</span>
                                    </div>
                                    <div className="flex gap-0.5 mt-1">
                                        {Array.from({ length: 5 }).map((_, idx) => (
                                            <svg
                                                key={idx}
                                                className={`w-3.5 h-3.5 ${idx < review.rating ? "text-yellow-400" : "text-gray-200"}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.363 1.118l1.287 3.955c.3.922-.755 1.688-1.538 1.118l-3.367-2.448a1 1 0 00-1.176 0l-3.367 2.448c-.783.57-1.838-.196-1.538-1.118l1.287-3.955a1 1 0 00-.363-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.955z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}