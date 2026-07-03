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
            <h3>Desarrollado por</h3>
            <p><strong>Estudiantes de Ingeniería:</strong></p>
            <ul>
              <li>[Nombre 1]</li>
              <li>[Nombre 2]</li>
            </ul>
            <p><strong>Estudiantes de Educación de Sordos:</strong></p>
            <ul>
              <li>[Nombre 1]</li>
              <li>[Nombre 2]</li>
            </ul>
          </div>

          <div className="creditos-block">
            <h3>Docentes tutores</h3>
            <p>[Nombre del/los tutor(es) y su facultad]</p>
          </div>

          <div className="creditos-block">
            <h3>Con el respaldo institucional de</h3>
            <div className="creditos-logos">
              <img src="/seniapuceweb/images/logo-puce.jpg" alt="PUCE" className="creditos-logo" />
              <p>Pontificia Universidad Católica del Ecuador (PUCE)</p>
            </div>
          </div>

          <div className="creditos-block">
            <h3>Coordinación y vinculación</h3>
            <p>Dirección de Vinculación con la Comunidad – PUCE</p>
            <p className="creditos-meta">
              Proyecto desarrollado en el marco de [nombre de la materia, proyecto integrador
              o convocatoria, si aplica], [año].
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
