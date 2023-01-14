import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { AppState, Product } from "../../types";
import ErrModal from "../ErrModal/ErrModal";

interface ProductCardProps extends Partial<Product> {
  onClick: Function;
  disabled: boolean;
}
const ProductCard = ({
  id,
  title,
  description,
  price,
  onClick,
  category,
  images,
  disabled,
}: ProductCardProps) => {
  const user = useSelector((state: AppState) => state.userReducer.currentUser);
  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <Link to={`/all-products/${id}`}>
        <CardActionArea>
          {images && (
            <CardMedia
              component="img"
              height="140"
              image={images[0]}
              alt={title}
            />
          )}

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {category?.name}
            </Typography>
            <Typography>€{price}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        {user?.id && (
          <Button className="btn btn__primary" onClick={() => onClick()}>
            Add to cart
          </Button>
        )}
        {!user?.id && <ErrModal />}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
