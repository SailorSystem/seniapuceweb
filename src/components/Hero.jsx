import BlurText from './BlurText'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay" />
      <div className="hero-shapes">
        <div className="hero-shape" />
        <div className="hero-shape" />
        <div className="hero-shape" />
      </div>
      <div className="hero-hands">
        <span className="hero-hand">🤟</span>
        <span className="hero-hand">👋</span>
        <span className="hero-hand">✊</span>
        <span className="hero-hand">🖐️</span>
      </div>
      <div className="hero-content">
        <BlurText
          text="Rompiendo barreras de comunicación con la comunidad Sorda"
          delay={80}
          direction="top"
          className="hero-title"
        />
        <p className="hero-subtitle">
          SeñaPUCE es un proyecto de vinculación de la Pontificia Universidad Católica del
          Ecuador que une a estudiantes de Ingeniería y de Educación de Sordos para crear
          herramientas tecnológicas de traducción e inclusión educativa. Aquí encontrarás
          traductores de lengua de señas y aplicaciones educativas pensadas para niños y
          docentes.
        </p>
        <div className="hero-actions">
          <a href="#traductores" className="btn btn-primary">Explorar traductores</a>
          <a href="#apps" className="btn btn-outline">Ver aplicaciones</a>
        </div>
      </div>
    </section>
  )
}
