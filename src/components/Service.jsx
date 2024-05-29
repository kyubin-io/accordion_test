import React from "react";

export default function Service({ onHandle }) {
  const handleSelect = (e) => {
    onHandle(e.target.value);
  };
  return (
    <select onChange={handleSelect}>
      <option value="0">Disatisfied (0%)</option>
      <option value="5">It was okay (5%)</option>
      <option value="10">It was good (10%)</option>
      <option value="20">Absolutely amazing! (20%)</option>
    </select>
  );
}
