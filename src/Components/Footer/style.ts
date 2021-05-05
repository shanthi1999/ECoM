import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      height: "80px",
      borderTop: "1px solid #e5e5e5",
      alignItems: "center",
    },
  })
);
