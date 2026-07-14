import { motion } from 'motion/react'
import BlurText from './BlurText'

const repos = [
  { name: 'Traductor de Señas', url: 'https://github.com/Vinculacion-2026/traductor-lengua-senas' },
  { name: 'App Vocabulario Visual', url: 'https://github.com/Vinculacion-2026/app-vocabulario-visual' },
  { name: 'MateSeñas EC', url: 'https://github.com/Vinculacion-2026/app-matematicas-gamificada' },
  { name: 'AR Mirror Web', url: 'https://github.com/SAILORSYSTEM/ar_mirror_web' },
]

const teams = [
  {
    name: 'Coordinación Técnica',
    color: 'var(--puce-yellow)',
    icon: '⚙️',
    members: [
      { name: 'Francisco Rodríguez', role: 'Coordinación del Proyecto' },
    ],
  },
  {
    name: 'Coordinación Carrera Ciencias de Educación',
    color: 'var(--puce-yellow)',
    icon: '🎓',
    members: [
      { name: 'Dr. Querubín Patricio Flores Núñez', role: 'Coordinador de la Carrera' },
    ],
  },
  {
    name: 'Equipo A – App Educativa Vocabulario Visual',
    color: '#4F46E5',
    icon: '🎨',
    tutor: 'Francisco Rodríguez',
    members: [
      { name: 'Diego Alejandro Gómez Ordóñez', role: 'Tech Lead' },
      { name: 'Edgar David Ocampo Calderón', role: 'Scrum Master' },
      { name: 'Julio Aguirre', role: 'Estudiante (Grupo 1–2)' },
      { name: 'José Iturralde', role: 'Estudiante (Grupo 1–2)' },
      { name: 'Cristina Calle', role: 'Oyente (Validación)' },
    ],
  },
  {
    name: 'Equipo B – App Educativa MateSeñas EC',
    color: '#059669',
    icon: '📐',
    tutor: 'Francisco Rodríguez',
    members: [
      { name: 'Julio Sebastián Panchi Cutos', role: 'Tech Lead' },
      { name: 'Luis Eduardo Rodríguez Salme', role: 'Scrum Master' },
      { name: 'Franklin Changoluisa', role: 'Estudiante (Grupo 3–4)' },
    ],
  },
  {
    name: 'Equipo C – Traductor de Lengua de Señas',
    color: '#DC2626',
    icon: '🤟',
    tutor: 'Francisco Rodríguez',
    members: [
      { name: 'Adrián Daniel Sánchez Vizcaíno', role: 'Tech Lead' },
      { name: 'Joel Alexis Tupiza Rocha', role: 'Scrum Master' },
      { name: 'María Belén Reina', role: 'Estudiante' },
      { name: 'Ámbar Sanmartín', role: 'Estudiante' },
      { name: 'Israel Zurita', role: 'Estudiante' },
    ],
  },
  {
    name: 'AR Mirror Web',
    color: '#7C3AED',
    icon: '🪞',
    members: [
      { name: 'Omar Lozada', role: 'Desarrollador Full-Stack' },
    ],
  },
]

export default function SobreProyecto() {
  return (
    <section id="sobre" className="section sobre">
      <div className="container">
        <BlurText
          text="Conoce al equipo"
          delay={120}
          direction="top"
          className="section-title"
        />
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Conoce al increíble equipo detrás de los proyectos educativos inclusivos.
        </motion.p>

        <motion.div
          className="sobre-desc"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            SeñaPUCE nace como un proyecto de vinculación con la comunidad, impulsado por
            la Pontificia Universidad Católica del Ecuador (PUCE), con el objetivo de
            reducir las barreras de comunicación entre la comunidad Sorda y la comunidad
            oyente.
          </p>
          <p>
            El proyecto reúne a estudiantes de Ingeniería y de Educación de Sordos,
            trabajando juntos para crear herramientas tecnológicas accesibles,
            pedagógicamente adecuadas y culturalmente respetuosas.
          </p>
        </motion.div>

        <div className="teams-grid">
          {teams.map((team, i) => (
            <motion.div
              key={i}
              className="team-card"
              style={{ '--team-color': team.color }}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="team-header" style={{ background: `linear-gradient(135deg, ${team.color}22, transparent)` }}>
                <span className="team-icon">{team.icon}</span>
                <h3 className="team-name">{team.name}</h3>
              </div>
              <div className="team-members">
                {team.members.map((m, j) => (
                  <div key={j} className="team-member">
                    <div className="member-avatar" style={{ background: team.color }}>
                      {m.name.charAt(0)}
                    </div>
                    <div>
                      <p className="member-name">{m.name}</p>
                      <p className="member-role" style={{ color: team.color }}>{m.role}</p>
                    </div>
                  </div>
                ))}
                {team.tutor && (
                  <div className="team-tutor">
                    <span className="tutor-icon">🧑‍🏫</span>
                    Docente Tutor: {team.tutor}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="repos-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BlurText
            text="Código Abierto"
            delay={120}
            direction="top"
            className="section-title"
          />
          <p className="section-desc">
            Este es un proyecto de acceso abierto para uso de todo el mundo.
            Los repositorios están disponibles en GitHub:
          </p>
          <div className="repos-grid">
            {repos.map((r, i) => (
              <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="repo-link">
                <span className="repo-icon">📂</span>
                <span>{r.name}</span>
                <span className="repo-arrow">→</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="attrib-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BlurText
            text="Atribuciones y Derechos de Autor"
            delay={100}
            direction="top"
            className="section-title"
          />
          <p className="section-desc">
            Este proyecto utiliza librerías y código de código abierto. Agradecemos a sus creadores y cumplimos con las licencias correspondientes:
          </p>
          <div className="attrib-list">
            <p><strong>MediaPipe Tasks Vision</strong> – Apache License 2.0 (Google AI Edge)</p>
            <p><strong>Three.js</strong> – MIT License</p>
            <p><strong>Matter.js</strong> – MIT License</p>
            <p><strong>MongoDB Atlas</strong> – SSPL (Server Side Public License)</p>
            <p><strong>Cloudinary</strong> – Servicio comercial con capa gratuita</p>
            <p><strong>React + Motion + Vite</strong> – MIT License</p>
            <p><strong>React Bits</strong> – MIT + Commons Clause</p>
            <p className="attrib-note">
              Este proyecto es de acceso abierto. Las licencias completas de cada librería y servicio están disponibles en sus respectivos repositorios oficiales y en los repositorios del proyecto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
