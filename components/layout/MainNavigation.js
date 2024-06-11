import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Bhet Ghat</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Thauharu</Link>
          </li>
          <li>
            <Link href="/new-thau">Naya Thau Add Garam</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
