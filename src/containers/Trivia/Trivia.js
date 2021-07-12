import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, CircularProgress } from "@material-ui/core";

import TriviaCard from "./components/TriviaCard";

function Trivia() {
  const [questions, setQuestions] = useState([]);
  // keeps track of the current question
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url =
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const data = await fetch(url);
        const quiz = await data.json();
        if (quiz.response_code !== 0) {
          throw new Error("Error loading data");
        }
        setQuestions(quiz.results);
        return setLoading(false);
      } catch (error) {
        console.log(error);

        setError("An error occured. Please refresh");
        return setLoading(false);
      }
    };

    if (questions.length === 0) getQuiz();
  }, [questions]);

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <TriviaCard questions={questions} error={error} />
      )}
    </Container>
  );
}

Trivia.propTypes = {
  questions: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Trivia;
