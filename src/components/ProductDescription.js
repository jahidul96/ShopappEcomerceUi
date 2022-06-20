import React from 'react'
import '../pages/styles/details.css'

import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs'
import { TbCurrencyTaka } from 'react-icons/tb'


export default function ProductDescription() {
    return (
        <div className='productDetailsMiddleDiv'>
            <h2>HTC AT-522 Rechargeable Cordless Trimmer With Sharp Blade For Men HTC AT 522</h2>

            {/* icon jsx */}
            <div className='detailsRatingIconWrapper'>
                <div>
                    <AiFillStar size={14} color="gold" />
                    <AiFillStar size={14} color="gold" />
                    <AiFillStar size={14} color="gold" />
                    <AiFillStar size={14} color="gold" />
                    <AiFillStar size={14} color="gold" />
                </div>
                <div>
                    <BsFillShareFill color='gray' style={{ marginRight: 20 }} size={16} />
                    <AiOutlineHeart color='gray' size={18} />
                </div>
            </div>

            {/* brand div */}

            <div className='brandTextWrapper'>
                <span className='brandTextStyle'>Brand :</span>
                <span className='brandsName'> No Brand </span>
                <span className='divider'>|</span>
                <span className='brandLinkText'> More Men's Care from No Brand</span>
            </div>

            <div className='detailsProductPrice'>
                <TbCurrencyTaka color='orange' size={40} />
                <span >1000</span>
            </div>

            {/* add to cart section */}


            <div>
                <div className='addProductCartStyles'>
                    <p>Quantity</p>
                    <div>
                        <button disabled>-</button>
                        <span>1</span>
                        <button>+</button>

                    </div>
                </div>

                <div className='productBuyBtn'>
                    <button>Buy Now</button>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
