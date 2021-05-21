import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '../container';
import Box from "@material-ui/core/Box";
import "./style.css";
import { Grid } from "@material-ui/core";



export default function Index() {
 
  return (
    <section className="banner-height">
      <div className="banner-container">
        <article className="left-side">
          <Typography variant="h4" gutterBottom>
            Sarab Singh
          </Typography>

          <Typography variant="h6" gutterBottom>
            I'm Front End Devloper
          </Typography>
          <Typography
            variant="subtitle2"
            className="small-discription"
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            mollis, sem id aliquam posuere, augue mi venenatis sapien.
          </Typography>

          <Button variant="contained" color="secondary" size="medium">
            Portfolio
          </Button>
        </article>

        <article className="right-side">
          <div className="img-border"></div>
        </article>
      </div>
    </section>
  );
}
