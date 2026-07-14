# SeñaPUCE

**Comunicación sin barreras**

Landing page del proyecto de vinculación de la Pontificia Universidad Católica del Ecuador (PUCE) que une a estudiantes de Ingeniería y de Educación de Sordos para crear herramientas tecnológicas de traducción e inclusión educativa.

## 🚀 Sitio en vivo

[https://sailorsystem.github.io/seniapuceweb/](https://sailorsystem.github.io/seniapuceweb/)

## 📋 Secciones

- Inicio
- Traductores (Voz → Señas | Señas → Voz)
- Aplicaciones y Juegos
- Sobre el Proyecto (Equipo, Código Abierto, Atribuciones)
- Créditos
- Contacto

## 🛠️ Stack

- **React 19** + **Vite**
- **Motion** (animaciones)
- **React Bits** (texto animado)
- **gh-pages** (despliegue)

## 📦 Desarrollo local

```bash
npm install
npm run dev
```

## 🌐 Build y despliegue

```bash
npm run build      # genera dist/
npm run deploy     # publica en gh-pages branch
```

## 📁 Estructura

```
src/
├── components/
│   ├── BlurText.jsx       # React Bits text animation
│   ├── SplitText.jsx      # React Bits text animation
│   ├── Navbar.jsx         # Header + navegación
│   ├── Hero.jsx           # Banner principal
│   ├── Cards.jsx          # Acceso rápido a proyectos
│   ├── Traductores.jsx    # Sección traductores
│   ├── AppsJuegos.jsx     # Aplicaciones educativas
│   ├── SobreProyecto.jsx  # Equipo + repos + atribuciones
│   ├── Creditos.jsx       # Créditos institucionales
│   ├── Contacto.jsx       # Información de contacto
│   └── Footer.jsx         # Pie de página
├── App.jsx
├── main.jsx
└── index.css
```

## 🔗 Proyectos vinculados

| Proyecto | Link |
|----------|------|
| Traductor Voz → Señas | [AR Mirror Web](https://sailorsystem.github.io/ar_mirror_web/) |
| Traductor Señas → Voz | [Traductor PUCE](https://vinculacion-traductor-de-se-as.onrender.com/) |
| App Niños | [App Vocabulario](https://appvocabulario.netlify.app/) |
| MateSeñas | [MateSeñas](https://warm-taffy-6ab2ab.netlify.app/) |

## 📄 Licencia

Código abierto. Ver atribuciones en la sección correspondiente del sitio.

---

Proyecto desarrollado en el marco de Vinculación con la Comunidad – PUCE.
