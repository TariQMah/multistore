import getBillboard from '@/actions/get-billboards'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import React from 'react'

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard("14666af0-72f1-4104-8e60-31b3c9659b8f")
    return (
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard} />
                <div className='flex flex-col gap-x-8 px-4 sm:px-6 lg:px-8'>
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>

        </Container>
    )
}

export default HomePage