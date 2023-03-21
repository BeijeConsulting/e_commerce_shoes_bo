import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PersonIcon from "@mui/icons-material/Person";

const sidebarConfig = {
  admin: [
    {
      label: "Dashboard",
      link: "/dashboard",
      icon: <HomeIcon />,
    },
    {
      label: "Gestione prodotti",
      link: "/products",
      icon: <LocalMallIcon />,
    },
    {
      label: "Gestione utenti",
      link: "/users",
      icon: <GroupsIcon />,
    },
    {
      label: "Gestione coupon",
      link: "/coupons",
      icon: <ConfirmationNumberIcon />,
    },
    {
      label: "Gestione ordini",
      link: "/orders",
      icon: <ShoppingCartIcon />,
    },
    {
      label: "Area personale",
      link: "/personal-area",
      icon: <PersonIcon />,
    },
  ],
  data_entry: [
    {
      label: "Gestione prodotti",
      link: "/products",
      icon: <LocalMallIcon />,
    },
    {
      label: "Gestione ordini",
      link: "/orders",
      icon: <ShoppingCartIcon />,
    },
    {
      label: "Area personale",
      link: "/personal-area",
      icon: <PersonIcon />,
    },
  ],
  marketing: [
    {
      label: "Gestione coupon",
      link: "/coupons",
      icon: <ConfirmationNumberIcon />,
    },
    {
      label: "Area personale",
      link: "/personal-area",
      icon: <PersonIcon />,
    },
  ],
};

export { sidebarConfig };
