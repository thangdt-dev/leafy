// components/FeaturedProducts.tsx
import ProductCard from "./ProductCard";

const smallProducts = [
    {
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=600&fit=crop",
        name: "Monstera Deliciosa",
        rating: 4.9,
        reviews: 120,
        price: 65,
    },
    {
        image: "https://images.unsplash.com/photo-1602923668104-8f9e03d46f61?w=600&h=600&fit=crop",
        name: "Fiddle Leaf Fig",
        rating: 4.8,
        reviews: 120,
        price: 85,
    },
    {
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=600&h=600&fit=crop",
        name: "Snake Plant",
        rating: 4.7,
        reviews: 120,
        price: 40,
    },
    {
        image: "https://images.unsplash.com/photo-1616500163246-742a3eaf87e2?w=600&h=600&fit=crop",
        name: "Peace Lily",
        rating: 4.9,
        reviews: 120,
        price: 35,
    },
];

const largeProducts = [
    {
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=900&h=700&fit=crop",
        name: "Bird of Paradise",
        rating: 5.0,
        reviews: 120,
        price: 95,
    },
    {
        image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=900&h=700&fit=crop",
        name: "Pothos Golden",
        rating: 4.6,
        reviews: 120,
        price: 25,
    },
];

export default function FeaturedProducts() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-black">Our Bestsellers</h2>
                    <p className="text-gray-500 mt-2 text-sm sm:text-base">
                        Perfect additions carefully curated for healthy living and vibrant visual aesthetics.
                    </p>
                </div>
                <button className="inline-flex items-center gap-2 bg-black text-white font-medium px-5 py-3 rounded-full hover:bg-gray-800 transition-colors self-start sm:self-auto whitespace-nowrap">
                    Shop All Bestsellers
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                    </svg>
                </button>
            </div>

            {/* Small cards grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {smallProducts.map((product) => (
                    <ProductCard key={product.name} {...product} size="sm" />
                ))}
            </div>

            {/* Large cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                {largeProducts.map((product) => (
                    <ProductCard key={product.name} {...product} size="lg" />
                ))}
            </div>
        </section>
    );
}