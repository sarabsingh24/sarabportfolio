
import React, { useState, useEffect } from "react";

import Column from "../../common/column";
import Container from "../../common/container";
import { workInfo } from "../../data/workInfo";
import Typography from "@material-ui/core/Typography";

import "./style.css";

export default function Contact() {
 

 

  return (
    <section className="contact-bg">
      <Container>
        <Typography
          variant="button"
          align="center"
          display="block"
          gutterBottom
        >
          Contact
        </Typography>
        <Typography variant="h5" align="center" display="block" gutterBottom>
          some text
        </Typography>

        {/* <Column>fghgfhfg</Column> */}
      </Container>
    
    </section>
  );
}
