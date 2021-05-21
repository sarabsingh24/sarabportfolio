import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "../../common/container";
import Column from "../../common/column";

export default function Services() {
  return (
    <section className="experiance-bg">
      <div class="parallax">
        <div className="bg-trans">
          <Container>
            <Typography
              variant="button"
              align="center"
              display="block"
              gutterBottom
            >
              Experiances
            </Typography>
            <Typography
              variant="h5"
              align="center"
              display="block"
              gutterBottom
            >
            My Successful Journey
            </Typography>
            <Column column="column">some text</Column>
          </Container>
        </div>
      </div>
    </section>
  );
}
