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
  /*
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
  },*/

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

const addOrderFormProps = [
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
];

const addCouponFormProps = [
  {
    label: "code", //  prezzo
    type: "text",
    id: "code",
    name: "code",
    required: true,
  },
  {
    label: "value",
    type: "number",
    id: "value",
    name: "value",
    required: true,
  },
  {
    label: "maxUsages",
    type: "number",
    id: "maxUsages",
    name: "maxUsages",
    required: true,
  },
  {
    label: "userId",
    type: "number",
    id: "userId",
    name: "userId",
    required: false,
  },
  {
    label: "expireDate",
    type: "date",
    id: "expireDate",
    name: "expireDate",
    required: false,
  },
  {
    label: "type",
    type: "text",
    id: "type",
    name: "type",
    required: true,
  },
  {
    label: "minOrder",
    type: "number",
    id: "minOrder",
    name: "minOrder",
    required: false,
  },
  {
    label: "descriptionIt",
    type: "text",
    id: "description",
    name: "description_it",
    required: false,
  },
  {
    label: "descriptionEn",
    type: "text",
    id: "description",
    name: "description_en",
    required: false,
  },
];

const modifyCouponFormProps = [
  {
    label: "id",
    type: "number",
    id: "id",
    name: "id",
    required: false,
  },
  {
    label: "code", //  prezzo
    type: "text",
    id: "code",
    name: "code",
    required: true,
  },
  {
    label: "maxUsages",
    type: "number",
    id: "maxUsages",
    name: "maxUsages",
    required: true,
  },
  {
    label: "userId",
    type: "number",
    id: "userId",
    name: "userId",
    required: false,
  },
  {
    label: "expireDate",
    type: "date",
    id: "expireDate",
    name: "expireDate",
    required: false,
  },
  {
    label: "type",
    type: "text",
    id: "type",
    name: "type",
    required: true,
  },
  {
    label: "value",
    type: "number",
    id: "value",
    name: "value",
    required: true,
  },
  {
    label: "minOrder",
    type: "number",
    id: "minOrder",
    name: "minOrder",
    required: false,
  },
  {
    label: "descriptionIt",
    type: "text",
    id: "description",
    name: "description_it",
    required: false,
  },
  {
    label: "descriptionEn",
    type: "text",
    id: "description",
    name: "description_en",
    required: false,
  },
];

// PERSONAL AREA

const personalAreaFormProps = [
  {
    label: "name",
    type: "text",
    id: "name",
    name: "name",
    required: false,
  },
  {
    label: "surname",
    type: "text",
    id: "surname",
    name: "surname",
    required: false,
  },
  {
    label: "email",
    type: "text",
    id: "email",
    name: "email",
    required: false,
  },
  {
    label: "password",
    type: "password",
    id: "password",
    name: "password",
    required: false,
  },
  {
    label: "repeatPassword",
    type: "password",
    id: "repeat_password",
    name: "repeat_password",
    required: false,
  },
  {
    label: "birthDate",
    type: "date",
    id: "birthdate",
    name: "birthdate",
    required: false,
  },
  {
    label: "phoneNumber",
    type: "number",
    id: "phone",
    name: "phone",
    required: false,
  },
  {
    label: "country",
    type: "text",
    id: "country",
    name: "country",
    required: false,
  },
  {
    label: "city",
    type: "text",
    id: "city",
    name: "city",
    required: false,
  },
];

const modifyOrderFormProps = [
  {
    label: "id",
    type: "text",
    id: "id",
    name: "id",
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
];

const addUserFormProps = [
  // name, surname, email, password, telephone(optional), birthDate, role

  {
    label: "name",
    type: "text",
    id: "name",
    name: "name",
    required: true,
  },
  {
    label: "surname",
    type: "text",
    id: "surname",
    name: "surname",
    required: true,
  },
  {
    label: "email",
    type: "text",
    id: "email",
    name: "email",
    required: false,
  },
  {
    label: "password",
    type: "password",
    id: "password",
    name: "password",
    required: true,
  },
  {
    label: "telephone",
    type: "text",
    id: "telephone",
    name: "telephone",
    required: false,
  },
  {
    label: "birthDate",
    type: "date",
    id: "birthDate",
    name: "birthDate",
    required: false,
  },
  {
    label: "role",
    type: "select",
    id: "role",
    name: "role",
    required: true,
  },
];

const modifyUserFormProps = [
  {
    label: "id",
    type: "number",
    id: "id",
    name: "id",
    required: true,
  },
  {
    label: "surname",
    type: "text",
    id: "surname",
    name: "surname",
    required: true,
  },
  {
    label: "name",
    type: "text",
    id: "name",
    name: "name",
    required: true,
  },
  {
    label: "telephone",
    type: "text",
    id: "telephone",
    name: "telephone",
    required: false,
  },
  {
    label: "email",
    type: "text",
    id: "email",
    name: "email",
    required: false,
  },
  {
    label: "birthDate",
    type: "date",
    id: "birthDate",
    name: "birthDate",
    required: false,
  },
  {
    label: "role",
    type: "select",
    id: "role",
    name: "role",
    required: true,
  },
];

const modifyProductFormProps = [
  // name, description_it, description_eng, is_listed, color, sizes, images, brand, listedPrice, type, category, id, quantity
  {
    label: "name",
    type: "text",
    id: "name",
    name: "name",
    required: true,
  },
  {
    label: "description_it",
    type: "text",
    id: "description_it",
    name: "description_it",
    required: false,
  },
  {
    label: "description_en",
    type: "text",
    id: "description_en",
    name: "description_en",
    required: false,
  },
  {
    label: "is_listed",
    type: "checkbox",
    id: "is_listed",
    name: "is_listed",
    required: true,
  },
  {
    label: "color",
    type: "text",
    id: "color",
    name: "color",
    required: true,
  },
  {
    label: "sizes",
    type: "text",
    id: "sizes",
    name: "sizes",
    required: true,
  },
  {
    label: "images",
    type: "text",
    id: "images",
    name: "images",
    required: true,
  },
  {
    label: "brand",
    type: "text",
    id: "brand",
    name: "brand",
    required: true,
  },
  {
    label: "listedPrice",
    type: "number",
    id: "listedPrice",
    name: "listedPrice",
    required: true,
  },
  {
    label: "type",
    type: "text",
    id: "type",
    name: "type",
    required: true,
  },
  {
    label: "category",
    type: "text",
    id: "category",
    name: "category",
    required: true,
  },
  {
    label: "id",
    type: "text",
    id: "id",
    name: "id",
    required: true,
  },
  {
    label: "quantity",
    type: "number",
    id: "quantity",
    name: "quantity",
    required: true,
  },
];

export {
  addProductFormProps,
  addDiscountFormProps,
  addUserFormProps,
  addOrderFormProps,
  addCouponFormProps,
  modifyDiscountFormProps,
  modifyCouponFormProps,
  modifyOrderFormProps,
  personalAreaFormProps,
  modifyProductFormProps,
  modifyUserFormProps,
};
