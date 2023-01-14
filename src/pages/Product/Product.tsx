import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

import { fetchOneProduct } from "../../redux/actions";
import { AppState } from "../../types";
import { addProductToCart } from "../../redux/actions";
import ErrModal from "../../components/ErrModal/ErrModal";

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
        <div className="country-page__details">
          <div className="country-page__title">
            <h2 className="country-card__name">{currentProduct.title}</h2>
          </div>
          <div className="country-page__main">
            <div className="country-page-img">
              <img src={currentProduct.images[0]} alt={currentProduct.title} />
            </div>
            <div className="country-page-text">
              <div className="country-page-right-list">
                <p>Price: </p>
                <p className="right">
                  {currentProduct.price.toLocaleString("en")}
                </p>
              </div>
              <div className="country-page-right-list">
                <p>Description </p>
                <p className="right">{currentProduct.description}</p>
              </div>
              <div className="country-page-right-list">
                <p>Category: </p>
                <p className="right">{currentProduct.category.name}</p>
              </div>
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
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Product;
