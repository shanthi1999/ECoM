import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 245,
      margin: "15px",
      [theme.breakpoints.down("xs")]: {
        width: "270px",
      },
    },
    media: {
      height: 316,
    },
    Body: {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        flexDirection: "column",
      },
    },
    cardRoot: {
      width: "60%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      "& .MuiCardActions-root": {
        justifyContent: "space-around",
      },
    },
  })
);
