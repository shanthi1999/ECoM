import React from "react";
import { useStyles } from "./style";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>All &copy; Copyrights received - 2021</p>
    </div>
  );
};
export default Footer;
