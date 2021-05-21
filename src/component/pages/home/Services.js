import React from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "../../common/container";
import Column from "../../common/column";

export default function Services() {
    return (
      <section className="service-bg">
        <Container>
          <Typography
            variant="button"
            align="center"
            display="block"
            gutterBottom
          >
            Services
          </Typography>
          <Typography
            variant="h5"
            align="center"
            display="block"
            gutterBottom
          >
            some text
          </Typography>
          <Column column="three-column">
            <article className="item">some text</article>
            <article className="item">some text</article>
            <article className="item">some text</article>
          </Column>
        </Container>
      </section>
    );
}
