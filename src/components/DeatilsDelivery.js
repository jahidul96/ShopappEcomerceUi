import React from 'react'
import '../pages/styles/details.css'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { GrLocation } from 'react-icons/gr'
import { BsCashStack, BsFillChatRightDotsFill } from 'react-icons/bs'
import { VscDashboard } from 'react-icons/vsc'
import { GiBoomerangCross } from 'react-icons/gi'

export default function DeatilsDelivery() {
    return (
        <div className='productDeliveryDiv'>
            <div className='deliveryDetailsWrapper'>
                <div className='infoIconDiv'>
                    <p>Delivery</p>
                    <AiOutlineInfoCircle size={18} />
                </div>
                <div className='yourLocation'>
                    <GrLocation size={20} />
                    <span>Your Location</span>
                </div>

                <div className='HomeOrCashDeliveryStyle'>
                    <div className='homeDelivery'>
                        <TbTruckDelivery size={20} />
                        <span>Home Delivery</span>
                    </div>
                    <div className='homeDelivery'>
                        <BsCashStack size={20} />
                        <span>Cash on Delivery</span>
                    </div>
                </div>

                <div className='infoIconDiv ServicesDivStyles'>
                    <p>Services</p>
                    <AiOutlineInfoCircle size={18} />
                </div>

                <div className='homeDelivery'>
                    <VscDashboard size={20} />
                    <span>7 Days Returns</span>
                </div>
                <div className='homeDelivery'>
                    <GiBoomerangCross size={20} />
                    <span>Warrenty Not Available</span>
                </div>

            </div>


            {/* shop details */}

            <div className='shopDetailsDiv'>
                <div className='shopNameAndChatDiv'>
                    <div className='shopNameDiv'>
                        <span>Sold by</span>
                        <p>RS Shop</p>
                    </div>
                    <div className='chatIconDiv'>
                        <BsFillChatRightDotsFill size={20} />
                        <span>Chat</span>
                    </div>
                </div>

                {/* seler rating section */}

                <div className='sellerRatingDiv'>
                    <div className='positiveRateDiv'>
                        <p>Positive Rating Seller</p>
                        <p>New Seller</p>
                    </div>
                    <div className='sellerShipDiv'>
                        <p>Ship on time</p>
                        <p>100%</p>
                    </div>
                    <div className='chatResponseDiv'>
                        <p>Chat Response Rate</p>
                        <p>100%</p>
                    </div>
                </div>
                <div className='visitStoreDiv'>
                    <p>Visit Store</p>
                </div>
            </div>
        </div>
    )
}
