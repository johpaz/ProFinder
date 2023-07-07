import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.css';
import logoCarpintero from '../../assets/categoriesIcons/carpintero.png';
import logoElectricista from '../../assets/categoriesIcons/electricista.png';
import logoFontanero from '../../assets/categoriesIcons/fontanero.png';
import logoMecanico from '../../assets/categoriesIcons/mecanico.png';
import logoObrero from '../../assets/categoriesIcons/obrero.png';
import logoPanadero from '../../assets/categoriesIcons/panadero.png';
import logoPeluquero from '../../assets/categoriesIcons/peluquero.png';
import logoSoldador from '../../assets/categoriesIcons/soldador.png';

const categoryNames = [
  "Carpintero",
  "Electricista",
  "Fontanero",
  "Mecánico",
  "Obrero",
  "Panadero",
  "Peluquero",
  "Soldador"
];

const categoryLogos = [
  logoCarpintero,
  logoElectricista,
  logoFontanero,
  logoMecanico,
  logoObrero,
  logoPanadero,
  logoPeluquero,
  logoSoldador
];

const HomePage = () => {
  return (
    <div>
      <section className={`${styles.howItWorks} ${styles.fullHeight}`}>
        <div className={styles.howItWorksHeader}>
          <h2 className={styles.howItWorksTitle}>Cómo funciona?</h2>
          <p className={styles.howItWorksText}>Este sitio es un nexo entre problemas y soluciones. Tienes una necesidad, contactas con quien pueda solucionar y listo! Problema resuelto!!</p>
          <p className={styles.howItWorksText}>Muchos profesionales nos eligen para postular sus servicios, al igual que muchos clientes satisfechos por el uso de nuestra plataforma.</p>
        </div>
        
        <div className={styles.instructionUser}>
          <h2>Buscando Servicios:</h2>
          <ul className={styles.instructionList}>
            <li>1-Regístrate!</li>
            <li>2-Busca tu necesidad!</li>
            <li>3-Contacta con el servicio</li>
            <li>4-Concreta tu visita o solución!!</li>
            <li>5-Califica y recomienda a la persona que cubrió tu necesidad!</li>
            <p>Inscribite <button>AQUI!</button></p>
          </ul>
        </div>

        <div className={styles.instructionSupplier}>
          <h2>Ofreciendo servicios:</h2>
          <ul className={styles.instructionList}>
            <li>1-Regístrate!</li>
            <li>2-Publica tu servicio</li>
            <li>3-Espera a que te contacten mediante la plataforma</li>
            <li>4-Concreta tu visita o solución!!</li>
            <li>No olvides que la suscripción premium tiene sus beneficios!!! ;)</li>
            <p>Inscribite <button>AQUI!</button></p>
          </ul>
        </div>

        <p>Introducción al sitio. Qué ofrece y para qué sirve</p>
        <br />

        <p>Esta sección es clave, ya que invita al usuario a usar la plataforma</p>
      </section>

      <section className={`${styles.publicOpinion} ${styles.fullHeight}`}>
        <h2>OPINION CLIENTES</h2>
        <p>Brevesopiniones sobre usuarios que recomiendan el sitio, cómo fue su experiencia en él, etc.</p>
      </section>

      <section className={`${styles.Categories} ${styles.fullHeight}`}>
        <h2>CATEGORIAS</h2>

        <div className={styles.categoryLabels}>
          {categoryNames.map((category, index) => (
            <NavLink
              to={`#`} // Reemplaza la ruta con la ruta correcta ///category/${category}
              key={index}
              className={styles.categoryItem}
              activeclassname={styles.active} // Agrega estilos para el enlace activo si lo deseas
            >
              <img src={categoryLogos[index]} alt={category} className={styles.logo} />
              <p>{category}</p>
            </NavLink>
          ))}
        </div>
      </section>

      <section className={`${styles.serviceOffers} ${styles.fullHeight}`}>
        <h2>Render de profesionales recomendados a modo de introducción.</h2>
        <p>Card con nombre, breve descripción que el servicio ofrece</p>
      </section>
    </div>
  );
};

export default HomePage;