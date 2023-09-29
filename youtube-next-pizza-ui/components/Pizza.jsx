import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const Pizza = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/Chau.png" alt="" width="500" height="500" />

      <h1 className={styles.title}>BBQ Pizza
</h1>
      <span className={styles.price}>$15.90</span>
      <p className={styles.desc}>
    Yummy pizza here!!!!
      </p>
    </div>
  );
};

export default Pizza;
