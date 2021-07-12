import React from "react";
import { Container, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function Home() {
  const classes = useStyles();
  return (
    <Container>
      <Paper className={classes.paper} justify="center">
        <Typography variant="h4" align="center">
          Welcome to the Trivia Challenge
        </Typography>

        <Typography
          className={classes.title}
          variant="h6"
          align="center"
          gutterBottom
        >
          You will be presented 10 True or False questions
        </Typography>
        <Typography
          className={classes.secondTitle}
          variant="h6"
          align="center"
          gutterBottom
        >
          Can you score 100% ?
        </Typography>
        <Typography
          align="center"
          className={classes.footer}
          component={Link}
          to="/trivia"
          color="secondary"
          variant="h5"
          gutterBottom
        >
          BEGIN
        </Typography>
      </Paper>
    </Container>
  );
}
