import Link from "next/link";

export default function SideNavigation({
  className: sideMenuClasses,
  onSideMenuClick,
}) {
  return (
    <ul onClick={onSideMenuClick} className={sideMenuClasses}>
      <li>
        <Link href="/">Thauharu</Link>
      </li>
      <li onClick={onSideMenuClick}>
        <Link href="/new-thau">Naya Thau Add Garam</Link>
      </li>
    </ul>
  );
}
