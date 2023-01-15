import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, Grid, Paper, styled, Typography } from "@mui/material";

import { fetchOneProduct } from "../../redux/actions";
import { AppState } from "../../types";
import { addProductToCart } from "../../redux/actions";
import ErrModal from "../../components/ErrModal/ErrModal";
import { Container } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Product = () => {
  const { id } = useParams() as any;
  const dispatch = useDispatch();
  const product = useSelector(
    (state: AppState) => state.productReducer.product
  );
  const [currentProduct, setCurrentProduct] = React.useState(product);
  //dispatch fetchAllProducts when page loads
  React.useEffect(() => {
    dispatch(fetchOneProduct(id) as any);
  }, [dispatch, id]);
  //update currentProduct when we have product data
  React.useEffect(() => {
    setCurrentProduct(product);
  }, [product, id]);
  const user = useSelector((state: AppState) => state.userReducer.currentUser);

  return (
    <article className="country-page">
      {currentProduct && (
        <Container fixed>
          <Box sx={{ flexGrow: 1, paddingTop: 10 }}>
            <Grid container spacing={2}>
              <Grid container xs={12} md={7} lg={6} spacing={4}>
                <Grid xs={6} lg={12}>
                  <Item>
                    <img
                      src={currentProduct.images[0]}
                      alt={currentProduct.title}
                    />
                  </Item>
                </Grid>
              </Grid>
              <Grid xs={12} md={5} lg={6}>
                <Item>
                  <Typography variant="h4" align="left">
                    {currentProduct.title}
                  </Typography>
                </Item>
                <Item>
                  <Typography variant="subtitle2" align="left">
                    Category: {currentProduct.category.name}
                  </Typography>
                </Item>
                <Item>
                  <Typography variant="h5" align="left">
                    About this item
                  </Typography>
                  <Typography align="left">
                    {currentProduct.description}
                  </Typography>
                </Item>
                <Item>
                  <Typography align="left">
                    Price: € {currentProduct.price.toLocaleString("en")}
                  </Typography>
                </Item>
                <Item>
                  {user && (
                    <Button
                      className="btn btn__primary"
                      onClick={() =>
                        dispatch(addProductToCart(product, 1, user.id))
                      }
                    >
                      Add to cart
                    </Button>
                  )}
                  {!user && <ErrModal />}
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </article>
  );
};

export default Product;
