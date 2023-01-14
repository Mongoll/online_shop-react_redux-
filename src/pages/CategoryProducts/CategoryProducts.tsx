import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import ProductList from "../../components/ProductList/ProductList";
import { fetchCategoryProducts } from "../../redux/actions";

const CategoryProducts = () => {
  //initialize dispatch
  const { id } = useParams() as any;
  const dispatch = useDispatch();
  //dispatch fetchAllProducts when page loads
  React.useEffect(() => {
    dispatch(fetchCategoryProducts(id) as any);
  }, [dispatch, id]);

  return (
    <div className="home">
      <ProductList />
    </div>
  );
};

export default CategoryProducts;
