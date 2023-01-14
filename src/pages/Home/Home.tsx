import React from "react";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";

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
      <Typography>Newest Products</Typography>
      <ProductList />
    </div>
  );
};

export default Home;
