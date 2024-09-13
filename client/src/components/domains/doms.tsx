import React from 'react';
import styles from './doms.module.css';
import Pfps from './components/domains/Pfps.jpeg'; // Assuming this is the correct path

const Domains = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Domains</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardStyle}>
            <div className={styles.icon}>
              <img  alt="Technical Icon" />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.cardTitle}>Technical</h3>
              <p className={styles.cardText}>Desc texts</p>
              <button className={styles.button}>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardStyle}>
            <div className={styles.icon}>
              <img alt="Research Icon" />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.cardTitle}>Research</h3>
              <p className={styles.cardText}>Desc texts</p>
              <button className={styles.button}>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardStyle}>
            <div className={styles.icon}>
              <img alt="Creatives Icon" />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.cardTitle}>Creatives</h3>
              <p className={styles.cardText}>Desc texts</p>
              <button className={styles.button}>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardStyle}>
            <div className={styles.icon}>
              <img  alt="Corporate Icon" />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.cardTitle}>Corporate</h3>
              <p className={styles.cardText}>Desc texts</p>
              <button className={styles.button}>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;
