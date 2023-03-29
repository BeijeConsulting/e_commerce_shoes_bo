import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./actionsButton.css";
import { Link } from "react-router-dom";

export default function ActionsButton({ icons, labels, productId, ...props }) {
  console.log("PROPS ACTIONSBUTTON:", productId);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log("CLICK", productId);
    setAnchorEl(null);
  };

  function navigateToProductDetails() {
    console.log("CLICK", productId);
  }

  function mapIcons(icon, index) {
    return (
      <MenuItem key={index} onClick={handleClose}>
        <Link to={icon.url ? `${icon.url}/${productId}` : null}>
          <div style={{ display: "flex", gap: 10 }} onClick={props.onclick}>
            {icon.icon} {icon.label}
          </div>
        </Link>
      </MenuItem>
    );
  }

  return (
    <div>
      <Button
        sx={{ color: "black" }}
        className="actions-button"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {icons.map(mapIcons)}
      </Menu>
    </div>
  );
}
