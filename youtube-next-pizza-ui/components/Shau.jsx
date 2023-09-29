import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const Shau = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/hot-pizza.png" alt="" width="500" height="500" />

      <h1 className={styles.title}>Pepperoni Pizza....</h1>
      <span className={styles.price}>$18.90</span>
      <p className={styles.desc}>
    Yummy pizza here!!!!
      </p>
    </div>
  );
};

export default Shau;
