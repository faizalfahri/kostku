import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

import Carousel1 from "../assets/img/KostCarousel1.jpg"
import Carousel3 from "../assets/img/KostCarousel3.jpg"

const CarouselComponent = () => {
  return (
    <div>
        <Carousel controls={false} indicators={false} className='shadow-md p-1 bg-light rounded'>
        <Carousel.Item interval={1000}>
            <Image src={Carousel1} className="d-block w-100" rounded />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <Image src={Carousel3} className="d-block w-100" rounded />
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CarouselComponent