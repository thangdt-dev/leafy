export default function BrandStorySection() {
    const features = [
        {
            icon: (
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3a9 9 0 00-9 9c0 3.5 2 6 5 7.5C9 21 12 20 14 18c3-3 5-8 5-13a2 2 0 00-2-2c-2 0-4 1-6 3z" />
                </svg>
            ),
            title: "Sustainably Sourced",
            description:
                "Every green leaf comes directly from trusted eco-friendly nurseries committed to biodiversity and organic growth.",
        },
        {
            icon: (
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
            ),
            title: "Expert Plant Care",
            description:
                "Get comprehensive, step-by-step digital care guides and plant coaching with every single purchase you make.",
        },
        {
            icon: (
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            ),
            title: "Happiness Guarantee",
            description:
                "Your companion has a 30-day health guarantee. If they struggle, we send a replacement or guide you back to green.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left: text content */}
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black">Why Aether?</h2>
                    <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed max-w-md">
                        We blend professional garden botany with modern design aesthetics to bring simple, thriving nature right into your sanctuary.
                    </p>

                    <div className="mt-8 sm:mt-10 flex flex-col gap-7 sm:gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="flex gap-4">
                                <div className="w-11 h-11 rounded-full bg-lime-400 flex items-center justify-center flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-black text-lg">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm sm:text-base mt-1 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: image */}
                <div className="order-1 lg:order-2">
                    <div className="rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[4/3] lg:aspect-[5/6]">
                        <img
                            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&h=1100&fit=crop"
                            alt="Living room with indoor plants"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}