// check standard
const checkTextInput = {
  required: "This input is required.",
  minLength: {
    value: 11,
    message: "This input must exceed 10 characters",
  },
};
// inputs
const addProductFormProps = [
  {
    label: "name", // prodotto
    type: "text",
    id: "product",
    name: "name",
    required: true,
    errors: checkTextInput,
  },
  {
    label: "brand", // marca
    type: "text",
    id: "brand",
    name: "brand",
    required: true,
  },
  {
    label: "color", // colore
    type: "text",
    id: "colur",
    name: "color",
    required: true,
  },
  {
    label: "size", // taglia
    type: "number",
    id: "size",
    name: "size",
    required: true,
  },
  {
    label: "price", //  prezzo
    type: "number",
    id: "price",
    name: "price",
    required: true,
  },
  {
    label: "quantity", // quantità
    type: "number",
    id: "quantity",
    name: "quantity",
    required: true,
  },
  {
    label: "type", // tipo
    type: "text",
    id: "type",
    name: "type",
    required: true,
  },
  {
    label: "description", // descrizione it
    type: "text",
    id: "description_it",
    name: "description_it",
    required: true,
  },
  {
    label: "description", // descrizione en
    type: "text",
    id: "description_en",
    name: "description_en",
    required: true,
  },
  {
    label: "category", // categoria
    type: "text",
    id: "category",
    name: "category",
    required: true,
  },
  {
    label: "listed", // in vendita ?
    type: "number",
    id: "is_listed",
    name: "is_listed",
    required: true,
  },
  {
    label: "image", // immagine
    type: "file", //????
    id: "image_1",
    name: "image_1",
    required: false,
    accept: "image/jpeg",
  },
  {
    label: "image", // immagine
    type: "file", //????
    id: "image_2",
    name: "image_2",
    required: false,
    accept: "image/png, image/jpeg",
  },
  {
    label: "image", // immagine
    type: "file", //????
    id: "image_3",
    name: "image_3",
    required: false,
    accept: "image/png, image/jpeg",
  },

  /*{
    label: "date", // immagine
    type: "date", //????
    id: "date",
    name: "date",
    required: true,
  },*/
];

const addDiscountFormProps = [
  {
    label: "value", //  prezzo
    type: "number",
    id: "value",
    name: "value",
    required: true,
  },
  {
    label: "expireDate", // quantità
    type: "date",
    id: "expireDate",
    name: "expireDate",
    required: true,
  },
];

const modifyDiscountFormProps = [
  {
    label: "value", //  prezzo
    type: "number",
    id: "value",
    name: "value",
    required: true,
  },
  {
    label: "expireDate", // quantità
    type: "date",
    id: "expireDate",
    name: "expireDate",
    required: true,
  },
];

const addOrdertFormProps = [
  {
    label: "name",
    type: "text",
    id: "name",
    name: "name",
    required: true,
    errors: checkTextInput,
  },
  {
    label: "status",
    type: "text",
    id: "status",
    name: "status",
    required: true,
    errors: checkTextInput,
  },
  {
    label: "paymentStatus",
    type: "text",
    id: "paymentStatus",
    name: "paymentStatus",
    required: true,
    errors: checkTextInput,
  },
  {
    label: "userId",
    type: "number",
    id: "userId",
    name: "userId",
    required: true,
  },
  {
    label: "transaction", //  prezzo
    type: "number",
    id: "transaction",
    name: "transaction",
    required: true,
  },
  {
    name: "addOrder",
  },
];

export {
  addProductFormProps,
  addDiscountFormProps,
  modifyDiscountFormProps,
  addOrdertFormProps,
};
