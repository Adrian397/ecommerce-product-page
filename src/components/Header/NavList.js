import styles from "./NavList.module.css";

const NavList = () => {
  return (
    <ul className={styles.ul}>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
};

export default NavList;
