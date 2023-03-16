import React, { useState } from "react";
import { addProductFormProps } from "../../../utils/formUtils";
import { changeLanguage } from "../../../utils/languageUtils";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import CardImg from "../../functionalComponents/cardImg/CardImg";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

function Form(props) {
  const { t, i18n } = useTranslation();
  const refImg = useRef(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [state, setState] = useState({
    lan: "en",
  });

  function mapFormFields(field) {
    return (
      <div key={Math.random()}>
        <label htmlFor={field.id}>{t(field.label)}</label>
        <br />

        <input
          {...register(field.name, field.errors)}
          type={field.type}
          id={field.id}
          name={field.name}
          // required={field.required}
        />
        {
          <ErrorMessage
            errors={errors}
            name={field.name}
            render={({ message }) => <p>{message}</p>}
          />
        }
        <br />
      </div>
    );
  }

  function setStateLanguage() {
    setState({
      lan: changeLanguage(i18n, state),
    });
  }

  function showPreview(event) {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = refImg.current;
      preview.src = src;
      preview.style.display = "block";
    }
  }

  return (
    <>
      <button onClick={setStateLanguage}>LANGUAGE</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        {addProductFormProps.map(mapFormFields)}

        <label htmlFor="file-ip-1">Upload Image</label>
        <input
          type="file"
          id="file-ip-1"
          accept="image/*"
          onChange={showPreview}
        />

        <input type="submit" />
      </form>
      <div className="preview">
        <img id="file-ip-1-preview" alt="shoe" ref={refImg} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <CardImg
          width={{ width: 150 }}
          height={{ height: 140 }}
          title="green iguana"
          imageSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
          // style={{ width: "100%", marginRight: "400px" }}
        />
        <CardImg
          width={{ width: 150 }}
          height={{ height: 140 }}
          title="green iguana"
          imageSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
          // style={{ width: "100%", marginRight: "400px" }}
        />
        <CardImg
          width={{ width: 350 }}
          height={{ height: 140 }}
          title="green iguana"
          imageSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
          // style={{ width: "100%", marginRight: "400px" }}
        />
      </div>
    </>
  );
}

export default Form;
