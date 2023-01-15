import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import _ from "lodash";

import { addProductToCart } from "../../redux/actions";
import { AppState } from "../../types";
import ProductCard from "../ProductCard/ProductCard";
import { Container } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

// Product list with pagination and sorting
const ProductList = (props: any) => {
  //get all products from redux state
  const products = useSelector(
    (state: AppState) => state.productReducer.products
  );
  const isLoading = useSelector(
    (state: AppState) => state.productReducer.isLoading
  );

  // for filtered products
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  // for sorted products
  const [sortedProducts, setSortedProducts] = React.useState(products);
  const user = useSelector((state: AppState) => state.userReducer.currentUser);
  React.useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  //filter products by keyword
  const searchKeyword = useSelector(
    (state: AppState) => state.uiReducer.searchKeyWord
  );
  React.useEffect(() => {
    if (products.length) {
      const _tempProducts = products.filter((product) =>
        product.title
          .toString()
          .toLowerCase()
          .includes(searchKeyword?.toString().toLowerCase())
      ) as [];
      setFilteredProducts(_tempProducts);
    }
    // eslint-disable-next-line
  }, [searchKeyword, products]);

  //Sorting related
  const [sortBy, setSortBy] = React.useState("sort");

  React.useEffect(() => {
    const tempSorted = _.orderBy(filteredProducts, [sortBy], ["asc"]) as [];
    setSortedProducts(tempSorted);
    // eslint-disable-next-line
  }, [sortBy, filteredProducts]);

  //handle sort
  const handleSort = (event: any) => {
    setSortBy(event.target.value);
  };

  //initialize dispatch

  const dispatch = useDispatch();
  /* const user = useSelector((state: AppState) => state.userReducer.currentUser); */
  return (
    <Container fixed>
      <Box sx={{ width: "100%" }}>
        {!props.slice && (
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Sort by</InputLabel>
            <Select
              labelId="sort-country-select-label"
              id="sort-country-select"
              onChange={handleSort}
              label="Sort by"
            >
              <MenuItem value="id">
                <em>None</em>
              </MenuItem>
              <MenuItem value="price">Price</MenuItem>
              <MenuItem value="category.name">Category</MenuItem>
            </Select>
          </FormControl>
        )}
        {isLoading && <h2>Loading...</h2>}

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {!isLoading &&
            sortedProducts.slice(props.slice).map((product) => (
              <Grid item xs={3}>
                <ProductCard
                  key={product.id}
                  {...product}
                  onClick={() =>
                    dispatch(addProductToCart(product, 1, user?.id as number))
                  }
                  disabled={false}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductList;
