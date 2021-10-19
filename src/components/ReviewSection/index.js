import Carousel from "react-bootstrap/Carousel";
import "./review.css";
import grass from "../../images/grass.jpg";
import { useTranslation } from "react-i18next";

function Review() {
  const { t } = useTranslation();

  return (
    <div id="reviews" className="container">
      <div className="title">
        <h1>{t("Reviews")}</h1>
        <h5>{t("CustomersThink")}</h5>
      </div>
      <Carousel id="carousel" variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100 review-img"
      src={grass}
      alt="First slide"
    />
    <Carousel.Caption className="caption">
      <h3>{t('Quote1')}</h3>
      <p id="name">Jelisa Hernandez</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 review-img"
      src={grass}
      alt="Second slide"
    />

    <Carousel.Caption className="caption">
      <h3>{t('Quote2')}</h3>
      <p id="name">Jason Rohena</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 review-img"
      src={grass}
      alt="Third slide"
    />

    <Carousel.Caption className="caption">
      <h3>{t('Quote3')}</h3>
      <p id="name">Jean Hernandez</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default Review;

// <Carousel id="carousel" variant="dark">
//   {data.map((d) => (
//     <Carousel.Item interval={8000}>
//       <img className="d-block w-100 review-img" src={d.img} alt={d.id} />
//       <Carousel.Caption className="caption">
//         <h3>{d.quote}</h3>
//         <p id="name">{d.name}</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   ))}
// </Carousel>
