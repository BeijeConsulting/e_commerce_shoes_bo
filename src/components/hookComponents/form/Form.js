import React, { useState, useEffect } from "react";
import { changeLanguage } from "../../../utils/languageUtils";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CardImg from "../../functionalComponents/cardImg/CardImg";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import EmptyImage from "../../../assets/images/emptyImage/emptyImage.jpg";

function Form(props) {
  const { t, i18n } = useTranslation();
  const refImg = useRef(null);

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);
  const image6Ref = useRef(null);
  const image7Ref = useRef(null);
  const image8Ref = useRef(null);
  const image9Ref = useRef(null);
  const image10Ref = useRef(null);

  const arrayReferences = [
    image1Ref,
    image2Ref,
    image3Ref,
    image4Ref,
    image5Ref,
    image6Ref,
    image7Ref,
    image8Ref,
    image9Ref,
    image10Ref,
  ];

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [state, setState] = useState({
    lan: "en",
    facultativePictures: [],
  });

  function addImage() {
    let facPictures = state.facultativePictures;
    if (facPictures.length > 6) {
      alert("You can maximum insert 10 pictures.");
      return;
    }
    facPictures.push({
      label: "image", // immagine
      type: "file",
      id: "image_" + (facPictures.length + 4),
      name: "image_" + (facPictures.length + 4),
      required: true,
      accept: "image/png, image/jpeg",
    });
    console.log("facPictures:", facPictures);
    setState({
      ...state,
      facultativePictures: facPictures,
    });
  }

  function removeImage() {
    let facPictures = state.facultativePictures;
    if (facPictures.length !== 0) {
      facPictures.pop(); // remove one pictures from the facultatives
    }
    setState({
      ...state,
      facultativePictures: facPictures,
    });
  }

  function checkPictureSizes(event) {
    let areSizesGood = true;
    const selectedPicture = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedPicture);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        if (img.width >= 1000 && img.height >= 1000) {
          console.log(img.width, img.height);
          areSizesGood = false;
          console.log(selectedPicture.name);
          console.log("areSizesGood", areSizesGood);
          alert("The picture is too big");
          event.target.value = null;
          return areSizesGood;
        }
      };
    };
    return areSizesGood;
  }

  function checkInputType(event, imageId) {
    let dataType = event.target.files[0]?.type;
    console.log("event.target.files[0]", event.target.files[0]);
    if (checkPictureSizes(event) === false) {
      return;
    }
    if (dataType && dataType !== "image/png" && dataType !== "image/jpeg") {
      alert("You can insert only JPG or PNG file");
      event.target.value = null;
      return;
    } else {
      showPreview(event, imageId);
    }
  }

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
          accept={field.accept}
          //onChange={field.accept ? checkInputType : null}
          onChange={
            field.accept ? (event) => checkInputType(event, field.id) : null
          }
        />
        {
          <ErrorMessage
            errors={errors}
            name={field.name}
            render={({ message }) => <p>{message}</p>}
          />
        }
        {field.accept && (
          /*<CardImg
            width={{ width: 150 }}
            height={{ height: 140 }}
            id={field.id + "-preview"}
            title="image"
            ref={arrayReferences[parseInt(field.id.substring(6)) - 1]}
            imageSrc={EmptyImage} // style={{ width: "100%", marginRight: "400px" }}
          />*/
          <img
            id={field.id + "-preview"}
            alt="shoe"
            ref={arrayReferences[parseInt(field.id.substring(6)) - 1]}
            src={EmptyImage}
          />
        )}
        <br />
      </div>
    );
  }

  function setStateLanguage() {
    setState({
      lan: changeLanguage(i18n, state),
    });
  }

  function showPreview(event, imageId) {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = arrayReferences[parseInt(imageId.substring(6)) - 1].current;
      preview.src = src;
      preview.style.display = "block";
    }
  }

  return (
    <>
      <button onClick={setStateLanguage}>LANGUAGE</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        {[...props.propsData, ...state.facultativePictures].map(mapFormFields)}

        <label htmlFor="file-ip-1">Upload Image</label>
        <input
          type="file"
          id="file-ip-1"
          accept="image/*"
          onChange={showPreview}
        />

        <input type="submit" />
      </form>
      {props.abilitatePictures && (
        <button onClick={addImage}>Aggiungi Immagini</button>
      )}
      {props.abilitatePictures && (
        <button onClick={removeImage}>Rimuovi Immagini</button>
      )}
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
        {/*
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
        />*/}
      </div>
    </>
  );
}

export default Form;
