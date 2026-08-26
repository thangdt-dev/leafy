import ProductCard from "./ProductCard";

const relatedProducts = [
    {
        image: "https://images.unsplash.com/photo-1602923668104-8f9e03d46f61?w=600&h=600&fit=crop",
        name: "Fiddle Leaf Fig",
        rating: 4.8,
        reviews: 112,
        price: 75,
    },
    {
        image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=600&h=600&fit=crop",
        name: "Pothos Golden",
        rating: 4.7,
        reviews: 96,
        price: 25,
    },
    {
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=600&fit=crop",
        name: "Aloe Vera Premium",
        rating: 4.9,
        reviews: 104,
        price: 22,
    },
    {
        image: "https://images.unsplash.com/photo-1616500163246-742a3eaf87e2?w=600&h=600&fit=crop",
        name: "Peace Lily",
        rating: 4.6,
        reviews: 64,
        price: 30,
    },
];

export default function RelatedProducts() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">
                You May Also Like
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map((product) => (
                    <ProductCard key={product.name} {...product} size="sm" />
                ))}
            </div>
        </section>
    );
}