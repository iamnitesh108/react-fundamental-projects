import { useState } from 'react';
import peoples from './data'
import { ImQuotesRight} from "react-icons/im";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = peoples[index];

  console.log(Math.ceil(Math.random() * peoples.length)) 
  const nextContent = () => {
    setIndex((index) => {
      const safeIndex = (index + 1) % peoples.length;
      return safeIndex;
    });
  }
  const previousContent = () => {
    setIndex((index) => {
      const safeIndex = (index - 1 + peoples.length) % peoples.length;
      return safeIndex;
    });  
  }
  const randomPerson = () => {
    setIndex((currentIndex) => {
      let randomIndex = currentIndex;
      while (randomIndex === currentIndex) {
        randomIndex = Math.floor(Math.random() * peoples.length);
      }
      return randomIndex;
    });
  };
  
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img'></img>
          <span className='quote-icon'>
            <ImQuotesRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn button-no-decoration' onClick={previousContent}> <GrCaretPrevious /> </button>
          <button className='next-btn button-no-decoration' onClick={nextContent}> <GrCaretNext /> </button>
          <button></button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>Surprise Me</button>
      </article>
    </main>
  );
};
export default App;