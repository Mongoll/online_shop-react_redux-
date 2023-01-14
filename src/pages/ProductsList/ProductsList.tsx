import React from "react";
import { useDispatch } from "react-redux";

import ProductList from "../../components/ProductList/ProductList";
import { fetchAllProducts } from "../../redux/actions";

const ProductsList = () => {
  //initialize dispatch
  const dispatch = useDispatch();
  //dispatch fetchAllProducts when page loads
  React.useEffect(() => {
    dispatch(fetchAllProducts() as any);
  }, [dispatch]);

  return (
    <div className="home">
      <ProductList />
    </div>
  );
};

export default ProductsList;
