


import {Carousel} from 'react-bootstrap'; // requires a loader
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

const imgs = [
    'https://i.ibb.co/BCRX2Sn/Screenshot-20230217-133210.png',
    'https://i.ibb.co/G3xd4xq/Screenshot-20230217-132901.png',
    'https://i.ibb.co/KmT3QLj/Screenshot-20230217-133317.png'
]

const CarouselComponent = () => {
  return (
    <Carousel indicators={false} interval={2000} style={{width:'100%', height:'100%',cursor: 'pointer'}}>
      {imgs.map(img => {
        return (
          <Carousel.Item style={{width:'100%', height:'100%'}}>
          <img
            className="d-block w-100"
            style={{marginLeft:'0px', width:'100%', height: '100%'}}
            src={img}
            alt="1"
          />
        </Carousel.Item>
        )
      })}
    </Carousel>
  );
};

export default CarouselComponent;