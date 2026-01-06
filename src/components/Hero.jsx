import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";


const Hero = () => {
    return (

        <section className="relative min-h-screen bg-[#0f0c0a] flex items-center justify-center pt-20 overflow-hidden px-6">

            <div className="absolute z-0 inset-0 bg-linear-to-b from-[rgba(20,15,12,0.5)] to-[#0f0c0a]"></div>


            <div className="absolute rounded-full blur-[100px] bg-[rgba(217,165,32,0.08)] w-95 h-95 top-1/4 right-1/4"></div>
            <div className="absolute rounded-full blur-[100px] bg-[rgba(217,165,32,0.08)] w-80 h-80 bottom-1/4 left-1/4"></div>

            <div className="max-w-300 relative z-1 py-4">
                <div className="max-w-200 m-auto text-center">
                    <p className=" text-md tracking-[0.3em] mb-6 bg-linear-to-br from-[#D9A520] to-[#f3c969] bg-clip-text text-transparent
fade-up [animation-delay:0.5s]">
                        WINTER COLLECTION 2025
                    </p>

                    <h1 className="fade-up font-semibold [animation-delay:1s] text-[clamp(2.5rem,6vw,4rem)] text-white leading-none tracking-tight font-serif
">
                        Timeless
                        <span className="text-[#e8ba4a] block">Elegance</span>
                    </h1>

                    <p className="max-w-130 text-[#b6b6b6] font sm:text-[1.125rem] text-[1rem] fade-up [animation-delay:1.5s] my-8">
                        Discover our curated collection of luxury essentials, crafted with precision and designed for distinction.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center fade-up [animation-delay:s]">


                        <NavLink to="/collections"
                            type="submit"
                            className="px-8 py-4 sm:w-auto w-full bg-[#D9A520] text-[#000000] font-body text-sm tracking-wider hover:text-[#000000!important] transition-colors rounded-none flex items-center justify-center gap-2 group"
                        >
                            Explore Collection
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </NavLink>

                        <NavLink
                            type="submit"
                            className="px-8 py-4 btn-outline sm:w-auto w-full"
                        >
                            View Lookbook
                        </NavLink>


                    </div>
                </div>
            </div>


        </section>

    );
};

export default Hero;
