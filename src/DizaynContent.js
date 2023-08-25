import React from 'react';

function DizaynContent({ showFigmaCon, showCanvaCon, showPhotoshopCon }) {
  let content;

  if (showFigmaCon && showCanvaCon && showPhotoshopCon) {
    content = <p>Figma, Canva, Photoshop</p>;
  } else if (showFigmaCon && showCanvaCon) {
    content = <p>Figma, Canva</p>;
  } else if (showCanvaCon && showPhotoshopCon) {
    content = <p>Canva, Photoshop</p>;
  } else if (showFigmaCon) {
    content = <p>Figma</p>;
  } else if (showCanvaCon) {
    content = <p> Canva</p>;
  } else if (showPhotoshopCon) {
    content = <p>Photoshop</p>;
  } else {
    content = <p>Select Programs</p>;
  }

  return <div>{content}</div>;
}

export default DizaynContent;


