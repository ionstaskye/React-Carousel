import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  function goBackward() {
    setCurrCardIdx(currCardIdx - 1)
  }

  function showLeftArrow() {
    if (currCardIdx !== 0) {
      return <i
      className="bi bi-arrow-left-circle"
      onClick={goBackward}/>}
    else {
      return null
    }  
  }

  function showRightArrow() {
    if (currCardIdx !== total - 1) {
      return <i
      className="bi bi-arrow-right-circle"
      onClick={goBackward}/>}
    else {
      return null
    }  
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <showLeftArrow />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <showRightArrow
        />
      </div>
    </div>
  );
}

export default Carousel;
