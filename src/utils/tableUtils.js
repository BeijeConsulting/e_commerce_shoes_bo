import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ActionsButton from "../components/functionalComponents/actionsButton/ActionsButton";

export const productsListIcons = [
  {
    icon: <VisibilityIcon />,
    label: "View",
    url: `/products`,
  },
  {
    icon: <EditIcon />,
    label: "Edit",
    url: `/products/:id/edit`,
  },
  {
    icon: <DeleteIcon />,
    label: "Delete",
    url: `/products/:id/delete`,
  },
];

export const productsColumns = [
  { id: "id", label: "Id" },
  { id: "image", label: "Image" },
  { id: "brand", label: "Brand" },
  { id: "name", label: "Name" },
  { id: "category", label: "Category" },
  { id: "starting_price", label: "Price" },
  { id: "actions", label: "Actions" },
];
