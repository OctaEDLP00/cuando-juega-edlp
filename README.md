<p align="center">
  <a href="https://cuando-juega-edlp.netlify.app" rel="noopener">
  <img width=200 height=200 src="./public/favicon.webp" alt="Project logo"></a>
</p>
<h3 align="center">CUANDO JUEGA EDLP</h3>

<style>
  .prev {
    display: flex;
    flex-direction: row;
    gap: 50px;
    padding: 30px;
  }
</style>
---
<h2 align=center>Previzualizacion</h2>

<div class='prev'>
  <div>
    <h2>Dark Mode</h2>
    <img width=400 height=200 src="./Desktop - DarkMode.jpg" alt="Previsualizacion del Dark Mode de la pagina" />
  </div>
  <div>
    <h2>Light Mode</h2>
    <img width=400 height=200 src="./Desktop - LightMode.jpg" alt="Previsualizacion del Light Mode de la pagina" />
  </div>
</div>


<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/818d8c25-ecf0-4ab1-945e-0495ab7d083d/deploy-status)](https://app.netlify.com/sites/cuando-juega-edlp/deploys)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
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
    <!--
    <li>
      <a href='#acknowledgement'>Agradecimientos</a>
    </li>
    -->
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
|- node_modules/ carpeta de dependencias que necesita el proyecto para funcionar
├─ public/
  └─ assets/
    └─ Todas la imagenes necesarias para la pagina (escudos)
  └─ favicon.webp
├─ src/
  ├─ components/
    └─ head/
      └─ Links.astro
      └─ Meta.astro
      └─ Scripts.astro
    └─ icons/
      └─ Github.astro
      └─ Instagram.astro
      └─ Threads.astro
      └─ Twitter.astro
    └─ Badge.astro
    └─ BuiltWith.astro
    └─ Card.astro
    └─ Component.astro
    └─ Footer.astro
    └─ Header.astro
    └─ Link.astro
    └─ Navbar.astro
    └─ RenderTimeRemaining.tsx
    └─ Temporizador.tsx
  ├─ const/
    └─ components.ts
    └─ index.ts
    └─ partidos.ts
    └─ socialNetwork.ts
  ├─ functions/
    └─ createOGImage.ts
  ├─ hooks/
    └─ useRemainingTime.ts
  ├─ layouts/
    └─ Layout.astro
  └─ pages/
    └─ api/
      └─ partido/
        └─ [visitor].ts
        └─ [vs].ts
      └─ partidos.ts
    └─ components.astro
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
    └─ Dom.ts
    └─ fetchAPI.ts
    └─ fillZeros.ts
    └─ getRemainingTime.ts
    └─ index.ts
    └─ mapValues.ts
  └── env.d.ts
└── .editorconfig
└── .eslintrc.js
└── .gitignore
└── .npmrc
└── .prettierrc.js
└── astro.config.mts
└── LICENSE-APACHE-2.0.txt
└── LICENSE-MIT.txt
└── netlify.toml
└── package.json/
   └─ .eslintignore
   └─ pnpm-lock.yaml // ignorado por el archivo .gitignore al subirse al github
   └─ tailwind.config.cjs
   └─ tsconfig.json
└── README.md/
   └─ CONTRIBUITING.md
```

# Endpoints <a id="endpoints"></a>

- GET `/api/partidos`. Todos los partidos de local del año corriente

- GET `/api/partido/[EQUIPO]`. Obtener info de solo un equipo
  * `[EQUIPO]` nombre del equipo a buscar los valore posibles salen en `/api/partidos`

- GET `/api/partido/[VISITANTE]`. Obtener info de solo los partidos que se juegan de local o visitante
  * `[VISITANTE]` unicos valores posibles `visitante` ó `local`

# Rutas <a id="routes"></a>

- [HOME](https://cuando-juega-edlp.netlify.app) => `/`
- [API]((https://cuando-juega-edlp.netlify.app/api/partidos)) => `/api/2023/partidos`
- [INFO EQUIPO](https://cuando-juega-edlp.netlify.app/api/partido/[EQUIPO]) => `/api/partido/[EQUIPO]`
- [INFO VISITANTE](https://cuando-juega-edlp.netlify.app/api/partido/[VISITANTE]) => `/api/partido/[VISITANTE]`

# ⛏️ Built Using <a id="built_using"></a>

- [Astro](https://astro.build/) - Web Framework
- [@astrojs/react](https://docs.astro.build/integrations/react/) - Implementacion de [React](https://react.dev) de astro
- [@astrojs/tailwind](https://docs.astro.build/integrations/tailwind/) - Implementacion de [Tailwindcss](https://tailwindcss.com) de astro
- [@astrojs/netlify](https://docs.astro.build/integrations/netlify/) - Integracion de [Netlify](https://netlify.com) de astro
- [NodeJs](https://nodejs.org/en/) - Server Environment

# ✍️ Autores <a id="authors"></a>

- [@OctaEDLP00](https://github.com/OctaEDLP00) - Idea & Initial work

Ver tambien la lista de [contributors](https://github.com/OctaEDLP00/cuando-juega-edlp/contributors) que participaron en este proyecto

<!--
# 🎉 Agradecimientos <a id="acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References:
 - [Estudiantes de la Plata](https://estudiantesdelaplata.com/) -->
