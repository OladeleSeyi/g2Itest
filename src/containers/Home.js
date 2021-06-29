import React from "react";
import { Container, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    margin: 0,
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    flexGrow: 1,
    padding: "4vh",
    minHeight: "30%",
    minWidth: 275,
  },
  secondTitle: {
    margin: 0,
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    flexGrow: 1,
    padding: "4vh",
    minWidth: 275,
  },
  paper: {
    minHeight: "100vh",
    position: "relative",
    padding: "auto 20px",
  },
  footer: {
    margin: 0,
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, 90%)",
  },
  actions: {
    margin: "auto",
  },
});

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
        <Button
          align="center"
          className={classes.footer}
          variant="contained"
          color="secondary"
        >
          <Typography variant="body2" gutterBottom>
            BEGIN
          </Typography>
        </Button>
      </Paper>
    </Container>
  );
}
