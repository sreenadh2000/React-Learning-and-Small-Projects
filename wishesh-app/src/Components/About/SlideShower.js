import Img1 from "../ParentImages/Carring-Candle.jpg";
import "./TypingText.css";
function SlideShower() {
  const slidesList = [
    {
      id: 1,
      header: "Animation",
      quetation: ` Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
    Bonorum et Malorum" The Extremes of Good and Evil by Cicero, written
    in 45 BC. This book is a treatise on the theory of ethics, very
    popular during the Renaissance`,
      image: Img1,
    },
    {
      id: 2,
      header: "Animation",
      quetation: ` Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
    Bonorum et Malorum" The Extremes of Good and Evil by Cicero, written
    in 45 BC. This book is a treatise on the theory of ethics, very
    popular during the Renaissance`,
      image: Img1,
    },
    {
      id: 3,
      header: "Animation",
      quetation: ` Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
    Bonorum et Malorum" The Extremes of Good and Evil by Cicero, written
    in 45 BC. This book is a treatise on the theory of ethics, very
    popular during the Renaissance`,
      image: Img1,
    },
    {
      id: 4,
      header: "Animation",
      quetation: ` Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
    Bonorum et Malorum" The Extremes of Good and Evil by Cicero, written
    in 45 BC. This book is a treatise on the theory of ethics, very
    popular during the Renaissance`,
      image: Img1,
    },
    {
      id: 5,
      header: "Animation",
      quetation: ` Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
    Bonorum et Malorum" The Extremes of Good and Evil by Cicero, written
    in 45 BC. This book is a treatise on the theory of ethics, very
    popular during the Renaissance`,
      image: Img1,
    },
    {
      id: 6,
      header: "Animation",
      quetation: ` Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
    Bonorum et Malorum" The Extremes of Good and Evil by Cicero, written
    in 45 BC. This book is a treatise on the theory of ethics, very
    popular during the Renaissance`,
      image: Img1,
    },
  ];
  const slidesAfterMap = slidesList.map((slide, index) => {
    return (
      <div key={index} className="slide">
        <div className="slide-top">
          <h1>{slide.header}</h1>
          <p>{slide.quetation}</p>
        </div>
        <section>
          <img
            src={slide.image}
            width={100}
            height={100}
            alt="Carring-Candle"
          />
        </section>
      </div>
    );
  });

  return <div id="SlideShower">{slidesAfterMap}</div>;
}

export default SlideShower;
