import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Paper,
  Typography,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { TriviaContext } from "../../../context/Trivia";

import useStyles from "../styles";

const TriviaCard = ({ questions, error }) => {
  const history = useHistory();
  const { updateAnswers } = useContext(TriviaContext);
  let [count, setCount] = useState(0);
  // current question
  const [current, setCurrent] = useState({});
  const [answers, setAnswers] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    setCurrent(questions[count]);
  }, [count, questions]);

  function renderCard() {
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

  return <div>{renderCard()}</div>;
};

TriviaCard.propTypes = {
  questions: PropTypes.array,
  error: PropTypes.string,
  count: PropTypes.number,
  current: PropTypes.object,
  answers: PropTypes.array,
};

export default TriviaCard;
