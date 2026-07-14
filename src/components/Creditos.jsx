import { motion } from 'motion/react'
import BlurText from './BlurText'

export default function Creditos() {
  return (
    <section id="creditos" className="section creditos">
      <div className="container">
        <BlurText
          text="Créditos"
          delay={150}
          direction="top"
          className="section-title"
        />
        <motion.div
          className="creditos-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="creditos-block">
            <h3>Coordinación del Proyecto</h3>
            <p>Francisco Rodríguez – Coordinación del Proyecto (Proyecto Innova Tech CONECTA 2 PUCE 2026)</p>
            <p>Querubín Flores – Coordinación del Proyecto (Proyecto EDUCA PUCE FE Y ALEGRÍA)</p>
          </div>

          <div className="creditos-block">
            <h3>Con el respaldo institucional de</h3>
            <div className="creditos-logos">
              <img src="/seniapuceweb/images/logo-puce.png" alt="PUCE" className="creditos-logo" />
              <p>Pontificia Universidad Católica del Ecuador (PUCE)</p>
            </div>
          </div>

          <div className="creditos-block">
            <h3>Coordinación y vinculación</h3>
            <p>Dirección de Vinculación con la Comunidad – PUCE</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
