import React from 'react';

function Dil({ showPythonCon, showJavaCon, showJavascriptCon }) {
  let content;

  if (showPythonCon && showJavaCon && showJavascriptCon) {
    content = <p>Python, Java, Javascript</p>;
  } else if (showPythonCon && showJavaCon) {
    content = <p>Python, Java</p>;
  } else if (showJavaCon && showJavascriptCon) {
    content = <p>Java, Javascript</p>;
  } else if (showPythonCon) {
    content = <p>Python</p>;
  } else if (showJavaCon) {
    content = <p> Java</p>;
  } else if (showJavascriptCon) {
    content = <p>Javascript</p>;
  } else {
    content = <p>Select Programs</p>;
  }

  return <div>{content}</div>;
}

export default Dil;


