import './styles/categories.css'
import { Link, useNavigate } from 'react-router-dom'


export default function Categories({ catagoriesData }) {


    const navigate = useNavigate()

    const gotoDetailsPage = () => {
        navigate('/product/productdetails')
    }
    return (
        <div className='categories' onClick={gotoDetailsPage}>
            <h2>Categories</h2>
            <div className='categoriesFlexItemWrapper'>
                {
                    catagoriesData.map(data => (
                        <div key={data.id} className="categoriesItemElement">
                            <img src={data.image} alt={data.title} />
                            <p>{data.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
