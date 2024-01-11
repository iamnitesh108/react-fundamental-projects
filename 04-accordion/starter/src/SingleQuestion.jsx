import React, { useState } from 'react';
import { FaPlusSquare, FaMinusSquare} from "react-icons/fa";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FaMinusSquare /> : <FaPlusSquare />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;