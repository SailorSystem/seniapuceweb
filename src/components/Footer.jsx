export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logos">
          <img src="/seniapuceweb/images/logo-puce.jpg" alt="PUCE" className="footer-logo" />
        </div>
        <div className="footer-info">
          <p>Pontificia Universidad Católica del Ecuador</p>
          <p>Dirección de Vinculación con la Comunidad</p>
          <p>
            <a href="mailto:[correo]">[correo]</a> |{' '}
            <a href="[enlace]" target="_blank" rel="noopener noreferrer">Vinculación PUCE</a>
          </p>
        </div>
        <p className="footer-copy">
          &copy; {year} SeñaPUCE. Todos los derechos reservados – PUCE.
        </p>
      </div>
    </footer>
  )
}
