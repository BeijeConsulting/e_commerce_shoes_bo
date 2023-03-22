import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/servicesProducts";
import LanguageSelector from "../components/functionalComponents/languageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";

function ProductDetails() {
  const { i18n } = useTranslation();
  const [state, setState] = useState({
    product: null,
  });
  const language = i18n.language;

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getProductById(id, language);
      console.log("RESPONSE:", response.data);
      setState({ ...state, product: response.data });
    }
    getResources();
  }, [language]);

  return (
    <div>
      <LanguageSelector />
      <h1>LANGUAGE: {language}</h1>
    </div>
  );
}

export default ProductDetails;
