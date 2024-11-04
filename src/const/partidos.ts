import type { IPartidos } from './types'

export const partidos = [
	{
		copa: 'Torneo de La Liga',
		date: '2024-11-05T18:45',
		fecha: 21,
		footballTeam: {
			footballStadium: 'Estadio Nuevo Gasometro (San Lorenzo)',
			img: {
				alt: 'Escudo del Equipo San Lorenzo',
				src: '/assets/shields/SanLorenzo.webp'
			},
			rawVs: 'sanlorenzo',
			vs: 'San Lorenzo'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-11-10T15:00',
		fecha: 22,
		footballTeam: {
			footballStadium: 'Estadio Unico Ciudad de Madres (Central Cordoba)',
			img: {
				alt: 'Escudo del Equipo Central Cordoba',
				src: '/assets/shields/CentralCba.webp'
			},
			rawVs: 'centralcordoba',
			vs: 'Central Cordoba'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-11-20T00:00',
		fecha: 23,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Rosario Central',
				src: '/assets/shields/RosarioCentral.webp'
			},
			rawVs: 'rosariocentral',
			vs: 'Rosario Central'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-11-24T00:00',
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
		date: null, // '2024-12-01T00:00',
		fecha: 25,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo River Plate',
				src: '/assets/shields/River.webp'
			},
			rawVs: 'riverplate',
			vs: 'River Plate'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-12-08T00:00',
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
		date: null, // '2024-12-15T00:00',
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
	}
] satisfies Array<IPartidos>

/* const proximaFase = [ ] satisfies Array<IPartidos> */
