import './styles/homeadd.css'
import { AiOutlineRight } from 'react-icons/ai'

const homeCategoriseData = [
    {
        id: 1,
        title: "Mart",
        img: "https://target.scene7.com/is/image/Target/GUEST_f15e68da-094e-436e-bad4-8d0d30593229"
    },
    {
        id: 2,
        title: "Fashion",
        img: "https://thumbs.dreamstime.com/b/portrait-beautiful-girl-model-casual-summer-clothes-no-makeup-white-background-beautiful-girl-model-casual-summer-100630200.jpg"
    },
    {
        id: 3,
        title: "Makeup kits",
        img: "https://thumbs.dreamstime.com/b/makeup-brush-cosmetics-set-white-background-isolated-decorative-31765537.jpg"
    },
    {
        id: 4,
        title: "Groceries",
        img: "https://thumbs.dreamstime.com/b/paper-bag-groceries-white-background-156847921.jpg"
    },
    {
        id: 5,
        title: "Electronics",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx563bYCs3cQWNbi4353_D1V1Io7Jbwni6vQ&usqp=CAU"
    },
]


export default function HomeAdd() {
    return (
        <div className="homeCategoriseDiv">
            {
                homeCategoriseData.map(data => (
                    <div key={data.id}>
                        <div>
                            <img src={data.img} />
                            <h4 style={{ marginLeft: 10 }}>{data.title}</h4>
                        </div>
                        <span><AiOutlineRight size={20} /></span>
                    </div>
                ))
            }
        </div>
    )
}
