import RememberMeForm from "./remember-me-form";
import styles from "./ng-nhp.module.css";

const NgNhp = () => {
  return (
    <div className={styles.ngNhp}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-2@2x.png" />
        <div className={styles.phongCchL}>
          Phong cách là cách bạn thể hiện bản thân
        </div>
      </div>
      <RememberMeForm />
    </div>
  );
};

export default NgNhp;
