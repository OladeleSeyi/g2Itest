import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { TriviaContext } from "../context/Trivia";
import { Container, Button, Paper, Typography, Grid } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Results() {
  const history = useHistory();
  const { answers } = useContext(TriviaContext);

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
      <Paper
        style={{
          minHeight: "100vh",
          maxWidth: "70%",
          margin: "auto",
          padding: "10px",
        }}
      >
        {answers.length >= 3 && (
          <Typography my={5} variant="h4" align="center" gutterBottom>
            You scored <br />
            {computeScore(answers)} / 10
          </Typography>
        )}
        {renderResults(answers)}
        <Button component={Link} to="/" variant="contained" color="secondary">
          <Typography variant="body2" gutterBottom>
            Play Again ?
          </Typography>
        </Button>
      </Paper>
    </Container>
  );
}
