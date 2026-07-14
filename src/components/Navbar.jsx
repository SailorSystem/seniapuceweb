import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#traductores', label: 'Traductores' },
  { href: '#apps', label: 'Aplicaciones y Juegos' },
  { href: '#sobre', label: 'Sobre el Proyecto' },
  { href: '#creditos', label: 'Créditos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#inicio" className="navbar-brand">
          <img src="/seniapuceweb/images/logo-puce.png" alt="PUCE" className="navbar-logo" />
          <span className="navbar-title">SeñaPUCE</span>
        </a>

        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Menú">
          <span className={`hamburger ${open ? 'open' : ''}`} />
        </button>

        <nav className="navbar-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar-link">
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} className="navbar-mobile-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
