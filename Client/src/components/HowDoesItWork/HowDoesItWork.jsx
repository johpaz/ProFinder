import profesion from "../../assets/categoriesIcons/fontanero.png";
import leer from "../../assets/categoriesIcons/mecanico.png";
import styles from "./HowDoesItWork.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const HowDoesItWork = () => {
  //aqui empiezo el estado local y la logica para el renderizado condicional
   const [showClientSection, setShowClientSection] = useState(false); //section para clientes
  const [showProfesionalSection, setShowProfesionalSection] = useState(false); //section para profesionales
  const [changeViewBtn, setChangeViewBtn] = useState(false); // cambiar el btn segun ..... ver mas o ver menos

  //   const handleChangeClick = () => {
  //     setChangeViewBtn(!changeViewBtn);
  //   };
  //   console.log(changeViewBtn);

  const handleProfesionalClick = () => {
    setShowProfesionalSection(!showProfesionalSection);
    setChangeViewBtn(!changeViewBtn);
  };

  // const handleClientClick = () => {
  //   setShowClientSection(!showClientSection);
  // };

  return (
    <div>
      <section className={styles.sectionMain}>
        <div className={styles.profesionalContainer}>
          <h3>¿ Eres Profesional ?</h3>
          <Link>
            <img src={profesion} alt="imagen de un profesor" />
          </Link>
          <button
            onClick={() => {
              handleProfesionalClick();
            }}
            className={styles.btnViewMore}
          >
            {changeViewBtn ? "Ver Menos" : "Ver Más"}
          </button>
        </div>
        {showProfesionalSection && (
          <div
            className={`${styles.sectionProfesional} ${styles.columnLayout}`}
          >
            {/**falta hacer que este texto se muestre en la parte de abajo de la "card" */}
            <h4 className={styles.textProfesional}>
              aca va toda la informacion para saber como funciona la plataforma
              para un profesional que ofrece sus servicios <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              temporibus dicta voluptatibus distinctio tenetur dolore, itaque
              deleniti possimus magnam culpa nemo vero, sed doloremque
              reiciendis quas maiores harum hic. Illo!
            </h4>
          </div>
        )}
        <div className={styles.clientContainer}>
          <h3>¿ Buscas un Profesional ?</h3>
          <Link>
            <img src={leer} alt="imagen de un cliente" />
          </Link>
          <button
            onClick={() => {
              handleProfesionalClick();
            }}
            className={styles.btnViewMore}
          >
            {changeViewBtn ? "Ver Menos" : "Ver Más"}
          </button>
        </div>
      </section>

      {showClientSection && (
        <div className={styles.sectionClient}>
          <h4>
            aca va toda la informacion de como funciona la plataforma para
            personas que buscan un servicio <br /> <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            iusto quae minus cumque voluptate ipsum, ex pariatur corporis
            repellendus consectetur dolorem ducimus, aut provident culpa
            dignissimos itaque quod ut optio. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus, sequi dolores harum laborum
            unde voluptatum odit perferendis quis nostrum a dolorum commodi, nam
            optio voluptate ducimus reprehenderit eos molestias in!
          </h4>
        </div>
      )}

      <section className={styles.sectionReview}>
        <div className={styles.box}>
          aca va una card con review ya sea de profesionales o de clientes
        </div>
        <div className={styles.box}>
          aca va una card con review ya sea de profesionales o de clientes
        </div>
        <div className={styles.box}>
          aca va una card con review ya sea de profesionales o de clientes
        </div>
        <div className={styles.box}>
          aca va una card con review ya sea de profesionales o de clientes
        </div>
        <div className={styles.box}>
          aca va una card con review ya sea de profesionales o de clientes
        </div>
        <div className={styles.box}>
          aca va una card con review ya sea de profesionales o de clientes
        </div>
        <div className={styles.box}>
          aca va una card con review ya sea de profesionales o de clientes
        </div>
      </section>
    </div>
  );
};
export default HowDoesItWork;
