import { motion } from 'motion/react'
import BlurText from './BlurText'

export default function Contacto() {
  return (
    <section id="contacto" className="section contacto">
      <div className="container">
        <BlurText
          text="Contacto"
          delay={150}
          direction="top"
          className="section-title"
        />
        <motion.div
          className="contacto-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            ¿Tienes preguntas, sugerencias o quieres colaborar con el proyecto?
            Escríbenos a <a href="mailto:[correo]">[correo]</a> o visita la
            Dirección de Vinculación con la Comunidad de la PUCE en{' '}
            <a href="[enlace]" target="_blank" rel="noopener noreferrer">[enlace]</a>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
