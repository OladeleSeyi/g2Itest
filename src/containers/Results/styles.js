import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  resultsPaper: {
    position: "relative",
    minHeight: "100vh",
    maxWidth: "70%",
    margin: "auto",
    padding: "10px",
  },
  footer: {
    position: "absolute",
    margin: "auto, 0",
    bottom: 20,
    textDecoration: "none",
  },
}));
