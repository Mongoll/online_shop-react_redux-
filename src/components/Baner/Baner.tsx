import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import "../../styles/baner.css";

function Baner(props: any) {
  var items = [
    {
      name: "Designer Jewellery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing  ",
      link: 2,
      img_src:
        "./media/Apple-Watch-S8-2up-hero-220907_Full-Bleed-Image.jpg.large.jpg",
    },
    {
      name: "Designer Jewellery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      link: 4,
      img_src: "./media/shikhar-yadav-shoes-banner.jpg",
    },
    {
      name: "Designer Jewellery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      link: 1,
      img_src: "./media/BlackFriday_StoreWF.jpg",
    },
  ];

  return (
    <Carousel
      next={() => {
        /* Do stuff */
      }}
      prev={() => {
        /* Do other stuff */
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <Paper className="banerRoot">
      <div className="sec">
        <Typography variant="h3">{props.item.name}</Typography>
        <Typography variant="subtitle1">{props.item.description}</Typography>
        <Link to={`/online_shop-react_redux-/categories/${props.item.link}`}>
          <Button
            sx={{
              ":hover": {
                color: "white",
              },
            }}
            color="info"
            variant="contained"
            className="CheckButton"
          >
            Shop Now
          </Button>
        </Link>
      </div>

      <img src={props.item.img_src} alt={props.item.name} />
    </Paper>
  );
}

export default Baner;
