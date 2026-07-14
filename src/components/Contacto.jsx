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
          <div className="contacto-card">
            <div className="contacto-item">
              <span className="contacto-icon">📧</span>
              <a href="mailto:frodriguez@puce.edu.ec">frodriguez@puce.edu.ec</a>
            </div>
            <div className="contacto-item">
              <span className="contacto-icon">📞</span>
              <span>2991700 ext. 1213</span>
            </div>
          </div>
          <p className="contacto-extra">
            O visita la Dirección de Vinculación con la Comunidad de la PUCE.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
