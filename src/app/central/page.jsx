import Image from "next/image"
import styles from '@/app/central/central.module.css'

const Central = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/kriptonite-logo.png' alt="" width={200} height={100} className="brightness-50"></Image>
        <Image src='/central_de_medios_2.png' alt="" width={372} height={10} className="brightness-50"></Image>
      </div>
      <div>
        <p className={styles.p}>
          En nuestra agencia de publicidad nos enorgullece ofrecer soluciones creativas e innovadoras para promover y posicionar marcas en el mercado.
          Nuestro equipo de expertos multidisciplinarios está comprometido en ofrecer resultados excepcionales a nuestros clientes al implementar estrategias de marketing efectivas y campañas publicitarias impactantes.

          Nos destacamos por nuestra capacidad para comprender las necesidades y objetivos únicos de cada cliente, y adaptar nuestras estrategias en consecuencia. Mediante una combinación de investigación exhaustiva,
          análisis de mercado y conocimiento profundo de las últimas tendencias, creamos campañas que generan un impacto duradero y aumentan la visibilidad de las marcas.

          Nuestra agencia se destaca por trabajar en estrecha colaboración con nuestros clientes, estableciendo una relación de confianza y comunicación abierta.
          Nos esforzamos por comprender su visión y convertirla en una realidad tangible, utilizando nuestro talento creativo y experiencia en la industria.

          Contamos con un equipo de talentosos creativos, diseñadores gráficos, especialistas en marketing digital y estrategas de contenido,
          quienes se mantienen actualizados con las últimas tendencias y tecnologías en el ámbito de la publicidad. Esto nos permite ofrecer soluciones que se adaptan a las necesidades cambiantes del mercado y
          garantizar que nuestras campañas sean relevantes y efectivas.

          En resumen, nuestra agencia de publicidad se destaca por su enfoque centrado en el cliente, creatividad sobresaliente, conocimiento profundo del mercado y un equipo dedicado y apasionado.
          Trabajamos incansablemente para cumplir y superar las expectativas de nuestros clientes, y nos enorgullece ser parte de su éxito.
        </p>
      </div>
    </div>
  )
}

export default Central