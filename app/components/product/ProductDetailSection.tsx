"use client";

import { useState } from "react";

interface ProductSize {
    label: string;
    value: string;
}

interface Product {
    name: string;
    rating: number;
    reviewCount: number;
    price: number;
    description: string;
    sizes: ProductSize[];
    images: string[]; // images[0] là ảnh chính mặc định
}

interface ProductDetailSectionProps {
    product: Product;
}

export default function ProductDetailSection({ product }: ProductDetailSectionProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(
        product.sizes[Math.floor(product.sizes.length / 2)]?.value ?? product.sizes[0]?.value
    );
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => setQuantity((q) => Math.max(1, q - 1));
    const handleIncrease = () => setQuantity((q) => q + 1);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Left: gallery */}
                <div>
                    <div className="rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square lg:aspect-[6/5]">
                        <img
                            src={product.images[selectedImage]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-4 overflow-x-auto gap-3 sm:gap-4 mt-4">
                        {product.images.map((img, i) => (
                            <button
                                key={img}
                                onClick={() => setSelectedImage(i)}
                                className={` rounded-xl overflow-hidden aspect-square border-2 transition-colors ${selectedImage === i ? "border-black" : "border-transparent hover:border-gray-300"
                                    }`}
                            >
                                <img src={img} alt={`${product.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: info */}
                <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">{product.name}</h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-3">
                        <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-200"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.363 1.118l1.287 3.955c.3.922-.755 1.688-1.538 1.118l-3.367-2.448a1 1 0 00-1.176 0l-3.367 2.448c-.783.57-1.838-.196-1.538-1.118l1.287-3.955a1 1 0 00-.363-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.955z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">
                            {product.rating.toFixed(1)}/5 ({product.reviewCount} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <p className="text-3xl sm:text-4xl font-bold text-black mt-5">${product.price}</p>

                    {/* Description */}
                    <p className="text-gray-500 mt-5 text-sm sm:text-base leading-relaxed max-w-xl">
                        {product.description}
                    </p>

                    {/* Size selector */}
                    <div className="mt-7">
                        <h3 className="font-bold text-black text-sm">Select Size</h3>
                        <div className="flex flex-wrap gap-3 mt-3">
                            {product.sizes.map((size) => (
                                <button
                                    key={size.value}
                                    onClick={() => setSelectedSize(size.value)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${selectedSize === size.value
                                        ? "bg-black text-white border-black"
                                        : "bg-white text-black border-gray-300 hover:border-black"
                                        }`}
                                >
                                    {size.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="mt-7">
                        <h3 className="font-bold text-black text-sm">Quantity</h3>
                        <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center border border-gray-300 rounded-full">
                                <button
                                    onClick={handleDecrease}
                                    aria-label="Decrease quantity"
                                    className="w-10 h-10 flex items-center justify-center text-black hover:bg-gray-50 rounded-l-full transition-colors"
                                >
                                    −
                                </button>
                                <span className="w-8 text-center text-sm font-semibold text-black">{quantity}</span>
                                <button
                                    onClick={handleIncrease}
                                    aria-label="Increase quantity"
                                    className="w-10 h-10 flex items-center justify-center text-black hover:bg-gray-50 rounded-r-full transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                        <button className="flex-1 bg-lime-400 hover:bg-lime-500 text-black font-semibold py-4 rounded-full transition-colors">
                            Add to Cart
                        </button>
                        <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-black font-semibold py-4 rounded-full transition-colors">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}