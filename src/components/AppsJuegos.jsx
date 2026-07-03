import { motion } from 'motion/react'
import BlurText from './BlurText'

const apps = [
  {
    title: 'App para Niños',
    desc: 'Una aplicación con juegos didácticos donde los niños aprenden lengua de señas de forma divertida: memoria de señas, asociación de imágenes, retos por niveles y más. Pensada para niños Sordos y oyentes que quieran aprender jugando.',
    link: 'https://appvocabulario.netlify.app/',
    label: 'Ir a la app web',
  },
  {
    title: 'Mate Señas',
    desc: 'Una herramienta de apoyo para docentes que trabajan con estudiantes Sordos o que desean enseñar lengua de señas en sus clases. Incluye guías de actividades, material descargable y seguimiento del progreso de los estudiantes.',
    link: 'https://warm-taffy-6ab2ab.netlify.app/',
    label: 'Ir a la app web',
  },
]

export default function AppsJuegos() {
  return (
    <section id="apps" className="section apps">
      <div className="container">
        <BlurText
          text="Aplicaciones y Juegos"
          delay={150}
          direction="top"
          className="section-title"
        />
        <p className="section-desc">
          Además de los traductores, desarrollamos dos aplicaciones educativas para
          acompañar el proceso de aprendizaje de la lengua de señas, tanto en casa como
          en el aula.
        </p>
        <div className="apps-grid">
          {apps.map((a, i) => (
            <motion.div
              key={i}
              className="app-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <h3 className="app-title">{a.title}</h3>
              <p className="app-desc">{a.desc}</p>
              <a href={a.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {a.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
