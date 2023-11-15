import { useMemo } from "react";
import styles from "./product-card-form.module.css";

const ProductCardForm = ({ imageDimensions, propZIndex }) => {
  const itemProducts1Style = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  return (
    <div className={styles.itemProducts} style={itemProducts1Style}>
      <div className={styles.itemProductsChild} />
      <div className={styles.priceName}>
        <div className={styles.priceName1}>
          <div className={styles.fabricTrackPantsContainer}>
            <span className={styles.fabricTrackPantsContainer1}>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>FABRIC TRACK PANTS</p>
            </span>
          </div>
          <div className={styles.div}>380.000₫</div>
        </div>
      </div>
      <img className={styles.image1Icon} alt="" src={imageDimensions} />
    </div>
  );
};

export default ProductCardForm;
