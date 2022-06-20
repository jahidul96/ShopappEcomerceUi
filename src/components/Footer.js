import './styles/footer.css'
import { BsApple } from 'react-icons/bs'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }
    return (
        <>
            <div className='footer'>
                <div className='container footerContainer'>
                    <div className='footerCustomerCareDiv'>
                        <h3>Customer Care</h3>
                        <ul>
                            <li>Help Center</li>
                            <li>How to Buy</li>
                            <li>Returns & Refunds</li>
                            <li>Contact Us</li>
                            <li>Tearms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 onClick={goToHomePage}>Shopapp</h3>
                        <ul>
                            <li>Help Center</li>
                            <li>How to Buy</li>
                            <li>Returns & Refunds</li>
                            <li>Contact Us</li>
                            <li>Tearms & Conditions</li>
                        </ul>
                    </div>
                    <div className='footerLastDiv'>
                        <div className='qrcodeWrapper'>
                            <img src='https://images.macworld.co.uk/cmsdata/features/3666205/macworld_qr_code.png' />
                        </div>
                        <div>
                            <div className='appBtnContainer'>
                                <div className='appBtn'>
                                    <span><BsApple size={20} /></span>
                                    <div>
                                        <p>Download on the</p>
                                        <p className='appStoreNameStyle'>App Store</p>
                                    </div>
                                </div>
                                <div className='appBtn'>
                                    <span><IoLogoGooglePlaystore size={20} /></span>
                                    <div>
                                        <p>Download on the</p>
                                        <p className='appStoreNameStyle'>App Store</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='myName'>
                <p>All Right Reserved By Jahidul Islam.</p>
            </div>

        </>
    )
}
