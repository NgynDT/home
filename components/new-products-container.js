import { useCallback } from "react";
import ContainerProductForm from "./container-product-form";
import styles from "./new-products-container.module.css";

const NewProductsContainer = () => {
  const onBUTTONContainerClick = useCallback(() => {
    // Please sync "Trang hiển thị sản phẩm" to the project
  }, []);

  return (
    <div className={styles.listProducts}>
      <div className={styles.listProductsChild} />
      <div className={styles.newProducts}>NEW PRODUCTS</div>
      <div className={styles.listProductItems}>
        <ContainerProductForm imageDimensions="/image-1@2x.png" />
        <ContainerProductForm
          imageDimensions="/image-11@2x.png"
          propZIndex="1"
          propWidth="unset"
        />
        <ContainerProductForm
          imageDimensions="/image-12@2x.png"
          propZIndex="2"
          propWidth="unset"
        />
        <div className={styles.button} onClick={onBUTTONContainerClick}>
          <div className={styles.xemTtC}>XEM TẤT CẢ</div>
        </div>
      </div>
    </div>
  );
};

export default NewProductsContainer;
