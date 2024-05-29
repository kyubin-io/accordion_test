import React, { useState } from "react";
import Service from "./Service";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [meService, setMeService] = useState(0);
  const [freService, setFreService] = useState(0);

  let myTip = Number((bill * meService) / 100);
  let freTip = Number((bill * freService) / 100);

  function handleReset() {
    setBill(0);
    setMeService(null);
    setFreService(null);
  }

  return (
    <>
      <ul>
        <li>
          How much was the bill?
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </li>
        <li>
          How did you like th service?
          <Service onHandle={setMeService} />
        </li>
        <li>
          How did your friend like the service?
          <Service onHandle={setFreService} />
        </li>
      </ul>
      <p>
        `You pay ${bill + myTip + freTip} (${bill} + ${myTip + freTip} tip)`
      </p>

      <button onClick={handleReset}>Reset</button>
    </>
  );
}
