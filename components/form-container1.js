import styles from "./form-container1.module.css";

const FormContainer1 = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.email}>{`Email  `}</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.password}>{`Password `}</div>
        <img className={styles.removeRedEye} alt="" src="/remove-red-eye.svg" />
      </div>
      <div className={styles.groupChild} />
      <div className={styles.email}>{`User name `}</div>
    </div>
  );
};

export default FormContainer1;
