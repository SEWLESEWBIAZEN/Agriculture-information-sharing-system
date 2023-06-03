import woman_phone from '../assets/woman_phone.jpg'
import woman_wood from '../assets/woman_wood.jpg'
import man_haystack from '../assets/man_haystack.jpg'
import './style.css'
import './bootstrap.min.css'
const Carousel = () =>
{
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={woman_phone} className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h5>ACCESSIBLE</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                        <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={man_haystack} className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h5>EASY</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                        <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={woman_wood} className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h5>CREDIBLE</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                        <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;