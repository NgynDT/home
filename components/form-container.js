import ProductCardForm from "./product-card-form";
import styles from "./form-container.module.css";

const FormContainer = () => {
  return (
    <div className={styles.listProductsPants}>
      <div className={styles.listProductsPantsChild} />
      <div className={styles.newPants}>NEW PANTS</div>
      <div className={styles.listProductItems}>
        <div className={styles.itemProducts}>
          <div className={styles.itemProductsChild} />
          <div className={styles.priceName}>
            <div className={styles.fabricTrackPantsContainer}>
              <span className={styles.fabricTrackPantsContainer1}>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine}>FABRIC TRACK PANTS</p>
              </span>
            </div>
            <div className={styles.div}>380.000₫</div>
          </div>
          <img className={styles.image1Icon} alt="" src="/image-13@2x.png" />
        </div>
        <ProductCardForm imageDimensions="/image-14@2x.png" />
        <ProductCardForm imageDimensions="/image-15@2x.png" propZIndex="2" />
        <div className={styles.button}>
          <div className={styles.xemTtC}>XEM TẤT CẢ</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
