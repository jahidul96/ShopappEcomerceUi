import './styles/categories.css'



export default function Categories({ catagoriesData }) {

    return (
        <div className='categories'>
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
