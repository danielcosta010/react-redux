import NavBar from 'components/Navbar'
import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss'
import Footer from 'components/Footer';

function PaginaPadrao() {
  return ( 
    <div className={styles.container}>
     <NavBar />
     <div className={styles['container-outlet']}>
      <Outlet />
     </div>
     <Footer />
    </div>
  );
}

export default PaginaPadrao;