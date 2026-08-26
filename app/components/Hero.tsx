export default function Hero() {
    return (
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-20">
            {/* Heading + CTA */}
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black">
                    Bring Nature Into Your Space – For Peace, Balance, and Growth.
                </h1>
                <button className="mt-8 inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-500 transition-colors text-black font-semibold px-6 py-3 rounded-full">
                    Explore Plant
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                    </svg>
                </button>
            </div>

            {/* Main grid: left / center / right */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6 items-start">
                {/* Left column */}
                <div className="order-2 lg:order-1 flex lg:flex-col items-center lg:items-stretch gap-6 lg:gap-0">
                    {/* Watch Demo card */}
                    <div className="w-full aspect-square lg:aspect-auto lg:h-60 bg-lime-200 rounded-3xl flex flex-col items-center justify-center gap-3">
                        <button
                            aria-label="Watch demo"
                            className="w-14 h-14 rounded-full bg-black/80 flex items-center justify-center text-white hover:bg-black transition-colors"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                        <span className="font-semibold text-black">Watch Demo</span>
                    </div>

                    {/* Review stats */}
                    <div className="mt-0 lg:mt-8">
                        <p className="text-3xl sm:text-4xl font-bold text-black">25k+</p>
                        <p className="text-gray-500 text-sm mt-1">Review</p>
                        <div className="flex items-center mt-3">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="reviewer"
                                className="w-8 h-8 rounded-full border-2 border-white -mr-2"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="reviewer"
                                className="w-8 h-8 rounded-full border-2 border-white -mr-2"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/men/65.jpg"
                                alt="reviewer"
                                className="w-8 h-8 rounded-full border-2 border-white -mr-2"
                            />
                            <span className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center -mr-2">
                                <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Center: product image + floating card */}
                <div className="order-1 lg:order-2 relative">
                    <div className="rounded-3xl overflow-hidden bg-neutral-200 aspect-[4/3] sm:aspect-[3/2]">
                        <img
                            src="/hero-plant.jpg"
                            alt="Bonsai plant in glass terrarium"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating info card */}
                    <div className="relative sm:absolute sm:-bottom-40 left-1/2 sm:-translate-x-1/2 mt-4 sm:mt-0 w-full sm:w-[90%] bg-white rounded-3xl shadow-xl p-6 sm:p-8 text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-black">
                            Transform Your Space with Greenery
                        </h3>
                        <p className="text-gray-500 mt-2 text-sm sm:text-base">
                            Last month, over 50,000 plants were sold
                        </p>
                        <button className="mt-5 bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Right column: product list */}
                <div className="order-3 lg:mt-0 flex flex-col gap-4 mt-20 sm:mt-24 lg:mt-0">
                    <ProductRow
                        image="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=100&h=100&fit=crop"
                        name="Chinese Money plant"
                        rating="4.8"
                        price="$35"
                    />
                    <ProductRow
                        image="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=100&h=100&fit=crop"
                        name="HyperFresh plant"
                        rating="4.9"
                        price="$45"
                    />
                    <a href="#" className="text-sm font-semibold text-black underline underline-offset-4 text-center">
                        View All
                    </a>

                    <div className="mt-6">
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Sign up to receive plant care tips, mindfulness guides, and special offers on our latest garden products.
                        </p>
                        <a href="#" className="inline-block mt-3 text-sm font-semibold text-black underline underline-offset-4">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProductRow({
    image,
    name,
    rating,
    price,
}: {
    image: string;
    name: string;
    rating: string;
    price: string;
}) {
    return (
        <div className="flex items-center gap-3 bg-lime-50 rounded-2xl p-3">
            <img src={image} alt={name} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
            <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-black truncate">{name}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>{rating}</span>
                    <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.363 1.118l1.287 3.955c.3.922-.755 1.688-1.538 1.118l-3.367-2.448a1 1 0 00-1.176 0l-3.367 2.448c-.783.57-1.838-.196-1.538-1.118l1.287-3.955a1 1 0 00-.363-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.955z" />
                    </svg>
                </div>
                <p className="text-sm font-bold text-black mt-0.5">{price}</p>
            </div>
            <button
                aria-label={`Add ${name} to cart`}
                className="w-7 h-7 rounded-full bg-lime-400 hover:bg-lime-500 transition-colors flex items-center justify-center flex-shrink-0"
            >
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </button>
        </div>
    );
}