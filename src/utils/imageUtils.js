function encodeImageBase64(e) {
  // check max. file size is not exceeded
  // size is in bytes
  if (e.target.files[0].size > 2000000) {
    console.log("File too large");
    return;
  }
  let reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);

  reader.onload = () => {
    console.log(reader.result); //base64encoded string
  };
  reader.onerror = (error) => {
    console.log("Error: ", error);
  };

  return reader.result;
}

function decodeImageBase64(imageString) {
  let src = "`data:image/jpeg;base64,${" + imageString + "}`";
  return src;
}

export { encodeImageBase64, decodeImageBase64 };
