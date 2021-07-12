import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
}));
