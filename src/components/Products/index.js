import React from 'react';
import { 
    ProductsContainer,
    ProductsHeading,
    ProductsWrapper,
    ProductTitle,
    ProductsCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton,
} from './ProductsElements';

const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>
                {heading}
            </ProductsHeading>
            <ProductsWrapper>
                {data?.map((product, index)=>{
                    return(
                        <ProductsCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>
                                    {product.name}
                                </ProductTitle>
                                <ProductDesc>
                                    {product.desc}
                                </ProductDesc>
                                <ProductPrice>
                                    {product.price}
                                </ProductPrice>
                                <ProductButton>
                                    {product.button}
                                </ProductButton>
                            </ProductInfo>
                        </ProductsCard>
                    )
                })}
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products
