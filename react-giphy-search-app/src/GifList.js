import React from "react";
import GifItem from "./GifItem";
import { Divider, Grid, Header, Image } from "semantic-ui-react";
import { Container, Row, Col } from "react-amazing-grid";

const GifList = props => {
  const gifItems = props.gifs.map(image => {
    return <GifItem key={image.id} gif={image} />;
  });

  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} xsOffset={3}>
            {gifItems}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GifList;
