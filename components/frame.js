import FormContainer1 from "./form-container1";
import styles from "./frame.module.css";

const Frame = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.signIn}>{`Sign in `}</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.signIn1}>{`Sign in `}</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupItem} />
        <div className={styles.alreadyHasAn}>{`Already has an account  `}</div>
      </div>
      <FormContainer1 />
    </div>
  );
};

export default Frame;
