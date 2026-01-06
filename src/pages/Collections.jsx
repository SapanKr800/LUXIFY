import React from 'react'
import HeroTitle from '../components/HeroTitle'
import { Product } from '../components/FeaturedProducts'

const Collections = () => {
    return (

        <>
            <HeroTitle title={'EXPLORE'} page={'Collections'}
                desc={`Thoughtfully curated edits for every moment,
                 from everyday elegance to extraordinary occasions.`} />

            <section className="py-10 bg-[#0f0c0a]">
                <div className="container mx-auto px-6">



                    <Product />



                </div>
            </section>

        </>
    )
}

export default Collections