import React from 'react';

function OfficeContent({ showExcelCon, showWordCon, showPowerCon }) {
  let content;

  if (showExcelCon && showWordCon && showPowerCon) {
    content = <p>Excel, Word, Power Point</p>;
  } else if (showExcelCon && showWordCon) {
    content = <p>Excel, Word</p>;
  } else if (showWordCon && showPowerCon) {
    content = <p>Word, Power Point</p>;
  } else if (showExcelCon) {
    content = <p>Excel</p>;
  } else if (showWordCon) {
    content = <p> Word</p>;
  } else if (showPowerCon) {
    content = <p>Power Point</p>;
  } else {
    content = <p>Select Programs</p>;
  }

  return <div>{content}</div>;
}

export default OfficeContent;


