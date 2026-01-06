import React from 'react'

const HeroTitle = ({title, page, desc}) => {
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
                           {title}
                        </p>

                        <h2 className="fade-up font-semibold [animation-delay:1s] text-[clamp(2rem,6vw,4rem)]  text-white leading-none tracking-tight font-serif
">
                          {page}
                        </h2>

                        <p className="max-w-150 text-[#b6b6b6] font text-[1rem] fade-up [animation-delay:1.5s] my-8">
                            {desc}
                        </p>

                    </div>
                </div>


            </section>

        </>
    )
}

export default HeroTitle