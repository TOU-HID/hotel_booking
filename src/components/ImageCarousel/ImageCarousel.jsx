import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const ImageCarousel = ({ images, centerSlidePercentage }) => {
  return (
    <div className="w-fit">
      <Carousel showArrows={true} centerMode={true} centerSlidePercentage={centerSlidePercentage}>

        {images.map((item, i)=>
          <div key={i}>
            <img src={item} alt='img' />
          </div>
        )}
        
      </Carousel>
    </div>
  )
}

export default ImageCarousel
