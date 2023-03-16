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
    label: "colour", // colore
    type: "text",
    id: "colour",
    name: "colour",
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
    type: "text",
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
    label: "description", // descrizione
    type: "text",
    id: "description",
    name: "description",
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
    label: "image", // immagine
    type: "file", //????
    id: "image",
    name: "image",
    required: true,
  },
  {
    label: "date", // immagine
    type: "date", //????
    id: "date",
    name: "date",
    required: true,
  },
];

export { addProductFormProps };
