import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import { removeProductFromCart, setQuantityToCart } from "../../redux/actions";
import { AppState } from "../../types";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const Cart = () => {
  const cart = useSelector((state: AppState) => state.cartReducer.cart);
  const user = useSelector((state: AppState) => state.userReducer.currentUser);
  const dispatch = useDispatch();

  //set items added current user
  const tempCart = cart.filter((userCard) => userCard.user_id === user?.id);

  //count total cart price for current user
  const cartTotal = tempCart
    .map((item) => item.price * item.quantity)
    .reduce((total, num) => total + num, 0);

  return (
    <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid xs={9}>
          <Item>
            <Card sx={{ width: "90%", mx: "auto", display: "inline-block" }}>
              <Typography>Cart content</Typography>
              {tempCart.length === 0 && (
                <div className="cart-menu__empty">
                  <h2>No items in the cart</h2>
                </div>
              )}
              {tempCart &&
                tempCart.map((product: any) => (
                  <Card>
                    <CardMedia
                      component="img"
                      sx={{ width: 151, display: "flex" }}
                      image={product.img}
                      alt={product.title}
                    />

                    <CardContent sx={{ display: "flex" }}>
                      <Grid
                        container
                        spacing={2}
                        justifyContent="space-between"
                      >
                        <Grid xs={4}>
                          <Link
                            to={`/online_shop-react_redux-/all-products/${product.prod_id}`}
                          >
                            <Typography>{product.title}</Typography>
                          </Link>
                        </Grid>
                        <Grid xs={2}>
                          <Input
                            type="number"
                            defaultValue={product.quantity}
                            onChange={(e) =>
                              dispatch(
                                setQuantityToCart(
                                  product,
                                  Number(e.target.value),
                                  user?.id as number
                                )
                              )
                            }
                          />
                        </Grid>
                        <Grid xs={4}>
                          <Typography>Price: € {product.price}</Typography>
                        </Grid>
                        <Grid xs={2}>
                          <DeleteIcon
                            className="cart-menu__delete-icon"
                            onClick={() =>
                              dispatch(removeProductFromCart(product))
                            }
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))}
            </Card>
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item>
            <Card>
              <Typography>Total price: € {cartTotal}</Typography>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
