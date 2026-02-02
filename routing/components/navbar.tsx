import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        MyApp
      </div>

      <ul className={styles.links}>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
      </ul>

      <button className={styles.button}>
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
