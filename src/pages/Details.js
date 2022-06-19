import './styles/details.css'
import { AiFillStar, AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs'
import { TbCurrencyTaka, TbTruckDelivery } from 'react-icons/tb'
import { GrLocation } from 'react-icons/gr'
import { BsCashStack, BsFillChatRightDotsFill } from 'react-icons/bs'
import { VscDashboard } from 'react-icons/vsc'
import { GiBoomerangCross } from 'react-icons/gi'
import FromSameStore from '../components/FromSameStore'
import Footer from '../components/Footer'


export default function Details() {
    return (


        <div className='productDetailsContainer'>

            <div className='DetailsCustomcontainer productDetailsFlexDiv'>

                {/* first left immage div */}

                <div className='productDetailsImageDiv'>
                    <div className='productDetailsImageWrapperDiv'>
                        <img src='https://qph.cf2.quoracdn.net/main-qimg-1cf4e8389904b04cf20c0d95a4bf3b03-lq' />
                    </div>

                    {/* slider image if multiple image have */}
                    <div>
                    </div>

                </div>

                {/* midlle details div */}
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

                {/* right delivery details div */}


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
            </div>

            <div className='DetailsCustomcontainer'>
                <FromSameStore />
            </div>
            <Footer />
        </div>
    )
}
