import Header from "../components/header";
import NewProductsContainer from "../components/new-products-container";
import FormContainer from "../components/form-container";
import AddressSection from "../components/address-section";
import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <img className={styles.homeChild} alt="" src="/rectangle-4@2x.png" />
      <div className={styles.aboutUs}>About us</div>
      <div className={styles.aboutTheShop}>About The Shop</div>
      <div className={styles.choMngBnContainer}>
        <span>{`Chào mừng bạn đến với `}</span>
        <span className={styles.genz}>GENZ</span>
        <span>
          {" "}
          , điểm đến duy nhất cho thời trang và phụ kiện hàng đầu. Chúng tôi cam
          kết mang đến cho bạn những xu hướng mới nhất, chất lượng xuất sắc và
          trải nghiệm mua sắm đáng nhớ sẽ khiến bạn quay trở lại nhiều lần hơn.
        </span>
      </div>
      <div className={styles.homeInner}>
        <img className={styles.groupChild} alt="" src="/rectangle-5@2x.png" />
      </div>
      <NewProductsContainer />
      <FormContainer />
      <AddressSection />
    </div>
  );
};

export default Home;
