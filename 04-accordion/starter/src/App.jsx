import { useState } from "react";
import Question from "./Questions";
import data from "./data";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
        <Question questions={questions} />

    </main>
  );
};
export default App;
