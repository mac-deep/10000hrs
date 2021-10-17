import React, { useEffect, useState } from 'react';
import './Calc.css';
const Calc = () => {
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [displayMonth, setDisplayMonth] = useState(0);

  const handleChange = (e) => {
    setHours(e.target.value);
  };
  useEffect(() => {
    setDays(Math.round(10000 / hours));
    setMonths(Math.round(days / (365.25 / 12)));
    setYears(Math.floor(months / 12));
    setDisplayMonth(months % 12);
  }, [hours, days, months, years, displayMonth]);
  return (
    <div className="calc">
      <div className="left">
        <p>
          <span>If I am willing to give&nbsp;</span>
        </p>
        <p>I will be likely to master that skill in&nbsp;</p>
      </div>
      <div className="right">
        <p>
          <span className="">
            <input
              className="highlight_input bold"
              min="0"
              max="24"
              type="number"
              placeholder="hours"
              value={hours}
              onChange={handleChange}
            />
          </span>
          hours per day
        </p>
        <p>
          <span className="bold">{days} </span>days
        </p>
        <p>
          <span className="bold">{months} </span>months
        </p>
        <p>
          <span className="bold">{years} </span>years{' '}
          {isNaN(displayMonth) || displayMonth === 0 ? null : (
            <>
              <span className="bold">{displayMonth} </span>months
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Calc;
