import Carousel from "react-bootstrap/Carousel";
import "./review.css";
import grass from '../../images/grass.jpg';

function Review() {
  const data = [
    {
      id: 1,
      quote:
        "Amazing Work! Really knowledgeable, fast learner and good communicator!!",
      img: grass,
      name: "Patrick Moore",
    },
    {
      id: 2,
      quote: "Wide variety of skills awesome communication and enthusiasm!!",
      img: grass,
      name: "Dan Rosenbaum",
    },
    {
      id: 3,
      quote:
        "Great to work with! Awesome team player open to new ideas and willing to learn!",
      img: grass,
      name: "Adam Alcantara",
    },
  ];

  return (
    <div id='container'>
    <div className='title'>
    <h1>Reviews</h1>
    <h5>What customers think</h5>
    </div>
      <Carousel id="carousel" variant="dark">
        {data.map((d) => (
          <Carousel.Item interval={8000}>
            <img className="d-block w-100 review-img" src={d.img} alt={d.id} />
            <Carousel.Caption className="caption">
              <h3>{d.quote}</h3>
              <p>{d.name}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Review;
