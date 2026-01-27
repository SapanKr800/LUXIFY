import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "./data";


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
                <Product limit={4} />

                {/* View all button */}
                <div className="text-center mt-16">
                    <NavLink to="/new-arrivals" className="font-body text-sm tracking-wider text-[#ffffff] border-b border-[#D9A520] pb-1 hover:text-[#D9A520!important] transition-colors">
                        View All Products
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export const Product = ({ limit }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

            {(limit ? products.slice(0, limit) : products).map((item, i) => {
                return (
                    <ProductCard key={i} product={item} />
                )
            })}




        </div>
    )
}

export default FeaturedProducts;
