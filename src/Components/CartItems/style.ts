import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    height: "max-content",
    padding: "10px",
    minWidth: "25%",
    background: "#ffffff",
    borderRadius: "5px",
    marginTop: "15px",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  empty: {
    color: "#5ec75e",
  },
  Title: {
    fontSize: "18px",
    fontWeight: 600,
    display: "flex",
    width: "150px",
    justifyContent: "space-between",
  },
  cartIcon: {
    display: "flex",
  },
  bold: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  bolds: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#1a6f9c",
  },
});
