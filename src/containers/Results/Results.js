import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { TriviaContext } from "../../context/Trivia";
import { Container, Paper, Typography, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useStyles from "./styles";

function Results() {
  const history = useHistory();
  const { answers } = useContext(TriviaContext);
  const classes = useStyles();
  function computeScore(data) {
    // retrieve the correctly answered questions
    const correctAnswers = data.filter((item) => item.correct);
    return correctAnswers.length;
  }
  if (answers.length <= 5) {
    history.push("/");
  }
  const renderResults = (data) => {
    if (!data.length) {
      return (
        <Typography my={5} variant="h4" align="center" gutterBottom>
          Please Play the game
        </Typography>
      );
    }
    return data.map((item, i) => {
      return (
        <Grid container spacing={2} key={i} style={{ marginBottom: "5px" }}>
          <Grid item xs={2}>
            {item.correct ? <AddIcon /> : <RemoveIcon />}
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="body2"
              dangerouslySetInnerHTML={{ __html: item.question }}
              gutterBottom
            />
          </Grid>
        </Grid>
      );
    });
  };
  return (
    <Container gutterbottom={4}>
      <Paper className={classes.resultsPaper}>
        {answers.length >= 3 && (
          <Typography my={5} variant="h4" align="center" gutterBottom>
            You scored <br />
            {computeScore(answers)} / 10
          </Typography>
        )}
        {renderResults(answers)}
        <Typography
          component={Link}
          to="/"
          className={classes.footer}
          variant="h5"
          color="secondary"
          gutterBottom
        >
          Play Again ?
        </Typography>
      </Paper>
    </Container>
  );
}

Results.propTypes = {
  answers: PropTypes.array,
};

export default Results;
