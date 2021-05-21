import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "../../common/container";
import Column from "../../common/column";

export default function Services() {
  return (
    <Container>
      <Typography variant="button" align="center" display="block" gutterBottom>
        About
      </Typography>
      <Typography variant="h5" align="center" display="block" gutterBottom>
        Introduction
      </Typography>
      <Column column="column">text</Column>
    </Container>
  );
}
