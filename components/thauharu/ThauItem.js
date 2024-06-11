import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./ThauItem.module.css";
import { useState } from "react";

function ThauItem(props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  function showDetailsHandler() {
    setIsLoading(true);
    router.push("/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={isLoading ? classes.loading : classes.actions}>
          <button disabled={isLoading} onClick={showDetailsHandler}>
            {isLoading ? "Loading..." : "Show Details"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ThauItem;
