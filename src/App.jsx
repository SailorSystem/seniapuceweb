import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Traductores from './components/Traductores'
import AppsJuegos from './components/AppsJuegos'
import SobreProyecto from './components/SobreProyecto'
import Creditos from './components/Creditos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Cards />
        <Traductores />
        <AppsJuegos />
        <SobreProyecto />
        <Creditos />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
