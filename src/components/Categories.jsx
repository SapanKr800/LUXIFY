const categories = [
    {
        name: "Women",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop",
        count: 245
    },
    {
        name: "Men",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
        count: 189
    },
    {
        name: "Accessories",
        image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=800&fit=crop",
        count: 124
    }
];

const Categories = () => {
    return (
        <section className="py-24 md:py-32 bg-[#161412]">
            <div className="container mx-auto px-6">


                <div className="text-center mb-16">
                    <p className="text-sm tracking-[0.3em] text-[#D9A520] mb-4">   SHOP BY </p>
                    <h2 className="font1 text-4xl md:text-5xl font-medium  text-[#ffffff]">Categories</h2>
                </div>

                {/* Categories grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={category.name}
                            className="group relative aspect-3/4 overflow-hidden rounded-none cursor-pointer fade-up"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-[#0f0c0a] via-[#0f0c0a]/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="font-body text-sm text-[#b6b6b6] mb-2">{category.count} Products</p>
                                <h3 className="font1 text-3xl md:text-4xl text-white group-hover:text-[#D9A520] transition-colors">
                                    {category.name}
                                </h3>
                            </div>

                            {/* Hover border */}
                            <div className="absolute inset-0 border border-[#0f0c0a]/0 group-hover:border-[#D9A520]/50 transition-colors rounded-sm" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
