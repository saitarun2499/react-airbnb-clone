import star from '../assets/images/Star.png'
export default function Card(props){
    return(
        <div className="card">
            <img src={`./images/${props.coverImg}`} alt="image" className='card-image'/>
            <div className='card-stat'>
                <span><img src={star} alt="star" className='card-star' /></span>
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount})</span>
                <span>•{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p><span className='card-price'>From ${props.price}</span>/ person</p>
        </div>
    )
}