import Image1 from "./Images/Image1.jpg";
import Image2 from "./Images/Image2.jpg";
import Image3 from "./Images/Image3.jpg";
export default function Crousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide mt-4">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={Image1}
            className="d-block w-100"
            style={{ height: "600px" }}
            alt="Image1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Good Work Culture</h5>
            <p>
              Tech Mahindra have a very Good Work Culture and Supportiveness.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={Image2}
            className="d-block w-100"
            style={{ height: "600px" }}
            alt="Image2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Good Business</h5>
            <p>
              Tech Mahindra is Good Business for Last 50 years and one of the
              leading MNC Company
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={Image3}
            className="d-block w-100"
            style={{ height: "600px", width: "95%" }}
            alt="Image3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Spactaculor Architecture</h5>
            <p>This Company Having the Good Architecture and Forniture.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
