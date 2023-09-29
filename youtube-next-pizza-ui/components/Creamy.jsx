import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const Creamy = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/kelvin.png" alt="" width="500" height="500" />

      <h1 className={styles.title}>Veggie Pizza
</h1>
      <span className={styles.price}>$22.90</span>
      <p className={styles.desc}>
    Yummy pizza here!!!!
      </p>
    </div>
  );
};

export default Creamy;
