import banner from '../assets/images/fore.png'
export default function Banner(){
    return(
        <section className='banner'>
            <img src={banner} alt="banner-image" className='banner-image'/>
            <h1 className='banner-title'>Online Experiences</h1>
            <p className='banner-subtitle'>Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}