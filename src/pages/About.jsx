import React from 'react'
import HeroTitle from '../components/HeroTitle'
import Newsletter from '../components/Newsletter'

const About = () => {
    return (

        <>
            <HeroTitle title={'OUR STORY'} page={'About LUXIFY'}
                desc={`Founded on the principles of exceptional quality and timeless elegance,
                 LUXIFY represents the pinnacle of modern luxury fashion.`} />


            {/* Story */}
            <section className="py-24 bg-[#0f0c0a]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="fade-up">
                            <div className="aspect-4/5 overflow-hidden rounded-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop"
                                    alt=" Atelier"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="fade-up [animation-delay:0.5s]" >
                            <p className="font text-sm tracking-[0.2em] text-[#D9A520] mb-4">HERITAGE</p>
                            <h2 className="font text-white text-4xl font-medium mb-6">A Legacy of Excellence</h2>
                            <div className="space-y-4 font text-muted-colors leading-relaxed">
                                <p>
                                    Since our founding, LUXIFY has been dedicated to creating pieces that stand the test of time. We believe that true luxury lies not in ostentation, but in the quiet confidence of exceptional craftsmanship.
                                </p>
                                <p>
                                    Our ateliers work with the finest materials sourced from around the world—Italian leathers, Japanese silks, Scottish cashmere—transforming them into garments that become treasured companions for life's most important moments.
                                </p>
                                <p>
                                    Every stitch, every cut, every detail is considered with the utmost care, ensuring that each piece meets our exacting standards of quality and beauty.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <Newsletter />
        </>
    )
}

export default About