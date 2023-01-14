import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

import { AppState } from "../../types";

const CategoriesList = () => {
  //get all products from redux state
  const categories = useSelector(
    (state: AppState) => state.categoryReducer.categories
  );
  const isLoading = useSelector(
    (state: AppState) => state.categoryReducer.isLoading
  );

  return (
    <Box sx={{ width: "100%" }}>
      {isLoading && <h2>Loading...</h2>}

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {!isLoading &&
          categories.map((category) => (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <Link to={`/categories/${category.id}`}>
                  <CardActionArea>
                    {category.image && (
                      <CardMedia
                        component="img"
                        height="140"
                        image={category.image}
                        alt={category.name}
                      />
                    )}
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {category.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
                <CardActions></CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CategoriesList;
