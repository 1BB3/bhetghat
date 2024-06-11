import ThauItem from "./ThauItem";
import classes from "./ThauList.module.css";

function ThauList(props) {
  return (
    <ul className={classes.list}>
      {props.thauharu.map((thau) => (
        <ThauItem
          key={thau.id}
          id={thau.id}
          image={thau.image}
          title={thau.title}
          address={thau.address}
        />
      ))}
    </ul>
  );
}

export default ThauList;
