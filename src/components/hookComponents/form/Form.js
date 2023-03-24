import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import ImageListContainer from "../../functionalComponents/imageList/ImageListContainer";
import { Button } from "../../functionalComponents/button/Button";
import "./form.css";

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

  const onSubmit = (data) => {
    console.log("data:", data);
    const outputObject = { ...data, imagesArray: state.imagesArray };
    console.log("outputObject:", outputObject);
    // reset form fields
  };

  const [state, setState] = useState({
    lan: "en",
    facultativePictures: [],
    imagesArray: [],
    filtereProducts: [],
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
    let imgArray = state.imagesArray;
    if (facPictures.length !== 0) {
      facPictures.pop(); // remove one pictures from the facultatives
      imgArray[3 + facPictures.length] = "";
    }
    setState({
      ...state,
      facultativePictures: facPictures,
      imagesArray: imgArray,
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
      <div className="form-group-container" key={Math.random()}>
        <label htmlFor={field.id}>{t(field.label)}</label>
        {/* <br /> */}

        <input
          {...register(field.name, field.errors)}
          type={field.type}
          id={field.id}
          name={field.name}
          accept={field.accept}
          required={field.required}
          defaultValue={field.defaultValue}
          //onChange={field.accept ? checkInputType : null}
          onChange={field.accept ? checkInputType : null}
          className="form-input"
        />
        {
          <ErrorMessage
            errors={errors}
            name={field.name}
            render={({ message }) => <p>{message}</p>}
          />
        }
        {/*field.accept && (
          /*<CardImg
            width={{ width: 150 }}
            height={{ height: 140 }}
            id={field.id + "-preview"}
            title="image"
            ref={arrayReferences[parseInt(field.id.substring(6)) - 1]}
            imageSrc={EmptyImage} // style={{ width: "100%", marginRight: "400px" }}
          />
          <img
            id={field.id + "-preview"}
            alt="shoe"
            ref={arrayReferences[parseInt(field.id.substring(6)) - 1]}
            src={EmptyImage}
          />
        )*/}
        <br />
      </div>
    );
  }

  function showPreview(event, imageId) {
    if (event.target.files.length > 0) {
      let imgArray = state.imagesArray;
      // imgArray[parseInt(imageId.substring(6)) - 1] = URL.createObjectURL(
      //   event.target.files[0]
      // );
      imgArray[imageId] = URL.createObjectURL(event.target.files[0]);
      console.log(" event.target.files[0] :", event.target.files[0]);
      console.log("URL.create...", URL.createObjectURL(event.target.files[0]));
      //var src = URL.createObjectURL(event.target.files[0]);
      //var preview = arrayReferences[parseInt(imageId.substring(6)) - 1].current;
      //preview.src = src;
      //preview.style.display = "block";
      setState({
        ...state,
        imagesArray: imgArray,
      });
    }
  }

  /*function testSubmitForm(event) {
    event.preventDefault();
    console.log("testSubmitForm");
    console.log("event.target.files[0]", event.target.name.value);
    console.log("event.target.files[0]", event.target.file.value);
  }*/

  function mapProducts(products) {
    return products?.map((product) => {
      return (
        <div key={product.id}>
          <label htmlFor={product.id}>{t(product.name)}</label>
          {/* <br /> */}
          <input
            {...register(product.name, product.errors)}
            type="checkbox"
            id={product.id}
            name={product.name}
          />
        </div>
      );
    });
  }
  function filterId(event) {
    let shoe = props.products.filter((product) => {
      return String(product.id).includes(event.target.value);
    });
    if (event.target.value === "") {
      shoe = null;
    }
    setState({
      ...state,
      filtereProducts: shoe,
    });
  }
  return (
    <div className="form">
      {
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            {[...props.propsData, ...state.facultativePictures].map(
              mapFormFields
            )}
            <p>Search products</p>
            <input
              type="text"
              onChange={filterId}
              className="form-input"
              placeholder={t("searchProducts")}
            />
            {state.filtereProducts && (
              <div className="shoeListWrapper">
                {mapProducts(state.filtereProducts)}
              </div>
            )}
            <div className="addOrderFormButton">
              {
                <Button
                  type="submit"
                  title={props.buttonTitle}
                  color="success"
                />
              }
            </div>
            {/*} {props.arrayAddresses && map()}*/}
            {/* {<input type="submit" value={props.buttonTitle}></input>} */}
          </form>
          {/* <form onSubmit={testSubmitForm}>
            <input id="file" type="file" name="file" />
            <input id="name" name="name"></input>
            <input type="submit" label="Invia qui" name="Invia" />
          </form> */}
        </>
      }

      {props.abilitatePictures && (
        <button onClick={addImage}>Aggiungi Immagini</button>
      )}
      {props.abilitatePictures && (
        <button onClick={removeImage}>Rimuovi Immagini</button>
      )}
      {props.abilitatePictures && (
        <ImageListContainer
          imagesData={state.imagesArray}
          state={state}
          setImagesData={setState}
          showPreview={showPreview}
          // callbackButtonAdd={addImageCata}
        />
      )}
    </div>
  );
}

export default Form;

// const imageListData = [
//   { image: 'path/to/image1.jpg', ref: myRef1 },
//   { image: 'path/to/image2.jpg', ref: myRef2 },
//   { image: 'path/to/image3.jpg', ref: myRef3 },
//   //...
// ];
