import { useState } from "react";
import classes from "./MainNavigation.module.css";
import Link from "next/link";
import SideNavigation from "./sideNavigation";

function MainNavigation() {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  let sideMenuClasses = openSideMenu
    ? classes.side__menu + " " + classes["side__menu--open"]
    : classes.side__menu;
  function handleOpenSideMenu() {
    setOpenSideMenu(true);
  }
  function handleCloseSideMenu() {
    setOpenSideMenu(false);
  }
  function handleSideMenuClick() {
    setOpenSideMenu(false);
  }

  return (
    <header className={classes.header}>
      {openSideMenu && (
        <div className={classes.backdrop} onClick={handleCloseSideMenu}></div>
      )}
      <div className={classes.title}>
        <span
          className={`material-symbols-outlined ${classes.menu}`}
          onClick={handleOpenSideMenu}
        >
          menu
        </span>
        <Link href="/">
          <div className={classes.logo}>Bhet Ghat</div>
        </Link>
      </div>
      <nav className={classes["main-nav"]}>
        <ul>
          <li>
            <Link href="/">Thauharu</Link>
          </li>
          <li>
            <Link href="/new-thau">Naya Thau Add Garam</Link>
          </li>
        </ul>
      </nav>
      <SideNavigation
        onSideMenuClick={handleSideMenuClick}
        className={sideMenuClasses}
      />
    </header>
  );
}

export default MainNavigation;
