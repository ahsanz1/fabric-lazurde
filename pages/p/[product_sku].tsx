import { PageProps } from 'lib/types/common'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FC } from 'react'


const LazurdeProductDescriptionPage: FC<PageProps> = () => {
    return (
        <div>LazurdeProductDescriptionPage</div>
    )
}

export default LazurdeProductDescriptionPage

const getStaticPaths: GetStaticPaths = async () => {
    const paths = ["1", "2", "3"].map((sku) => ({
        params: {
            product_sku: sku
        }
    }))

    return { paths, fallback: false }
}

const getStaticProps: GetStaticProps = async (context) => {
    const product = {}

    return {
        props: { product }
    }
}