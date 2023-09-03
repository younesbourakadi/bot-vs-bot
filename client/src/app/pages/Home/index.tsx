// client/pages/index.tsx
import React from 'react';
import styles from './styles.module.scss'; // Importez le fichier SCSS

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Bot vs. Bot</h1>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Accueil</a></li>
            <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Tournois</a></li>
            <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Parties</a></li>
            <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Engines</a></li>
            <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Connexion</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2 className={styles.hero__title}>Bienvenue sur notre application d'organisation de tournois d'échecs !</h2>
          <p className={styles.hero__text}>Rejoignez des tournois, jouez contre des engines, et améliorez vos compétences aux échecs.</p>
          <a href="#" className={styles.hero__button}>Inscrivez-vous</a>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <h3 className={styles.feature__title}>Tournois en Ligne</h3>
            <p className={styles.feature__text}>Participez à des tournois d'échecs en ligne et mesurez-vous à d'autres joueurs.</p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.feature__title}>Engines Puissants</h3>
            <p className={styles.feature__text}>Découvrez une sélection d'engines d'échecs puissants pour améliorer vos compétences.</p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.feature__title}>Statistiques et Classements</h3>
            <p className={styles.feature__text}>Suivez vos performances, consultez des statistiques détaillées, et grimpez dans les classements.</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footer__copyright}>&copy; 2023 Bot vs. Bot</p>
      </footer>
    </div>
  );
};

export default Home;

