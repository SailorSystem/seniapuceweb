import { motion } from 'motion/react'

const cards = [
  {
    icon: '🔤',
    title: 'Traductor Voz → Señas',
    desc: 'Convierte texto o voz en lengua de señas de forma instantánea.',
    link: 'https://vinculacion-traductor-de-se-as.onrender.com/',
    label: 'Ir al traductor',
  },
  {
    icon: '🤟',
    title: 'Traductor Señas → Voz',
    desc: 'Convierte lengua de señas en texto o voz para facilitar la comunicación.',
    link: 'https://sailorsystem.github.io/ar_mirror_web/',
    label: 'Ir al traductor',
  },
  {
    icon: '🎮',
    title: 'App para Niños',
    desc: 'Juegos interactivos para aprender lengua de señas jugando.',
    link: 'https://appvocabulario.netlify.app/',
    label: 'Ir a la app',
  },
  {
    icon: '📚',
    title: 'Mate Señas',
    desc: 'Recursos y actividades para enseñar lengua de señas en el aula.',
    link: 'https://warm-taffy-6ab2ab.netlify.app/',
    label: 'Ir a la app',
  },
]

export default function Cards() {
  return (
    <section className="cards-section">
      <div className="container">
        <h2 className="section-title">Acceso rápido</h2>
        <div className="cards-grid">
          {cards.map((c, i) => (
            <motion.a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <span className="card-icon">{c.icon}</span>
              <h3 className="card-title">{c.title}</h3>
              <p className="card-desc">{c.desc}</p>
              <span className="card-btn">{c.label} →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
