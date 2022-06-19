import './styles/slide.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
    return (
        <Carousel
            autoPlay={true}
            showThumbs={false}
            showArrows={false}
            className='slider'>
            <div className='sliderItemWrapper'>
                <img src="https://img.freepik.com/free-psd/banner-template-online-shopping_23-2148559048.jpg?w=2000" />
            </div>
            <div className='sliderItemWrapper'>
                <img src="https://img.freepik.com/free-psd/shopping-sale-banner-template_23-2148581526.jpg?w=2000" />
            </div>
            <div className='sliderItemWrapper'>
                <img src="https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?w=2000" />
            </div>
        </Carousel>
    )
}
