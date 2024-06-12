import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewThauForm.module.css";

function NewThauForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const thauData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddThau(thauData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            placeholder="Thau Title"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            placeholder="Input image link (eg. https://xxxxx/xxx.jpeg)"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            placeholder="Thau Address"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
            placeholder="Some info about the thau."
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button disabled={props.isAdding}>
            {props.isAdding ? "Adding..." : "Add Thau"}
          </button>
        </div>
      </form>
    </Card>
  );
}

export default NewThauForm;
