import NavList from "./NavList";
import CartIcon from "./CartIcon";
import ProfileIcon from "./ProfileIcon";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-nav"]}>
        <h2>sneakers</h2>
        <NavList />
      </div>
      <div className={styles["header-icons"]}>
        <CartIcon />
        <ProfileIcon />
      </div>
    </header>
  );
};

export default Header;
