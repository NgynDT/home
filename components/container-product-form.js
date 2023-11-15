import { useMemo } from "react";
import styles from "./container-product-form.module.css";

const ContainerProductForm = ({ imageDimensions, propZIndex, propWidth }) => {
  const itemProductsStyle = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  const lINEBOXYRAGLANStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.itemProducts} style={itemProductsStyle}>
      <div className={styles.itemProductsChild} />
      <div className={styles.priceName}>
        <div className={styles.lineBoxyRaglan} style={lINEBOXYRAGLANStyle}>
          LINE BOXY RAGLAN TEE - CREAM
        </div>
        <div className={styles.div}>380.000₫</div>
      </div>
      <img className={styles.image1Icon} alt="" src={imageDimensions} />
    </div>
  );
};

export default ContainerProductForm;
