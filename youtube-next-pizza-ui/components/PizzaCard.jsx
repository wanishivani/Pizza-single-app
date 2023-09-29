import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/creamy.png" alt="" width="500" height="500" />

      <h1 className={styles.title}>Delicious Pizza!!</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
    Yummy pizza here!!!!
      </p>
    </div>
  );
};

export default PizzaCard;
