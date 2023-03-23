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
  { id: "user_id", label: "userId" },
  { id: "created_at", label: "date" },
  { id: "payment_status", label: "paymentStatus" },
  { id: "status", label: "status" },
  { id: "total_price", label: "total" },
  { id: "transaction", label: "transaction" },
  { id: "actions", label: "actions" },
];

export const productsColumns = [
  { id: "id", label: "Id" },
  { id: "image", label: "image" },
  { id: "brand", label: "brand" },
  { id: "name", label: "name" },
  { id: "category", label: "category" },
  { id: "starting_price", label: "price" },
  { id: "actions", label: "actions" },
];

export const couponsColumns = [
  { id: "id", label: "Id" },
  { id: "code", label: "code" },
  { id: "max_usages", label: "maxUsages" },
  { id: "expire_date", label: "expireDate" },
  { id: "type", label: "type" },
  { id: "value", label: "value" },
  { id: "min_order", label: "minOrder" },
  { id: "actions", label: "actions" },
];

export const usersColumns = [
  { id: "id", label: "Id" },
  { id: "name", label: "name" },
  { id: "surname", label: "surname" },
  { id: "email", label: "email" },
  { id: "telephone", label: "telephone" },
  { id: "birthdate", label: "birthdate" },
  { id: "address", label: "address" },
  { id: "actions", label: "actions" },
];
