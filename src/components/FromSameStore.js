import Products from './Products'
import './styles/fromsamestore.css'


const products = [
    {
        id: 1,
        image: "https://media.istockphoto.com/photos/text-game-night-spelled-out-in-wooden-letter-surrounded-by-dice-picture-id1312627888?b=1&k=20&m=1312627888&s=170667a&w=0&h=DSJ5UwoHnFz_-Uc9qbsVDcw_NyBC4ejgasym2Djbaww=",
        title: "Games and keys",
        price: 200,
        rating: {
            rate: 4
        }
    },
    {
        id: 2,
        image: "https://www.mymobilesprice.com/wp-content/uploads/2022/02/Infinix-Note-12-color-blue.jpg",
        title: "Mobails",
        price: 1000,
        rating: {
            rate: 3
        }
    },
    {
        id: 3,
        image: "https://qph.cf2.quoracdn.net/main-qimg-1cf4e8389904b04cf20c0d95a4bf3b03-lq",
        title: "Fashion",
        price: 2000,
        rating: {
            rate: 3
        }
    },
    {
        id: 4,
        image: "https://i2.wp.com/media.premiumtimesng.com/wp-content/files/2022/01/Mashed.jpg?fit=1600%2C900&ssl=1",
        title: "Beverage",
        price: 200,
        rating: {
            rate: 4
        }
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80",
        title: "Electronics",
        price: 6000,
        rating: {
            rate: 4
        }
    },
    {
        id: 6,
        image: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        title: "Home Appliance",
        price: 20000,
        rating: {
            rate: 4
        }
    },
]

export default function FromSameStore() {
    return (
        <div>
            <Products products={products} title={'From Same Store'} />
        </div>
    )
}
