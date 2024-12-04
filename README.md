# CUANDO JUEGA EDLP

---

## Previzualizacion

<!--
<div align=center>
  <img width=300 height=200 src="./Desktop - DarkMode.jpg"
    alt="Previsualizacion del Dark Mode de la pagina"
  />
  <img width=300 height=200 src="./Desktop - LightMode.jpg"
    alt="Previsualizacion del Light Mode de la pagina"
  />
</div>
-->

Coming soon!!!

<br>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/818d8c25-ecf0-4ab1-945e-0495ab7d083d/deploy-status)](https://app.netlify.com/sites/cuando-juega-edlp/deploys)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/OctaEDLP00/cuando-juega-edlp.svg)](https://github.com/OctaEDLP00/The-Documentation-Compendium/pulls)
[![GitHub Issues](https://img.shields.io/github/issues/OctaEDLP00/cuando-juega-edlp.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)

</div>

---

<fieldset style="border: none;">
  <legend>📝 Tabla de contenidos</legend>
	<br>
  <ol style="text-decoration: none;">
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
    <fieldset style="border: none;">
      <legend>Extra</legend>
      <ol style="text-decoration: none;" type=1>
        <li>
          <a href='!#'></a>
        </li>
        <li>
          <a href='./CONTRIBUITING.md'>Contribuciones</a>
        </li>
      </ol>
    </fieldset>
  </ol>
</fieldset>

# 🧐 About <a id="about"></a>

Proyecto para saber el tiempo restante de los  proximos partidos de <br> [Estudiantes de La Plata](https://estudiantesdelaplata.com/). Hecho con mucho cariño ❤️🤍❤️🦁 <br>
ESTUDIOOOO ESTUDIOOOO!!!

# Estructura del Proyecto <a id="project_structure"></a>

```
/
├─ .vscode/
| └─ extension.json
| └─ launch.json
| └─ settings.json
|- node_modules/ carpeta de dependencias que necesita el proyecto para funcionar
├─ public/
| └─ assets/
| | └─ Todas la imagenes necesarias para la pagina (escudos)
| └─ favicon.webp
├─ src/
| ├─ components/
| | └─ head/
| | | └─ EasterEgg.astro
| | | └─ Links.astro
| | | └─ Meta.astro
| | └─ icons/
| | | └─ Github.astro
| | | └─ Instagram.astro
| | | └─ Threads.astro
| | | └─ Twitter.astro
| | └─ Badge.astro
| | └─ Card.astro
| | └─ Footer.astro
| | └─ Header.astro
| | └─ Link.astro
| | └─ Navbar.astro
| | └─ RenderTimeRemaining.tsx
| | └─ Temporizador.tsx
| ├─ const/
| | └─ index.ts
| | └─ konami-codes.ts
| | └─ partidos.ts
| | └─ socialNetwork.ts
| | └─ types.ts
| ├─ functions/
| | └─ createOgImage.js
| ├─ hooks/
| | └─ useRemainingTime.ts
| ├─ layouts/
| | └─ Layout.astro
| └─ pages/
| | └─ api/
| | | └─ partido/
| | | | └─ [copa].ts
| | | | └─ [visitor].ts
| | | | └─ [versus].ts
| | | └─ partidos.ts
| | └─ index.astro
| └─ styles/
| | └─ main.css
| └─ utils/
| | └─ alwaysPositive.ts
| | └─ cn.ts
| | └─ console.ts
| | └─ Dom.ts
| | └─ fetchAPI.ts
| | └─ fillZeros.ts
| | └─ getRemainingTime.ts
| | └─ index.ts
| | └─ Konami.ts
| | └─ mapValues.ts
| └── env.d.ts
└── package.json/
| | └─ .editorconfig
| | └─ .eslintrc.cjs
| | └─ .gitignore
| | └─ .npmrc
| | └─ .prettierrc
| | └─ astro.config.mts
| | └─ LICENSE-APACHE-2.0.txt
| | └─ LICENSE-MIT.txt
| | └─ netlify.toml
| | └─ .eslintignore
| | └─ pnpm-lock.yaml // ignorado por el archivo .gitignore al subirse al github
| | └─ tailwind.config.cjs
| | └─ tsconfig.json
| | └─ README.md/
| | └─ CONTRIBUITING.md
└─/
```

# Endpoints <a id="endpoints"></a>

- **GET** `/api/partidos`. Todos los partidos de local del año corriente

- **GET** `/api/partido/[EQUIPO]`. Obtener info de solo un equipo
  * `[EQUIPO]` nombre del equipo a buscar. Los valore posibles salen en `/api/partidos`
	* Ejemplo1 `api/partido/defensayjusticia`
	* Ejemplo2 `api/partido/tigre`

```json
	[
		{
			"copa": "Copa de La Liga",
			"date": "2024-05-12T00:00:00",
			"fecha": 1,
			"img": {
				"src": "/assets/Tigre.webp",
				"alt": "Escudo del Equipo Tigre"
			},
			"isVisitor": true,
			"vs": "Tigre"
		},
		{
			"copa": "Copa de La Liga",
			"date": "2024-09-29T00:00:00",
			"fecha": 16,
			"img": {
				"src": "/assets/DyJ.webp",
				"alt": "Escudo del Equipo Defensa y Justicia"
			},
			"isVisitor": false,
			"vs": "Defensa y Justicia"
		}
	]
```

- **GET** `/api/partido/[VISITANTE]`. Obtener info de solo los partidos que se juegan de local o visitante
  * `[VISITANTE]` unicos valores posibles:

	* `visitante` ó `local`

- **GET** `/api/partido/[COPA]`. Obtener info de solo los partidos que se juegan en cierta copa
  * `[COPA]` unicos valores posibles:

	* `copa-de-la-liga`
	* `copa-libertadores`
	* `copa-sudamericana`
	* `copa-argentina`
	* `noche-del-león`
	* `supercopa-argentina`

# Rutas <a id="routes"></a>

- [HOME](https://cuando-juega-edlp.netlify.app) => `/`
- [API]((https://cuando-juega-edlp.netlify.app/api/partidos)) => `/api/2023/partidos`
- [INFO EQUIPO](https://cuando-juega-edlp.netlify.app/api/partido/[EQUIPO]) => `/api/partido/[EQUIPO]`
- [INFO VISITANTE](https://cuando-juega-edlp.netlify.app/api/partido/[VISITANTE]) => `/api/partido/[VISITANTE]`
- [INFO COPA](https://cuando-juega-edlp.netlify.app/api/partido/[COPA]) => `/api/partido/[VISITANTE]`

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
