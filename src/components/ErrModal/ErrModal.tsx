import * as React from "react";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ErrModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add to cart</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box borderRadius="10px" sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              You must login
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="- to add items to the cart" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- to view the cart" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- access to the dashboard (as admin)" />
              </ListItem>
            </List>
            <Link to="/online_shop-react_redux-/login">
              <Button variant="contained" color="success">
                Login
              </Button>
            </Link>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
