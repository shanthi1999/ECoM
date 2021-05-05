import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      [theme.breakpoints.down("xs")]: {
        "& .MuiToolbar-dense": {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
    menuButton: {
      // marginRight: theme.spacing(2),
    },
  })
);
