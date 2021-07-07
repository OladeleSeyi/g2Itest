import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Button,
  Paper,
  Typography,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TriviaContext } from "../../context/Trivia";

const useStyles = makeStyles({
  root: {
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    flexGrow: 1,
    padding: "4vh",
    minHeight: "30%",
    minWidth: 275,
    maxWidth: "50%",
  },
  paper: {
    height: "100vh",
    width: "100%",
    position: "relative",
  },
  footer: {
    margin: 0,
    position: "absolute",
    top: "90%",
    left: "50%",
    transform: "translate(-50%, 90%)",
  },
  actions: {
    margin: "auto",
  },
});

export default function Trivia() {
  const history = useHistory();
  const { updateAnswers } = useContext(TriviaContext);

  const [questions, setQuestions] = useState([]);
  // keeps track of the current question
  let [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // current question
  const [current, setCurrent] = useState({});
  const [answers, setAnswers] = useState([]);
  const classes = useStyles();
  const url =
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

  function renderPage() {
    if (error) {
      return (
        <Paper
          className={classes.paper}
          style={{ height: "100vh" }}
          justify="center"
        >
          <Card className={classes.root} variant="outlined" justify="center">
            <CardContent>
              <Typography variant="h6">{error}</Typography>
            </CardContent>
            <CardActions style={{ margin: "auto" }}>
              <Button
                size="small"
                color="primary"
                className={classes.actions}
                onClick={() => history.go(0)}
              >
                Refresh
              </Button>
            </CardActions>
          </Card>
        </Paper>
      );
    }

    return (
      <Paper
        className={classes.paper}
        style={{ height: "100vh" }}
        justify="center"
      >
        <Typography my={5} variant="h4" align="center" gutterBottom>
          {questions.length > 0 && <> {current.category}</>}
        </Typography>

        <Card className={classes.root} variant="outlined" justify="center">
          <CardContent>
            <Typography
              dangerouslySetInnerHTML={{ __html: current.question }}
              variant="body2"
              gutterBottom
            />
          </CardContent>
          <CardActions style={{ margin: "auto" }}>
            <Button
              size="small"
              color="primary"
              className={classes.actions}
              onClick={() => answer(current, "True")}
            >
              True
            </Button>
            <Button
              size="small"
              color="primary"
              className={classes.actions}
              onClick={() => answer(current, "False")}
            >
              False
            </Button>
          </CardActions>
        </Card>
        <Typography className={classes.footer} variant="body2" gutterBottom>
          {count + 1} of 10
        </Typography>
      </Paper>
    );
  }

  function answer(data, reply) {
    // check if correct and  set the answer to the answers array
    if (reply === data.correct_answer) {
      setAnswers([...answers, { correct: true, ...data }]);
    } else {
      setAnswers([...answers, { correct: false, ...data }]);
    }
    // check if there are more questions

    // If there are, render next question
    if (count < 9) {
      return setCount((count) => count + 1);
    }
    // if not, update context and push to the results page
    updateAnswers(answers);
    return history.push("/results");
  }

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const data = await fetch(url);
        const quiz = await data.json();
        if (quiz.response_code !== 0) {
          throw new Error("Error loading data");
        }
        setQuestions(quiz.results);
        setCurrent(questions[count]);
        return setLoading(false);
      } catch (error) {
        console.log(error);

        setError("An error occured. Please refresh");
        return setLoading(false);
      }
    };

    if (questions.length === 0) getQuiz();
  }, [count, questions]);
  //  Update the UI to show the current question

  useEffect(() => {
    setCurrent(questions[count]);
  }, [count, questions]);

  return (
    <Container>
      {loading ? <CircularProgress /> : renderPage()}
      {}
    </Container>
  );
}
