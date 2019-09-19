import React from "react";
import { Image, Grid } from "semantic-ui-react";

const GifItem = image => {
  return (
    <Grid.Column>
      <div classname="gifItem">
        <Image margin="10px" src={image.gif.images.downsized.url} />
      </div>
    </Grid.Column>
  );
};

export default GifItem;
