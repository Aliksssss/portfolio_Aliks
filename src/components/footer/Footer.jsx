import styles from '@/components/footer/footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
      <div className={styles.container}>
        <div className={styles.img}>
          <Image src='/kriptonite-logo.png' alt='' width={80} height={50}/>
          <h2 className={styles.p}>Kryptonite Agency</h2>
          <h3 className={styles.h3}>Sabemos como derrotar a Superman</h3>
        </div>
        <div className={styles.rrss}>
          <Image src='/instagram.png' alt='Instagram' width={60} height={50}/>
        </div>
      </div>
    )
  }
  
  export default Footer