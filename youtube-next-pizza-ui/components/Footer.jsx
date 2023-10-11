import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE DELICIOUS PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R.Nelamangla #304.
            <br /> BANGALORE	, 85022 
            <br /> (080) 867-1010
          </p>
          <p className={styles.text}>
            2356 K.Devanhalli, #235.
            <br /> BANGALORE	, 85022
            <br /> (080) 867-1011
          </p> 
          <p className={styles.text}> 
            1614 E. Devanhalli, #104.
            <br /> BANGALORE, 85022
            <br /> (080) 867-1012
          </p>
          <p className={styles.text}>
          23 E.Hoskote #104.
            <br /> BANGALORE, 85022
            <br /> (080) 867-1012
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
