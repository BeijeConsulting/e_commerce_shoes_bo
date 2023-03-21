import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ActionsButton from "../components/functionalComponents/actionsButton/ActionsButton";

export const exampleTable = {
  columns: [
    { id: "id", label: "Id" },
    { id: "date", label: "Data" },
    { id: "paymentStatus", label: "Status pagamento" },
    { id: "status", label: "Status" },
    { id: "total", label: "Totale" },
    { id: "quantity", label: "Quantità articoli" },
    { id: "actions", label: "Actions" },
  ],
  rows: [
    {
      id: 1,
      date: "2022-02-28",
      paymentStatus: "Pagato",
      status: "Consegnato",
      total: 105.99,
      quantity: 3,
      actions: (
        <>
          <ActionsButton
            icons={[<DeleteIcon />, <EditIcon />]}
            labels={["Delete", "Edit"]}
          />
        </>
      ),
    },
    {
      id: 2,
      date: "2022-02-26",
      paymentStatus: "In attesa",
      status: "In elaborazione",
      total: 57.5,
      quantity: 1,
      actions: (
        <>
          <ActionsButton
            icons={[<DeleteIcon />, <EditIcon />]}
            labels={["Delete", "Edit"]}
          />
        </>
      ),
    },
    {
      id: 3,
      date: "2022-02-24",
      paymentStatus: "Non pagato",
      status: "Annullato",
      total: 0,
      quantity: 0,
      actions: (
        <>
          <ActionsButton
            icons={[<DeleteIcon />, <EditIcon />]}
            labels={["Delete", "Edit"]}
          />
        </>
      ),
    },
    {
      id: 4,
      date: "2022-02-22",
      paymentStatus: "Pagamento in sospeso",
      status: "In elaborazione",
      total: 45.8,
      quantity: 2,
      actions: "Modifica",
    },
    {
      id: 5,
      date: "2022-02-20",
      paymentStatus: "Pagamento fallito",
      status: "Annullato",
      total: 0,
      quantity: 0,
      actions: "Elimina",
    },
    {
      id: 6,
      date: "2022-02-20",
      paymentStatus: "Pagamento fallito",
      status: "Annullato",
      total: 0,
      quantity: 0,
      actions: "Elimina",
    },
    {
      id: 7,
      date: "2022-02-20",
      paymentStatus: "Pagamento fallito",
      status: "Annullato",
      total: 0,
      quantity: 0,
      actions: "Elimina",
    },
    {
      id: 8,
      date: "2022-02-20",
      paymentStatus: "Pagamento fallito",
      status: "Annullato",
      total: 0,
      quantity: 0,
      actions: "Elimina",
    },
    {
      id: 9,
      date: "2022-02-20",
      paymentStatus: "Pagamento fallito",
      status: "Annullato",
      total: 0,
      quantity: 0,
      actions: "Elimina",
    },
    {
      id: 10,
      date: "2022-02-20",
      paymentStatus: "Pagamento fallito",
      status: "Annullato",
      total: 0,
      quantity: 0,
      actions: "Elimina",
    },
    {
      id: 11,
      date: "2022-02-20",
      paymentStatus: "Pagamento fallito",
      status: "Annullato",
      total: 0,
      quantity: 0,
      actions: "Elimina",
    },
  ],
};
