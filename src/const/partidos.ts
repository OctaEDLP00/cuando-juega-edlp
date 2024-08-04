import type { IPartidos } from './types'

export const partidos: Array<IPartidos> = [
	{
		copa: 'Torneo de La Liga',
		date: '2024-08-11T20:00',
		fecha: 10,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Independiente',
				src: '/assets/shields/Independiente.webp'
			},
			rawVs: 'independiente',
			vs: 'Independiente'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-08-18T17:00',
		fecha: 11,
		footballTeam: {
			footballStadium: 'Estadio Monumental José Fierro (Club Atlético de Tucumán)',
			img: {
				alt: 'Escudo del Equipo Atlético de Tucumán',
				src: '/assets/shields/AtleTucuman.webp'
			},
			rawVs: 'atleticotucuman',
			vs: 'Atlético (Tuc)'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-08-26T21:00',
		fecha: 12,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo BocaJrs',
				src: '/assets/shields/BocaJrs.webp'
			},
			rawVs: 'bocajrs',
			vs: 'Boca Jrs'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // 2024-09-01T00:00,
		fecha: 13,
		footballTeam: {
			footballStadium: 'Estadio Fransisco Cabesés "La Boutique de Barrio Jardin" (Club Atletico Talleres)',
			img: {
				alt: 'Escudo del Equipo Talleres',
				src: '/assets/shields/Talleres.webp'
			},
			rawVs: 'talleres',
			vs: 'Talleres'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-09-15T00:00',
		fecha: 14,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Platense',
				src: '/assets/shields/Platense.webp'
			},
			rawVs: 'platense',
			vs: 'Platense'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-09-22T00:00',
		fecha: 15,
		footballTeam: {
			footballStadium: 'Estadio José Amalfitani (Velez Sarsfield)',
			img: {
				alt: 'Escudo del Equipo Velez',
				src: '/assets/shields/Velez.webp'
			},
			rawVs: 'velez',
			vs: 'Velez'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-09-29T00:00',
		fecha: 16,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Defensa y Justicia',
				src: '/assets/shields/DyJ.webp'
			},
			rawVs: 'defensayjusticia',
			vs: 'Defensa y Justicia'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-10-06T00:00',
		fecha: 17,
		footballTeam: {
			footballStadium: 'Estadio Florencio Sola (Banfield)',
			img: {
				alt: 'Escudo del Equipo Banfield',
				src: '/assets/shields/Banfield.webp'
			},
			rawVs: 'banfield',
			vs: 'Banfield'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-10-20T00:00',
		fecha: 18,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Instituto',
				src: '/assets/shields/Instituto.webp'
			},
			rawVs: 'instituto',
			vs: 'Instituto'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-10-27T00:00',
		fecha: 19,
		footballTeam: {
			footballStadium: 'Estadio Claudio Fabian Tapia (Barracas)',
			img: {
				alt: 'Escudo del Equipo Barracas',
				src: '/assets/shields/Barracas.webp'
			},
			rawVs: 'barracascentral',
			vs: 'Barracas Central'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-11-03T00:00',
		fecha: 20,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Independiente(Mdz)',
				src: '/assets/shields/Independiente(Mdz).webp'
			},
			rawVs: 'independientedemendoza',
			vs: 'Indep (Mdz)'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-11-06T00:00',
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
		date: null, // '2024-11-10T00:00',
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
]

/*
const proximaFase: Array<IPartidos> = [

]
*/
