import ProductDetailSection from "@/app/components/product/ProductDetailSection";
import RelatedProducts from "@/app/components/product/RelatedProducts";
import TabbedSpecs from "@/app/components/product/TabbedSpecs";

const monstera = {
    name: "Monstera Deliciosa",
    rating: 4.8,
    reviewCount: 124,
    price: 65,
    description:
        "Known for its iconic leaf fenestrations, the Monstera Deliciosa is a vibrant, easy-to-care-for statement houseplant. It adds dramatic tropical scale and visual structure to any indoor sanctuary.",
    sizes: [
        { label: 'Small (6" Pot)', value: "small" },
        { label: 'Medium (10" Pot)', value: "medium" },
        { label: 'Large (14" Pot)', value: "large" },
    ],
    images: [
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=900&h=750&fit=crop",
        "https://images.unsplash.com/photo-1524598171353-e5a52d33ad74?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?w=200&h=200&fit=crop",
    ],
};

export default function ProductDetail() {

    return (
        <>
            <ProductDetailSection product={monstera} />
            <TabbedSpecs
                description="Known for its iconic leaf fenestrations, the Monstera Deliciosa is a vibrant, easy-to-care-for statement houseplant. It adds dramatic tropical scale and visual structure to any indoor sanctuary."
                careGuide={[
                    {
                        label: "Light",
                        content: "Thrives in bright, indirect light but can tolerate medium shade. Keep out of harsh afternoon sun to protect leaves.",
                    },
                    {
                        label: "Water",
                        content: "Water thoroughly every 1-2 weeks. Allow soil mixture to dry completely before watering again.",
                    },
                    {
                        label: "Humidity",
                        content: "Appreciates high humidity and leaf misting, typical for natural rainforest understories.",
                    },
                ]}
                reviews={[
                    {
                        name: "Elena Rostova",
                        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                        rating: 5,
                        date: "2 weeks ago",
                        comment: "My Monstera arrived perfectly packaged and so incredibly vibrant!",
                    },
                    {
                        name: "Marcus Thorne",
                        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                        rating: 5,
                        date: "1 month ago",
                        comment: "Stunning statement piece, healthy and thriving in my living room.",
                    },
                ]}
            />
            <RelatedProducts />
        </>
    )

}