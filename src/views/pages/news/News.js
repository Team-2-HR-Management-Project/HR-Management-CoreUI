import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react'
import React from 'react'

const News = () => {
  return (
    <>
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://www.theartworksinc.com/wp-content/uploads/2018/10/DC064.jpg"
            alt="slide 1"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://www.theartworksinc.com/wp-content/uploads/2018/05/DC_VIN-TIL-FOLKET_04-1536x1166.png"
            alt="slide 2"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://www.theartworksinc.com/wp-content/uploads/2018/05/DC0039.jpg"
            alt="slide 3"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </>
  )
}

export default News
