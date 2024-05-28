import React from "react";

export default function AccordionItem({ num, title, text }) {
  return (
    <div className="item">
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon">-</p>
      <div className="content-box">{text}</div>
    </div>
  );
}
