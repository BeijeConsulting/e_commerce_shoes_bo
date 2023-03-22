import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

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

export const ordersColumns = [
  { id: "id", label: "Id" },
  { id: "date ", label: "Date" },
  { id: "payment_status", label: "Payment Status" },
  { id: "stauts", label: "Status" },
  { id: "total", label: "Total" },
  { id: "quantity", label: "Quantity" },
  { id: "actions", label: "Actions" },
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

export const couponsColumns = [
  { id: "id", label: "Id" },
  { id: "code", label: "Code" },
  { id: "max_usages", label: "Max Usages" },
  { id: "expire_date", label: "Expire Date" },
  { id: "type", label: "Type" },
  { id: "value", label: "Value" },
  { id: "min_order", label: "Min Order" },
  { id: "actions", label: "Actions" },
];
