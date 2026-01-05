import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        name: "Cashmere Overcoat",
        price: 2450,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
        category: "Outerwear"
    },
    {
        id: 2,
        name: "Silk Evening Gown",
        price: 3200,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
        category: "Dresses"
    },
    {
        id: 3,
        name: "Italian Leather Bag",
        price: 1890,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop",
        category: "Accessories"
    },
    {
        id: 4,
        name: "Merino Wool Sweater",
        price: 680,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
        category: "Knitwear"
    },
    {
        id: 5,
        name: "Tailored Blazer",
        price: 1250,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
        category: "Tailoring"
    },
    {
        id: 6,
        name: "Leather Ankle Boots",
        price: 895,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop",
        category: "Footwear"
    },
    {
        id: 7,
        name: "Suede Trench Coat",
        price: 2100,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
        category: "Outerwear"
    },
    {
        id: 8,
        name: "Crystal Statement Necklace",
        price: 450,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",
        category: "Jewelry"
    }
];

const FeaturedProducts = () => {
    return (
        <section className="py-24 md:py-32 bg-[#0f0c0a]">
            <div className="container mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-sm tracking-[0.3em] text-[#D9A520] mb-4">CURATED FOR YOU</p>
                    <h2 className="font1 text-4xl md:text-5xl font-medium  text-[#ffffff]">Featured Collection</h2>
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

                    {
                        products.map((item, i) => {
                            return (
                                <ProductCard key={i} {...item} />
                            )
                        })

                    }

                </div>

                {/* View all button */}
                <div className="text-center mt-16">
                    <button className="font-body text-sm tracking-wider text-[#ffffff] border-b border-[#D9A520] pb-1 hover:text-[#D9A520!important] transition-colors">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
