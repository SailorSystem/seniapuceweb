import { motion } from 'motion/react'
import BlurText from './BlurText'

const translators = [
  {
    title: 'Voz / Texto → Lengua de Señas',
    desc: 'Este traductor convierte palabras habladas o escritas en lengua de señas, mostrando el movimiento mediante un avatar o video. Es ideal para que una persona oyente se comunique con una persona Sorda sin necesidad de conocer previamente el lenguaje de señas.',
    req: 'Navegador compatible, conexión a internet, micrófono si aplica.',
    link: 'https://vinculacion-traductor-de-se-as.onrender.com/',
  },
  {
    title: 'Lengua de Señas → Voz / Texto',
    desc: 'Este traductor reconoce las señas realizadas frente a la cámara y las convierte en texto o voz, permitiendo que una persona Sorda se comunique con quienes no conocen la lengua de señas.',
    req: 'Cámara web, navegador compatible, conexión a internet.',
    link: 'https://sailorsystem.github.io/ar_mirror_web/',
  },
]

export default function Traductores() {
  return (
    <section id="traductores" className="section traductores">
      <div className="container">
        <BlurText
          text="Traductores"
          delay={150}
          direction="top"
          className="section-title"
        />
        <p className="section-desc">
          Nuestros traductores buscan facilitar la comunicación diaria entre personas
          oyentes y personas Sordas. Elige la herramienta según lo que necesites traducir.
        </p>
        <div className="translators-grid">
          {translators.map((t, i) => (
            <motion.div
              key={i}
              className="translator-card"
              initial={{ opacity: 0, x: i === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="translator-title">{t.title}</h3>
              <p className="translator-desc">{t.desc}</p>
              <p className="translator-req"><strong>Requisitos:</strong> {t.req}</p>
              <a href={t.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Usar traductor
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
