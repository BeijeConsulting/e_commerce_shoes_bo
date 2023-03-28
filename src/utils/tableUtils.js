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
    url: `/products/edit-product`,
  },
  {
    icon: <DeleteIcon />,
    label: "Delete",
    url: `/products/:id/delete`,
  },
];

export const ordersListIcons = [
  {
    icon: <VisibilityIcon />,
    label: "View",
    url: `/orders`,
  },
  {
    icon: <EditIcon />,
    label: "Edit",
    url: `/orders/:id/edit`,
  },
  {
    icon: <DeleteIcon />,
    label: "Delete",
    url: `/orders/:id/delete`,
  },
];

export const couponsListIcons = [
  {
    icon: <VisibilityIcon />,
    label: "View",
    url: `/coupons/coupon-details`,
  },
  {
    icon: <EditIcon />,
    label: "Edit",
    url: `/coupons/edit-coupon`,
  },
  {
    icon: <DeleteIcon />,
    label: "Delete",
    url: `/coupons/:id/delete`,
  },
];

export const usersListIcons = [
  {
    icon: <VisibilityIcon />,
    label: "View",
    url: `/users/user-details`,
  },
  {
    icon: <EditIcon />,
    label: "Edit",
    url: `/users/edit-user`,
  },
  {
    icon: <DeleteIcon />,
    label: "Delete",
    url: `/users/:id/delete`,
  },
];

export const ordersColumns = [
  { id: "order_id", label: "id" },
  { id: "user_id", label: "userId" },
  { id: "created_at", label: "date" },
  { id: "payment_status", label: "paymentStatus" },
  { id: "status", label: "status" },
  { id: "total_price", label: "total" },
  { id: "transaction", label: "transaction" },
  { id: "actions", label: "actions" },
];

export const productsColumns = [
  { id: "id", label: "id" },
  { id: "image", label: "image" },
  { id: "brand", label: "brand" },
  { id: "name", label: "name" },
  { id: "category", label: "category" },
  { id: "starting_price", label: "price" },
  { id: "actions", label: "actions" },
];

export const couponsColumns = [
  { id: "id", label: "id" },
  { id: "code", label: "code" },
  { id: "max_usages", label: "maxUsages" },
  { id: "expire_date", label: "expireDate" },
  { id: "type", label: "type" },
  { id: "value", label: "value" },
  { id: "min_order", label: "minOrder" },
  { id: "actions", label: "actions" },
];

export const usersColumns = [
  { id: "id", label: "id" },
  { id: "name", label: "name" },
  { id: "surname", label: "surname" },
  { id: "email", label: "email" },
  { id: "telephone", label: "telephone" },
  { id: "birthDate", label: "birthdate" },
  { id: "actions", label: "actions" },
];
