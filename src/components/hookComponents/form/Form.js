import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import ImageListContainer from "../../functionalComponents/imageList/ImageListContainer";
import { Button } from "../../functionalComponents/button/Button";
import {
  resizeFile,
  checkImageWeight,
  checkFileType,
  checkImageRatio,
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
    // check if at least 3 pictures have been uploaded
    if (state.imagesArray.length < 3) {
      alert(
        t("errorFewPictures1") +
          (3 - state.imagesArray.length) +
          t("errorFewPictures2")
      );
      return;
    } else {
      outputObject = { ...data, imagesArray: state.imagesArray };
      console.log("state.imagesArray:", state.imagesArray);
      console.log("outputObject:", outputObject);
    }

    // reset form fields
  };

  const [state, setState] = useState({
    lan: "en",
    facultativePictures: [],
    imagesArray: [],
    filtereProducts: [],
  });

  useEffect(() => {
    let starterPicturesArray = null;
    props.screenName === "ModifyProduct"
      ? (starterPicturesArray = images)
      : (starterPicturesArray = []);
    setState({
      ...state,
      imagesArray: starterPicturesArray,
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

        {field.type === "select" ? (
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
          field.type !== "image" && (
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
          )
        )}

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
          <form onSubmit={handleSubmit(onSubmit)}>
            {[...props.propsData, ...state.facultativePictures].map(
              mapFormFields
            )}
            {props.products && (
              <>
                <p>{t("searchProductsById")}</p>
                <input
                  type="text"
                  onChange={filterId}
                  className="form-input"
                  placeholder={t("searchHere")}
                />
              </>
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
                  color="success"
                />
              }
            </div>
          </form>
        </>
      }

      {props.abilitatePictures && props.screenName !== "ModifyProduct" && (
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
