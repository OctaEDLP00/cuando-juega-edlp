<p align="center">
  <a href="https://cuando-juega-edlp.netlify.app" rel="noopener">
 <img width=200px height=200px src="./public/favicon.png" alt="Project logo"></a>
</p>

<h3 align="center">CUANDO JUEGA EDLP</h3>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/818d8c25-ecf0-4ab1-945e-0495ab7d083d/deploy-status)](https://app.netlify.com/sites/cuando-juega-edlp/deploys)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

<br>

[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/OctaEDLP00/cuando-juega-edlp.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![GitHub Issues](https://img.shields.io/github/issues/OctaEDLP00/cuando-juega-edlp.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)

</div>

---

<p align="center">
  Proyecto para saber el tiempo restante de
  <br> los proximos partidos de Estudiantes de La Plata. <br>Hecho con mucho cariño
</p>

<br>

<fieldset>
  <legend>📝 Tabla de contenidos</legend>
  <span>Índice</span>
  <ol>
    <li>
      <a href='#about'>About</a>
    </li>
    <li>
      <a href='#project_structure'>Estructura del Proyecto</a>
    </li>
    <li>
      <a href='#endpoints'>Endpoints</a>
    </li>
    <li>
      <a href='#routes'>Rutas</a>
    </li>
    <li>
      <a href='#built_using'>Construido usando</a>
    </li>
    <li>
      <a href='#authors'>Autor/es</a>
    </li>
    <li>
      <a href='#acknowledgement'>Agradecimientos</a>
    </li>
  </ol>
  <fieldset>
    <legend>Extra</legend>
    <ol type=A>
      <li>
        <a href='../TODO.md'>TODO</a>
      </li>
      <li>
        <a href='../CONTRIBUITING.md'>Contribuciones</a>
      </li>
    </ol>
  </fieldset>
</fieldset>

# 🧐 About <a id="about"></a>

Write about 1-2 paragraphs describing the purpose of your project.

# Estructura del Proyecto <a id="project_structure"></a>

```
/
├─ .vscode/
  └─ extension.json
  └─ launch.json
  └─ settings.json
├─ public/
  └─ assets/
    └─ All image necessary for the page /
      Todas la imagenes necesarias para la pagina
  └─ favicon.svg
├─ src/
  ├─ components/
    └─ astro/
      └─ icons/
        └─ AstroLogo.astro
        └─ Discord.astro
        └─ Github.astro
        └─ Gmail.astro
        └─ Instagram.astro
        └─ React.astro
        └─ TailwindCSS.astro
        └─ Threads.astro
        └─ Twitter.astro
      └─ special/
        └─ Link.astro
      └─ BuiltWith.astro
      └─ Button.astro
      └─ Footer.astro
      └─ Header.astro
      └─ Links.astro
      └─ Main.astro
      └─ Meta.astro
      └─ Navbar.astro
      └─ Scripts.astro
      └─ Select.astro
    └─ react/
      └─ special/
        └─ Marquee.tsx
      └─ Card.tsx
      └─ CardVS.tsx
      └─ renderTimeRemaining.tsx
      └─ renderTimeRemainingCardVS.tsx
  ├─ const/
        └─ index.ts
        └─ socialNetwork.ts
  ├─ functions/
      └─ createOGImage.ts
  ├─ hooks/
        └─ useRemainingTime.ts
  ├─ layouts/
        └─ Layout.astro
  └─ pages/
    └─ api/
      └─ 2023/
        └─ partido/
          └─ [vs].ts
        └─ partidos.ts
    └─ [vs].astro
    └─ 404.astro
    └─ index.astro
  └─ styles/
    └─ main.css
  └─ types/
    └─ enum.ts
    └─ main.d.ts
    └─ utils/
      └─ alwaysPositive.ts
      └─ cn.ts
      └─ console.ts
      └─ darkMode.ts
      └─ Dom.ts
      └─ EasterEgg.ts
      └─ fetchAPI.ts
      └─ fillZeros.ts
      └─ getRemainingTime.ts
      └─ index.ts
      └─ mapValues.ts
  └── env.d.ts
└── .editorconfig
└── .eslintignore
└── .eslintrc.js
└── .gitignore
└── .npmrc
└── .prettierrc.js
└── astro.config.mts
└── netlify.toml
└── package.json
└── README.md
└── tailwind.config.cjs
└── tsconfig.json
```

# Endpoints <a id="endpoints"></a>

- GET `api/2023/partidos.ts`. Todos los partidos de local del año corriente

- GET `api/2023/partido/[EQUIPO]`. Obtener info de solo un equipo
  * `[EQUIPO]` nombre del equipo a buscar

# Rutas <a id="routes"></a>

- [HOME](https://cuando-juega-edlp.netlify.app) => `/`
- [API]((https://cuando-juega-edlp.netlify.app/api/2023/partidos)) => `/api/2023/partidos`
- [INFO EQUIPO](https://cuando-juega-edlp.netlify.app/api/2023/partido/[EQUIPO]) => `/api/2023/partido/[EQUIPO]`

# ⛏️ Built Using <a id="built_using"></a>

- [Astro](https://www.mongodb.com/) - Web Framework
- [@astrojs/react](https://expressjs.com/) - Implementacion de [React](https://react.dev) de astro
- [@astrojs/tailwind](https://vuejs.org/) - Implementacion de [Tailwindcss](https://tailwindcss.com) de astro
- [@astrojs/netlify](https://vuejs.org/) - Integracion de [netlify](https://netlify.com) de astro
- [NodeJs](https://nodejs.org/en/) - Server Environment

# ✍️ Autores <a id="authors"></a>

- [@OctaEDLP00](https://github.com/OctaEDLP00) - Idea & Initial work

Ver tambien la lista de [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) que participaron en este proyecto

# 🎉 Agradecimientos <a id="acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
