import React from 'react'
import HeroTitle from '../components/HeroTitle'
import { Product } from '../components/FeaturedProducts'

const NewArrivals = () => {
    return (
        <>

            <HeroTitle title={'JUST LANDED'} page={'New Arrivals'}
                desc={`Discover the latest additions to our curated collection,
             fresh from the ateliers of the world's finest craftsmen.`} />

            <section className="py-10 bg-[#0f0c0a]">
                <div className="container mx-auto px-6">



                    <Product />



                </div>
            </section>

        </>
    )
}

export default NewArrivals