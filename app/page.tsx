import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import CategorySection from "./components/CategorySection";
import BrandStorySection from "./components/BrandStorySection";
import TestimonialsSection from "./components/product/TestimonialsSection";
import NewsletterSection from "./components/NewsletterSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategorySection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
