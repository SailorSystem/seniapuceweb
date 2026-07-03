import { motion } from 'motion/react'
import BlurText from './BlurText'

export default function SobreProyecto() {
  return (
    <section id="sobre" className="section sobre">
      <div className="container">
        <BlurText
          text="Sobre el Proyecto"
          delay={150}
          direction="top"
          className="section-title"
        />
        <motion.div
          className="sobre-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            SeñaPUCE nace como un proyecto de vinculación con la comunidad, impulsado por
            la Pontificia Universidad Católica del Ecuador (PUCE), con el objetivo de
            reducir las barreras de comunicación entre la comunidad Sorda y la comunidad
            oyente.
          </p>
          <p>
            El proyecto reúne a estudiantes de la carrera de Ingeniería, encargados del
            desarrollo tecnológico de los traductores y aplicaciones, y a estudiantes de
            Educación de Sordos, encargados de asegurar que el contenido y la metodología
            sean pedagógicamente adecuados y culturalmente respetuosos con la comunidad
            Sorda.
          </p>
          <h3>Objetivo general</h3>
          <p>
            Facilitar la comunicación e inclusión educativa de la comunidad Sorda mediante
            herramientas tecnológicas accesibles.
          </p>
          <h3>Objetivos específicos</h3>
          <ul>
            <li>Desarrollar traductores bidireccionales entre lengua de señas y lenguaje oral/escrito.</li>
            <li>Crear recursos lúdicos que motiven el aprendizaje de la lengua de señas en niños.</li>
            <li>Proveer a los docentes de herramientas prácticas para la enseñanza inclusiva.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
