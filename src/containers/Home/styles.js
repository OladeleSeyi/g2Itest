import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
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
    textDecoration: "none",
  },
  actions: {
    margin: "auto",
  },
}));
