import type { IPartidos } from './types'
// Segunda Fase: 27 Partidos, 13 de Local - 14 de Visitante
// Primer partido: vs Tigre
export const partidos: Array<IPartidos> = [
 {
		copa: 'Copa Argentina',
		date: '2024-07-17T18:00',
		fecha: '16avos',
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Central Cordoba',
				src: '/assets/CentralCba.webp'
			},
			rawVs: 'central cba',
			vs: 'Cantral Cba'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-07-21T17:15',
		fecha: 6,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Union',
				src: '/assets/Union.webp'
			},
			rawVs: 'union',
			vs: 'Union'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-07-24T19:30',
		fecha: 7,
		footballTeam: {
			footballStadium: 'Estadio Tomás Adolfo Ducó (Huracan)',
			img: {
				alt: 'Escudo del Equipo Huracan',
				src: '/assets/Huracan.webp'
			},
			rawVs: 'huracan',
			vs: 'Huracan'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-07-28T15:00',
		fecha: 8,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Gimnasia Y Esgrima de La Plata',
				src: '/assets/Gimnasia.webp'
			},
			rawVs: 'gimnasia',
			vs: 'Gimnasia'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-08-02T20:00',
		fecha: 9,
		footballTeam: {
			footballStadium: 'Estadio Marcelo Bielsa (Newell\'s Old Boys)',
			img: {
				alt: 'Escudo del Equipo Newell`s',
				src: '/assets/Newells.webp'
			},
			rawVs: 'newells',
			vs: 'Newell`s'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-08-11T00:00',
		fecha: 10,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Independiente',
				src: '/assets/Independiente.webp'
			},
			rawVs: 'independiente',
			vs: 'Independiente'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-08-18T00:00',
		fecha: 11,
		footballTeam: {
			footballStadium: 'Estadio Monumental José Fierro (Club Atlético de Tucumán)',
			img: {
				alt: 'Escudo del Equipo Atlético de Tucumán',
				src: '/assets/AtleTucuman.webp'
			},
			rawVs: 'atleticotucuman',
			vs: 'Atlético (Tuc)'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo de La Liga',
		date: null, // '2024-08-25T00:00',
		fecha: 12,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo BocaJrs',
				src: '/assets/BocaJrs.webp'
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
				src: '/assets/Talleres.webp'
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
				src: '/assets/Platense.webp'
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
				src: '/assets/Velez.webp'
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
				src: '/assets/DyJ.webp'
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
				src: '/assets/Banfield.webp'
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
				src: '/assets/Instituto.webp'
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
				src: '/assets/Barracas.webp'
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
				src: '/assets/Independiente(Mdz).webp'
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
				src: '/assets/SanLorenzo.webp'
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
				src: '/assets/CentralCba.webp'
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
				src: '/assets/RosarioCentral.webp'
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
				src: '/assets/Racing.webp'
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
				src: '/assets/River.webp'
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
				src: '/assets/Belgrano.webp'
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
				src: '/assets/ArgentinosJrs.webp'
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
