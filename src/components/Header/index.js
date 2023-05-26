import styles from './Header.module.scss';

function Header({ titulo, descricao, className = '', imagem }) {
  return ( 
    <header className={`${styles.header} ${className}`}>
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div className={styles['imagem-header']}>
        <img 
          alt={titulo}
          src={imagem}
        />
      </div>
    </header>
  );
}

export default Header;