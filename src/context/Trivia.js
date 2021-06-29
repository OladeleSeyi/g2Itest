import React, { createContext, useState } from "react";

export const TriviaContext = createContext(null);

const TriviaProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  function updateAnswers(data) {
    setAnswers(data);
  }
  return (
    <TriviaContext.Provider
      value={{
        answers,
        updateAnswers,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export default TriviaProvider;
