import axios from 'axios'
import { useEffect, useState } from 'react'
import './styles/products.css'
import { AiFillStar } from 'react-icons/ai'
import { TbCurrencyTaka } from 'react-icons/tb'
import { Link } from 'react-router-dom'




export default function Products({ products, title }) {

    return (
        <div className='products'>
            <h2 >{title}</h2>
            {
                products.length == 0 ? (
                    <div className='emptyProductImageDiv'>
                        <img src='https://c.tenor.com/rec5dlPBK2cAAAAd/mr-bean-waiting.gif' />
                    </div>
                )

                    : <div className='productsMainWrapper'>
                        {
                            products.map(product => (
                                <Link style={{ textDecoration: 'none' }} to={'/product/productdetails'}>
                                    <div key={product.id} className="productStyles">
                                        <img src={product.image} />
                                        <div className='productDescStyle'>
                                            <p className='productTitle'>{product.title.length > 30 ? product.title.slice(0, 29) + '...' : product.title}</p>
                                            <div className='priceWrapper'>
                                                <TbCurrencyTaka color={'#f85606'} size={25} />
                                                <p className='productPrice'>  {product.price}</p>
                                            </div>


                                            {
                                                product.rating.rate == 5 ?
                                                    <div className='ratingStyle'>
                                                        <AiFillStar color={'#f85606'} size={20} />
                                                        <AiFillStar color={'#f85606'} size={20} />
                                                        <AiFillStar color={'#f85606'} size={20} />
                                                        <AiFillStar color={'#f85606'} size={20} />
                                                        <AiFillStar color={'#f85606'} size={20} />
                                                    </div> : product.rating.rate == 4 ?
                                                        <div className='ratingStyle'>
                                                            <AiFillStar color={'#f85606'} size={20} />
                                                            <AiFillStar color={'#f85606'} size={20} />
                                                            <AiFillStar color={'#f85606'} size={20} />
                                                            <AiFillStar color={'#f85606'} size={20} />
                                                        </div> : product.rating.rate == 3 ?
                                                            <div className='ratingStyle'>
                                                                <AiFillStar color={'#f85606'} size={20} />
                                                                <AiFillStar color={'#f85606'} size={20} />
                                                                <AiFillStar color={'#f85606'} size={20} />
                                                            </div> : product.rating.rate == 2 ?
                                                                <div className='ratingStyle'>
                                                                    <AiFillStar color={'#f85606'} size={20} />
                                                                    <AiFillStar color={'#f85606'} size={20} />
                                                                </div>
                                                                : <div className='ratingStyle'>
                                                                    <AiFillStar color={'#f85606'} size={20} />
                                                                </div>
                                            }
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
            }

        </div>
    )
}
