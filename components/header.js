import { useState, useCallback } from "react";
import NgNhp from "./ng-nhp";
import PortalPopup from "./portal-popup";
import styles from "./header.module.css";

const Header = () => {
  const [isNgNhpOpen, setNgNhpOpen] = useState(false);

  const openNgNhp = useCallback(() => {
    setNgNhpOpen(true);
  }, []);

  const closeNgNhp = useCallback(() => {
    setNgNhpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.logoStore}>
          <img
            className={styles.logoStoreChild}
            alt=""
            src="/rectangle-21@2x.png"
          />
        </div>
        <div className={styles.groupParent}>
          <div className={styles.vectorParent}>
            <img className={styles.groupChild} alt="" src="/rectangle-3.svg" />
            <img className={styles.searchIcon} alt="" src="/search.svg" />
            <div className={styles.search}>SEARCH</div>
          </div>
          <img
            className={styles.userIcon}
            alt=""
            src="/user.svg"
            onClick={openNgNhp}
          />
          <div className={styles.shoppingCart}>
            <img
              className={styles.shoppingCartIcon}
              alt=""
              src="/shoppingcart.svg"
            />
            <div className={styles.ellipseParent}>
              <div className={styles.groupItem} />
              <div className={styles.div}>1</div>
            </div>
          </div>
        </div>
        <div className={styles.navBar}>
          <div className={styles.speacialPrice}>SPEACIAL PRICE</div>
          <div className={styles.clothingParent}>
            <div className={styles.clothing}>CLOTHING</div>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevrondown.svg"
            />
          </div>
          <div className={styles.tShirt}>T-SHIRT</div>
          <div className={styles.tShirt}>POLO</div>
        </div>
      </div>
      {isNgNhpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNgNhp}
        >
          <NgNhp onClose={closeNgNhp} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
