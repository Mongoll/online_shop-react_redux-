import React from "react";
import { useDispatch } from "react-redux";

import CategoriesList from "../../components/CategoriesList/CategoriesList";
import { fetchAllCategories } from "../../redux/actions";

const Categories = () => {
  //initialize dispatch
  const dispatch = useDispatch();
  //dispatch fetchAllProducts when page loads
  React.useEffect(() => {
    dispatch(fetchAllCategories() as any);
  }, [dispatch]);

  return (
    <div className="home">
      <CategoriesList />
    </div>
  );
};

export default Categories;
