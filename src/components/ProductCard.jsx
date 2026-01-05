import { Heart, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

const ProductCard = ({ id, name, price, image, category }) => {


    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    return (
        <>
            <div className='group relative hover-lift cursor-pointer block bg-[#181717] fade-up' key={id}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative aspect-3/4 overflow-hidden bg-card mb-4 shadow-sm rounded-none">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                    />

                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-[#0B0908]/40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                    {/* Quick actions */}
                    <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} `}>
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="flex-1 py-3 bg-[#ffffff] text-[#000000] text-sm tracking-wider hover:bg-[#D9A520] hover:text-[#000000!important] transition-colors rounded-sm flex items-center justify-center gap-2"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            Add to Bag
                        </button>
                    </div>

                    <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsLiked(!isLiked); }}
                        className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0B0908]/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Heart className={`w-5 h-5 transition-colors ${isLiked ? 'fill-[#D9A520] text-[#D9A520]' : 'text-[#ffffff]'}`} />
                    </button>






                </div>


                <div className="space-y-1 p-4">
                    <p className="font-body text-xs tracking-wider text-[#A39E8F] uppercase">{category}</p>
                    <h3 className="font1 text-lg  text-[#F4F2EB]"> {name}</h3>
                    <p className="font-body text-sm text-[#D9A520]">${price}</p>
                </div>

            </div>

        </>
    )
}

export default ProductCard