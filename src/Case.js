import React from 'react';

function Case({ showOffice, showProgram, showDizayn }) {
  let content;

  if (showOffice && showProgram && showDizayn) {
    content = <p>MS Office, Proqramlaşdırma dilləri, Dizayn Proqramları</p>;
  } else if (showOffice && showProgram) {
    content = <p>MS Office, Proqramlaşdırma dilləri</p>;
  } else if (showProgram && showDizayn) {
    content = <p>Proqramlaşdırma dilləri, Dizayn Proqramları</p>;
  } else if (showOffice) {
    content = <p>MS Office</p>;
  } else if (showProgram) {
    content = <p>Proqramlaşdırma dilləri</p>;
  } else if (showDizayn) {
    content = <p>Dizayn Proqramları</p>;
  } else {
    content = <p>Select Programs</p>;
  }

  return <div>{content}</div>;
}

export default Case;
