import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import ImageListContainer from "../../functionalComponents/imageList/ImageListContainer";
import { Button } from "../../functionalComponents/button/Button";
import InputPassword from "../../functionalComponents/inputPassword/InputPassword";
import {
  resizeFile,
  checkImageWeight,
  checkFileType,
  checkImageRatio,
  convertArrayImages,
} from "../../../utils/imageUtils";
import "./form.css";

function Form(props) {
  const { t, i18n } = useTranslation();
  const refImg = useRef(null);
  //-----------------------------------------------------------------
  const image1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
  let images = [image1, image1, image1, image1, image1, image1];

  //_-------------------------------------------------

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
    //console.log("data:", data);
    let outputObject = null;
    let response = null;
    // check if at least 3 pictures have been uploaded
    if (state.imagesArray.length < 3 && props.abilitatePictures) {
      alert(
        t("errorFewPictures1") +
          (3 - state.imagesArray.length) +
          t("errorFewPictures2")
        // test
      );
      return;
    } else {
      let convertedImagesArray = convertArrayImages(state.imagesArray);
      outputObject = { ...data, productImages: convertedImagesArray };
      console.log("state.imagesArray:", convertedImagesArray);
      console.log("outputObject:", outputObject);

      if (props.addProductAuth) {
        response = props.addProductAuth(outputObject);
      }
      if (props.editProductByIdAuth) {
        response = props.editProductByIdAuth(outputObject);
      }
      console.log("RESPONSE:", response);
      if (response.status === 200) {
        alert("Product added successfully");
        window.location.href = "/products";
      } else {
        alert("Error adding product");
      }
    }

    // props.addProductAuth(outputObject);
    // reset form fields
  };

  const [state, setState] = useState({
    lan: "en",
    facultativePictures: [],
    imagesArray: [],
    filtereProducts: [],
    productDetails: [],
  });

  useEffect(() => {
    let starterPicturesArray = null;
    props.screenName === "ModifyProduct"
      ? (starterPicturesArray = images)
      : (starterPicturesArray = []);
    setState({
      ...state,
      imagesArray: starterPicturesArray,
      productDetails: props.propsProductDetails,
    });
  }, []);

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

  function mapOptionValues() {
    return props?.optionValues?.map((option, key) => (
      <option key={key} value={option.value}>
        {option.label}
      </option>
    ));
  }

  function mapFormFields(field) {
    return (
      <div className="form-group-container" key={Math.random()}>
        <label htmlFor={field.id}>{t(field.label)}</label>
        {/* <br /> */}

        {/* {field.type === "select" ? (
          <select
            {...register(field.name, field.errors)}
            id={field.id}
            name={field.name}
            required={field.required}
            className="form-input"
          >
            {mapOptionValues()}
          </select>
        ) : (
          <input
            {...register(field.name, field.errors)}
            type={field.type}
            id={field.id}
            name={field.name}
            accept={field.accept}
            required={field.required}
            defaultValue={field.defaultValue}
            placeholder={field.placeholder}
            //onChange={field.accept ? checkInputType : null}
            onChange={field.accept ? checkInputType : null}
            className="form-input"
          />
        )} */}

        {field.type !== "select" && field.type !== "password" && (
          <input
            {...register(field.name, field.errors)}
            type={field.type}
            id={field.id}
            name={field.name}
            accept={field.accept}
            required={field.required}
            defaultValue={field.defaultValue}
            placeholder={field.placeholder}
            //onChange={field.accept ? checkInputType : null}
            onChange={field.accept ? checkInputType : null}
            className="form-input"
          />
        )}

        {field.type === "select" && (
          <select
            {...register(field.name, field.errors)}
            id={field.id}
            name={field.name}
            required={field.required}
            className="form-input"
          >
            {mapOptionValues()}
          </select>
        )}

        {field.type === "password" && (
          <InputPassword field={field} register={register} />
          // <input
          //   {...register(field.name, field.errors)}
          //   type={field.type}
          //   id={field.id}
          //   name={field.name}
          //   accept={field.accept}
          //   required={field.required}
          //   defaultValue={field.defaultValue}
          //   placeholder={field.placeholder}
          //   //onChange={field.accept ? checkInputType : null}
          //   onChange={field.accept ? checkInputType : null}
          //   className="form-input"
          // />
        )}

        {
          <ErrorMessage
            errors={errors}
            name={field.name}
            render={({ message }) => (
              <p className="form-error-message">{message}</p>
            )}
          />
        }
        <br />
      </div>
    );
  }

  const showPreview = async (event, imageId) => {
    if (event.target.files.length > 0) {
      let isImageRatioAcceptable = await checkImageRatio(event.target.files[0]);
      let isImageWeightAcceptable = checkImageWeight(event.target.files[0]);
      let isFileTypeAcceptable = checkFileType(event.target.files[0]);
      // check if the picture is too heavy
      if (
        !isImageWeightAcceptable ||
        !isFileTypeAcceptable ||
        !isImageRatioAcceptable
      ) {
        if (!isFileTypeAcceptable) {
          alert(t("errorWrongFileType"));
        } else if (!isImageWeightAcceptable) {
          alert(t("errorHeavyImage"));
        } else if (!isImageRatioAcceptable) {
          alert(t("errorRatio"));
        } else {
          alert(t("errorTryAgain"));
        }

        event.target.value = null;
        return;
      }

      let imgArray = state.imagesArray;

      try {
        imgArray[imageId] = await resizeFile(event.target.files[0]);

        setState({
          ...state,
          imagesArray: imgArray,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  function mapProducts(products) {
    return products?.map((product) => {
      return (
        <div key={product.id}>
          <label htmlFor={product.id}>{product.name}</label>
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

  function addProductDetails() {
    let productDetailsArray = state.productDetails;
    console.log("productDetailsArray IN THE START ", productDetailsArray);
    console.log("PROPS.PRODUCTDETAILS IN THE START ", props.productDetails);
    productDetailsArray = [...productDetailsArray, ...props.productDetails];
    //productDetailsArray.push(props.productDetails);
    console.log("productDetailsArray!!!!!!!!!!!!!!!!! ", productDetailsArray);

    setState({
      ...state,
      productDetails: productDetailsArray,
    });
  }

  function filterId(event) {
    let shoe = props?.products?.filter((product) => {
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
          <form
            onSubmit={handleSubmit(props.onSubmit ? props.onSubmit : onSubmit)}
          >
            {state.productDetails !== [] &&
              props.productDetails &&
              [
                ...props.propsData,
                ...state.productDetails,
                ...state.facultativePictures,
              ].map(mapFormFields)}
            {state.productDetails === [] &&
              props.productDetails &&
              [...props.propsData, ...state.facultativePictures].map(
                mapFormFields
              )}

            {props.productDetails && (
              <input
                type="button"
                onClick={addProductDetails}
                value="Add product details"
              />
            )}

            {props.products && (
              <div>
                <p>{t("searchProductsById")}</p>
                <input
                  type="text"
                  onChange={filterId}
                  className="form-input"
                  placeholder={t("searchProduct")}
                />
              </div>
            )}

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
                  color={props.buttonColor ? props.buttonColor : "success"}
                />
              }
            </div>
          </form>
        </>
      }

      {props.abilitatePictures && props.screenName !== "ModifyProduct" && (
        <>
          {/*<h5>NAME SCREEN: {props.screenName}</h5>*/}
          <ImageListContainer
            imagesData={state.imagesArray}
            state={state}
            setImagesData={setState}
            showPreview={showPreview}
          />
        </>
      )}

      {props.abilitatePictures && props.screenName === "ModifyProduct" && (
        <>
          <h5>NAME SCREEN: {props.screenName}</h5>
          <ImageListContainer
            imagesData={state.imagesArray}
            state={state}
            setImagesData={setState}
            showPreview={showPreview}
          />
        </>
      )}
    </div>
  );
}
export default Form;
