import type { IPartidos } from './types.d'

export const partidos: Array<IPartidos> = [
	{
		copa: 'Copa Libertadores',
		date: '2025-05-14T21:30',
		fecha: 'fase de grupos',
		footballTeam: {
			footballStadium: 'Estadio Olímpico Nilton Santos (Botafogo)',
			img: {
				alt: 'Escudo del Equipo Botafogo',
				src: '/assets/shields/Botafogo.webp',
				width: '',
				height: ''
			},
			rawVs: 'botafogo',
			vs: 'Botafogo'
		},
		isVisitor: true
	},
	{
		copa: 'Copa Libertadores',
		date: '2025-05-27T21:30',
		fecha: 'fase de grupos',
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Carabobo',
				src: '/assets/shields/Carabobo.webp',
				width: '',
				height: ''
			},
			rawVs: 'carabobo',
			vs: 'Carabobo'
		},
		isVisitor: false
	},
	{
		copa: 'Copa Argentina',
		date: null, // '',
		fecha: '32avos',
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Aldosivi',
				src: '/assets/shields/Aldosivi.webp',
				width: '',
				height: ''
			},
			rawVs: 'aldosivi',
			vs: 'Aldosivi'
		},
		isVisitor: false
	},
] satisfies Array<IPartidos>

/*
const TorneoClausura = [
	{
		copa: 'Torneo Clausura',
		date: '2025-01-25T19:15',
		fecha: 1,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Union',
				src: 'assets/shields/Union.webp',
			},
			rawVs: 'union',
			vs: 'Union'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo Clausura',
		date: '2025-01-29T19:15',
		fecha: 2,
		footballTeam: {
			footballStadium: '',
			img: {
				alt: 'Escudo del Equipo Huracan',
				src: 'assets/shields/Huracan.webp',
			},
			rawVs: 'huracan',
			vs: 'Huracan'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Clausura',
		date: '2025-02-03T19:15',
		fecha: 3,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Racing Club',
				src: 'assets/shields/Racing.webp',
			},
			rawVs: 'racing',
			vs: 'Racing'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo Clausura',
		date: '2025-02-07T21:30',
		fecha: 4,
		footballTeam: {
			footballStadium: '',
			img: {
				alt: 'Escudo del Equipo ',
				src: 'assets/shields/Independiente(Mdz).webp',
			},
			rawVs: 'independientemdz',
			vs: 'Independiente (Mdz)'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Clausura',
		date: '2025-02-11T21:30',
		fecha: 5,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Banfield',
				src: 'assets/shields/Banfield.webp',
			},
			rawVs: 'banfield',
			vs: 'Banfield'
		},
		isVisitor: false // false -> partido de local... true -> para partido de visitante
	},
	{
		copa: 'Torneo Clausura',
		date: '2025-02-15T17:00',
		fecha: 6,
		footballTeam: {
			footballStadium: '',
			img: {
				alt: 'Escudo del Equipo Aldosivi',
				src: 'assets/shields/Aldosivi.webp',
			},
			rawVs: 'aldosivi',
			vs: 'Aldosivi'
		},
		isVisitor: true
	},
	{
		copa: 'Copa Argentina',
		date: null, // '2025-02-19T11:00',
		fecha: '16avos',
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo ',
				src: 'assets/shields/SarmientoDeLaBanda.webp',
			},
			rawVs: 'sarmientodelabanda',
			vs: 'Sarmiento (Banda)'
		},
	},
	{
		copa: 'Torneo Clausura',
		date: null, // '',
		fecha: 7,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Central Cba',
				src: 'assets/shields/CentralCba.webp',
			},
			rawVs: 'centralcba',
			vs: 'Central Cba'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo Clausura',
		date: null, // '',
		fecha: 8,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo River',
				src: 'assets/shields/River.webp',
			},
			rawVs: 'riverplate',
			vs: 'River Plate'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Clausura',
		date: null, // '',
		fecha: 9,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Defensa y Justicia',
				src: 'assets/shields/DyJ.webp',
			},
			rawVs: 'defensayjusticia',
			vs: 'DyJ'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Clausura',
		date: null, // '',
		fecha: 10,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Newells',
				src: 'assets/shields/Newells.webp',
			},
			rawVs: 'newells',
			vs: "Newell's"
		},
		isVisitor: false
	},
	{
		copa: 'Torneo Clausura',
		date: null, // '',
		fecha: 11,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Barracas',
				src: 'assets/shields/Barracas.webp',
			},
			rawVs: 'barracas',
			vs: 'Barracas'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Clausura',
		date: null, // '',
		fecha: 12,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Belgrano',
				src: '/assets/shields/Belgrano.webp',
			},
			rawVs: 'belgrano',
			vs: 'Belgrano'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo Clausura',
		date: null, // '',
		fecha: 13,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Gimnasia',
				src: '/assets/shields/Gimnasia.webp',
			},
			rawVs: 'gimnasia',
			vs: 'Gimnasia'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Clausura',
		date: null, // '',
		fecha: 14,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo BocaJrs',
				src: 'assets/shields/BocaJrs.webp',
			},
			rawVs: 'bocajrs',
			vs: 'Boca Jrs'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Clausura',
		date: null, // '',
		fecha: 15,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Tigre',
				src: 'assets/shields/Tigre.webp',
			},
			rawVs: 'tigre',
			vs: 'Tigre'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo Clausura',
		date: null, // '',
		fecha: 16,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo ArgentinosJrs',
				src: 'assets/shields/ArgentinosJrs.webp',
			},
			rawVs: 'argentinosjrs',
			vs: 'Argentinos Jrs'
		},
		isVisitor: true
	}
] satisfies Array<IPartidos>
*/
