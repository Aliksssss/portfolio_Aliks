'use client'
import Image from "next/image";
import styles from './home.module.css'

const Homepage = () => {

  function handleMouseEnter(text) {
    const textElement = document.querySelector(`.${styles.imageText}`);
    textElement.textContent = text;
    textElement.style.visibility = 'visible';
  }

  function handleMouseLeave() {
    const textElement = document.querySelector(`.${styles.imageText}`);
    textElement.style.visibility = 'hidden';
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className="py-6 px-6" onMouseEnter={() => handleMouseEnter('En nuestra agencia de publicidad nos enorgullece ofrecer soluciones creativas e innovadoras para promover y posicionar marcas en el mercado. Nuestro equipo de expertos multidisciplinarios está comprometido en ofrecer resultados excepcionales a nuestros clientes al implementar estrategias de marketing efectivas y campañas publicitarias impactantes.')} onMouseLeave={handleMouseLeave}>
          <Image src="/agencia_2.png" alt="Agencia" width={350} height={150} />
        </div>
        <div className="py-6 px-6" onMouseEnter={() => handleMouseEnter('En nuestra consultoría de comunicación y estrategia nos especializamos en ayudar a las empresas a desarrollar y ejecutar estrategias de comunicación efectivas y a medida. Nuestro enfoque radica en comprender a fondo las necesidades y objetivos de cada cliente, para así poder diseñar soluciones personalizadas que generen un impacto positivo en su reputación y relación con su público objetivo.')} onMouseLeave={handleMouseLeave}>
          <Image src="/consultoria_2.png" alt="Agencia" width={350} height={150} />
        </div>
        <div className="py-6 px-6" onMouseEnter={() => handleMouseEnter('En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación, compra y ejecución de estrategias de medios. Nuestro objetivo es ayudar a las marcas a maximizar su alcance e impacto en el mercado, optimizando cada dólar invertido en publicidad.')} onMouseLeave={handleMouseLeave}>
          <Image src="/central_de_medios_2.png" alt="Agencia" width={350} height={150} />
        </div>
        <p className={styles.imageText}></p>
      </div>
      <div className={styles.container}>
        <div className={styles.mobileImages}>
          <div className={styles.imageGroup}>
            <Image src="/kriptonite-logo.png" alt="" width={100} height={30} />
            <Image src="/agencia_2.png" alt="" width={200} height={75} />
          </div>
          <p className={styles.p}>En nuestra agencia de publicidad nos enorgullece ofrecer soluciones creativas e innovadoras para promover y
            posicionar marcas en el mercado. Nuestro equipo de expertos multidisciplinarios está comprometido en ofrecer
            resultados excepcionales a nuestros clientes al implementar estrategias de marketing efectivas y campañas
            publicitarias impactantes.</p>
        </div>
        <div className={styles.mobileImages}>
          <div className={styles.imageGroup}>
            <Image src="/kriptonite-logo.png" alt="" width={100} height={30} />
            <Image src="/central_de_medios_2.png" alt="" width={200} height={75} />
          </div>
          <p className={styles.p}>En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación,
            compra y ejecución de estrategias de medios. Nuestro objetivo es ayudar a las marcas a maximizar su alcance e
            impacto en el mercado, optimizando cada dólar invertido en publicidad.</p>
        </div>
        <div className={styles.mobileImages}>
          <div className={styles.imageGroup}>
            <Image src="/kriptonite-logo.png" alt="" width={100} height={30} />
            <Image src="/consultoria_2.png" alt="" width={200} height={75} />
          </div>
          <p className={styles.p}>En nuestra consultoría de comunicación y estrategia nos especializamos en ayudar a las empresas a
            desarrollar y ejecutar estrategias de comunicación efectivas y a medida. Nuestro enfoque radica en comprender
            a fondo las necesidades y objetivos de cada cliente, para así poder diseñar soluciones personalizadas que generen
            un impacto positivo en su reputación y relación con su público objetivo.</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
