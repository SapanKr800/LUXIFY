import { ArrowRight } from 'lucide-react'
import { useState } from 'react';

const Newsletter = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmail("");
    };
    return (
        <>

            <section className="relative h-120 bg-[#0f0c0a] flex items-center justify-center overflow-hidden px-6">

                <div className="absolute z-0 inset-0 bg-linear-to-b from-[rgba(20,15,12,0.5)] to-[#0f0c0a]"></div>


                <div className="absolute rounded-full blur-[100px] bg-[rgba(217,165,32,0.08)] w-95 h-95 top-1/4 right-1/4"></div>
                <div className="absolute rounded-full blur-[100px] bg-[rgba(217,165,32,0.08)] w-80 h-80 bottom-1/4 left-1/4"></div>

                <div className="max-w-300 relative z-1 py-4">
                    <div className="max-w-200 m-auto text-center">
                        <p className=" text-md tracking-[0.3em] mb-6 bg-linear-to-br from-[#D9A520] to-[#f3c969] bg-clip-text text-transparent
fade-up [animation-delay:0.5s]">
                            STAY CONNECTED
                        </p>

                        <h2 className="fade-up font-semibold [animation-delay:1s] text-[clamp(2rem,6vw,4rem)]  text-white leading-none tracking-tight font-serif
">
                            Join Our World
                        </h2>

                        <p className="max-w-150 text-[#b6b6b6] font text-[1rem] fade-up [animation-delay:1.5s] my-8">
                            Subscribe to receive exclusive offers, early access to new collections, and curated style inspiration.
                        </p>

                       

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 bg-[#272321] border border-[#272321] rounded-none text-sm text-[#9D968D] placeholder:text-[#9D968D] focus:outline-none focus:border-[#D9A520] transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 bg-[#D9A520] text-[#000000] font-body text-sm tracking-wider hover:text-[#000000!important] transition-colors rounded-none flex items-center justify-center gap-2 group"
                            >
                                Subscribe
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>


                    </div>
                </div>


            </section>
        </>
    )
}

export default Newsletter