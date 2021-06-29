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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TriviaContext } from "../context/Trivia";
import { john } from "../data";

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

  const [questions, setQuestions] = useState(john.results);
  // keeps track of the current question
  let [count, setCount] = useState(0);
  // current question
  const [current, setCurrent] = useState({});
  const [answers, setAnswers] = useState([]);
  const classes = useStyles();
  const url =
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

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
      setCount((count) => count + 1);
      return;
    }
    // if not, update context and push to the results page
    updateAnswers(answers);
    history.push("/results");
  }
  useEffect(() => {
    setQuestions(john.results);

    setCurrent(questions[count]);
  });
  //  Update the UI to show the current question
  useEffect(() => {
    setCurrent(questions[count]);
  }, [count]);
  return (
    <Container style={{ width: "100%" }}>
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
    </Container>
  );
}
