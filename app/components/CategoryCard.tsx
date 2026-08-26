interface CategoryCardProps {
    image: string;
    title: string;
    count: number;
}

export default function CategoryCard({ image, title, count }: CategoryCardProps) {
    return (
        <a
            href="#"
            className="group relative block rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4]"
        >
            {/* Background image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-colors duration-500 group-hover:from-black/80" />

            {/* Badge */}
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-black text-xs font-semibold px-3 py-1.5 rounded-full transition-transform duration-300 group-hover:-translate-y-0.5">
                {count} Products
            </span>

            {/* Bottom content */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <h3 className="text-white font-bold text-lg sm:text-xl">{title}</h3>
                <span className="w-9 h-9 rounded-full bg-lime-400 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-out group-hover:rotate-45 group-hover:bg-white">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                    </svg>
                </span>
            </div>
        </a>
    );
}