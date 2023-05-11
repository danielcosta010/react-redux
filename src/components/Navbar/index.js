import styles from './NavBar.modules.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function Navbar() {
  return (  
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
    </nav>
  );
}

export default Navbar;
