import React from 'react'
import styles from "./Blood.module.css";
function Blood({ override }:{override?: string}) {
    
    
  return (
          <div className={`${styles.bloodContainer} ${override}`}>
                  <div className={styles.bloodDrop}></div>
                  <div className={styles.bloodDrop}></div>
                  <div className={styles.bloodDrop}></div>
                  <div className={styles.bloodDrop}></div>
                  <div className={styles.bloodPool}></div>
                  <div className={styles.bloodDrop}></div>
                  <div className={styles.bloodDrop}></div>
                  <div className={`${styles.bloodPool} text-center flex justify-center items-center text-white font-medium px-4 text-nowrap`} > Donate Now</div>
          </div>
  );
}

export default Blood