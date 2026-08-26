// components/ProductCard.tsx
interface ProductCardProps {
    image: string;
    name: string;
    rating: number;
    reviews: number;
    price: number;
    size?: "sm" | "lg";
}

export default function ProductCard({
    image,
    name,
    rating,
    reviews,
    price,
    size = "sm",
}: ProductCardProps) {
    const isLarge = size === "lg";

    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col h-full">
            {/* Image */}
            <div
                className={`w-full bg-neutral-100 overflow-hidden ${isLarge ? "aspect-[4/3] sm:aspect-[16/11]" : "aspect-square"
                    }`}
            >
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info */}
            <div className="p-4 sm:p-5 flex flex-col gap-2 flex-1">
                <div>
                    <h3 className="font-semibold text-black text-base sm:text-lg">{name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                        <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.363 1.118l1.287 3.955c.3.922-.755 1.688-1.538 1.118l-3.367-2.448a1 1 0 00-1.176 0l-3.367 2.448c-.783.57-1.838-.196-1.538-1.118l1.287-3.955a1 1 0 00-.363-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.955z" />
                        </svg>
                        <span className="font-semibold text-black">{rating.toFixed(1)}</span>
                        <span>({reviews} reviews)</span>
                    </div>
                </div>

                <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="font-bold text-black text-lg">${price}</span>
                    <button
                        aria-label={`Add ${name} to cart`}
                        className="w-8 h-8 rounded-full bg-lime-400 hover:bg-lime-500 transition-colors flex items-center justify-center flex-shrink-0"
                    >
                        <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}