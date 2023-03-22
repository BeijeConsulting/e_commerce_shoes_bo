import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ClearIcon from "@mui/icons-material/Clear";
import emptyImage from "../../../assets/images/emptyImage/emptyImage.jpg";

export default function ImageListContainer(props) {
  console.log("PROPS:", props);

  function callbackButton() {
    props.callbackButtonAdd();
  }

  function removeImg(index) {
    console.log("INDEX removeImg:", index);
    let array = props.imagesData;
    array.splice(index, 1);
    props.setImagesData({ ...props.state, array });
  }

  return (
    <ImageList
      sx={{ width: 500, height: 450, position: "relative" }}
      cols={3}
      rowHeight={164}
    >
      {itemData.map((item, index) => (
        <ImageListItem key={Math.random()}>
          <button onClick={callbackButton}>ADD</button>
          {/* <p style={{ position: "absolute" }}>BOTTONE AGGIUNGI</p> */}
          <input
            type="file"
            id="file-ip-1"
            accept="image/*"
            onChange={(event) => props.showPreview(event, index)}
            style={{
              position: "absolute",
              zIndex: "1",
              top: "70px",
              left: "70px",
            }}
          />
          {props.imagesData[index] && (
            <div onClick={() => removeImg(index)}>
              <ClearIcon
                style={{ position: "absolute", right: "0", cursor: "pointer" }}
              />
            </div>
          )}

          {!props.imagesData[index] && (
            <img
              src={`${emptyImage}`}
              style={{ width: "100%", height: "100%" }}
              alt=""
              loading="lazy"
            />
          )}

          <img
            src={`${props.imagesData[index]}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${props.imagesData[index]}`}
            alt={""}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
