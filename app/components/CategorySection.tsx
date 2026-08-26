import CategoryCard from "./CategoryCard";

const categories = [
    {
        image: "https://images.unsplash.com/photo-1545165375-1b744b9ed444?w=600&h=750&fit=crop",
        title: "Indoor Plants",
        count: 48,
    },
    {
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=750&fit=crop",
        title: "Outdoor Plants",
        count: 32,
    },
    {
        image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600&h=750&fit=crop",
        title: "Succulents & Cacti",
        count: 24,
    },
    {
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=750&fit=crop",
        title: "Plant Care Essentials",
        count: 16,
    },
];

export default function CategorySection() {
    return (
        <section className="lg:w-7xl max-w-full  mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-black">Shop by Category</h2>
                <p className="text-gray-500 mt-3 text-sm sm:text-base">
                    Explore distinct collections tailored beautifully for both green thumbs and beginners alike.
                </p>
            </div>

            <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {categories.map((category) => (
                    <CategoryCard key={category.title} {...category} />
                ))}
            </div>
        </section>
    );
}