import React, { useEffect, useState } from "react";
import data from '../database/data';

export default function Questions() {

  const [checked, setChecked] = useState(undefined);

  const questions = data[0]

  useEffect(() => {
    console.log(data)
  }
)

  function onSelect() {
    console.log('radio button change')
  }
  return (
    <div className="questions">
      <h2 className="text-light">{questions.question}</h2>

      <ul key={questions.id}>
        {questions.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              name="options"
              value={false}
              id={`q${i}-option`}
              onChange={onSelect()}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
