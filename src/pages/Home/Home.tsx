import React from "react";
import { useDispatch } from "react-redux";
import { Container, Typography } from "@mui/material";

import ProductList from "../../components/ProductList/ProductList";
import Baner from "../../components/Baner/Baner";
import { fetchAllProducts } from "../../redux/actions";

const Home = () => {
  //initialize dispatch
  const dispatch = useDispatch();
  //dispatch fetchAllProducts when page loads
  React.useEffect(() => {
    dispatch(fetchAllProducts() as any);
  }, [dispatch]);

  return (
    <div className="home">
      <Baner />
      <Container fixed>
        <Typography variant="h4">Newest Products</Typography>
      </Container>
      <ProductList slice={-4} />
    </div>
  );
};

export default Home;
