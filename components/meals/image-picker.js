"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [imagePicked, setImagePicked] = useState();
  const imageInputRef = useRef();

  function handlePickClic() {
    imageInputRef.current.click();
  }

  function handleInputChange(event) {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    if (!file) {
      // setImagePicked(null);
      return;
    }

    fileReader.onload = () => {
      setImagePicked(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={handleInputChange}
        />
        <div className={classes.preview}>
          {imagePicked ? (
            <Image src={imagePicked} alt="The image that user chose." fill />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <button
          type="button"
          className={classes.button}
          onClick={handlePickClic}
        >
          {imagePicked ? "Change the Image" : "Pick an Image"}
        </button>
        {imagePicked && (
          <button
            type="button"
            className={classes.button}
            onClick={() => setImagePicked(null)}
          >
            Remove Image
          </button>
        )}
      </div>
    </div>
  );
}
