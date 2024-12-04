import type { IPartidos } from './types'

export const partidos = [
	{
		copa: 'Torneo de La Liga',
		date: '2024-11-24T19:00',
		fecha: 24,
		footballTeam: {
			footballStadium: 'Estadio Cilindro de Avellaneda (Racing Club)',
			img: {
				alt: 'Escudo del Equipo Racing',
				src: '/assets/shields/Racing.webp'
			},
			rawVs: 'racing',
			vs: 'Racing'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-12-09T19:15',
		fecha: 26,
		footballTeam: {
			footballStadium: 'Estadio Julio Cesar Villagra (Belgrano)',
			img: {
				alt: 'Escudo del Equipo Belgrano',
				src: '/assets/shields/Belgrano.webp'
			},
			rawVs: 'belgrano',
			vs: 'Belgrano'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-12-15T00:00',
		fecha: 27,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Argentinos Jrs',
				src: '/assets/shields/ArgentinosJrs.webp'
			},
			rawVs: 'argentinosjrs',
			vs: 'Argentinos Jrs'
		},
		isVisitor: false
	}/*,
 {
  copa: 'Trofeo de Campeones',
		date: '2024-12-21T00:00',
		fecha: 'final',
		footballTeam: {
			footballStadium: 'Estadio Unico Madres de Ciudades',
			img: {
				alt: 'Escudo del Equipo',
				src: '/assets/shields/.webp'
			},
			rawVs: '',
			vs: ''
		},
		isVisitor: false
 }
 */
] satisfies Array<IPartidos>

/* const proximaFase = [ ] satisfies Array<IPartidos> */
