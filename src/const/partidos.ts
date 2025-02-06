import type { IPartidos } from './types.d'

export const partidos = [
	{
		copa: 'Torneo Apertura',
		date: '2025-02-07T22:15',
		fecha: 4,
		footballTeam: {
			footballStadium: 'Estadio Bautista Gargantini (independiente mdz)',
			img: {
				alt: 'Escudo del Equipo Indep de mendoza',
				src: 'assets/shields/Independiente(Mdz).webp',
				width: 399,
				height: 399
			},
			rawVs: 'independientemdz',
			vs: 'Indep (Mdz)'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Apertura',
		date: '2025-02-11T20:00',
		fecha: 5,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Banfield',
				src: 'assets/shields/Banfield.webp',
				width: 500,
				height: 500
			},
			rawVs: 'banfield',
			vs: 'Banfield'
		},
		isVisitor: false // false -> partido de local... true -> para partido de visitante
	},
	{
		copa: 'Torneo Apertura',
		date: '2025-02-15T17:00',
		fecha: 6,
		footballTeam: {
			footballStadium: 'Estadio José María Minella (aldosivi)',
			img: {
				alt: 'Escudo del Equipo Aldosivi',
				src: 'assets/shields/Aldosivi.webp',
				width: 65,
				height: 65
			},
			rawVs: 'aldosivi',
			vs: 'Aldosivi'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Apertura',
		date: '2025-02-21T19:15',
		fecha: 7,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Central Cba',
				src: 'assets/shields/CentralCba.webp',
				width: 200,
				height: 200
			},
			rawVs: 'centralcba',
			vs: 'Central Cba'
		},
		isVisitor: false
	},
	{
		copa: 'Copa Argentina',
		date: '2025-02-25T19:00',
		fecha: '32avos',
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Sarmiento (Banda)',
				src: 'assets/shields/SarmientoDeLaBanda.webp',
				width: 320,
				height: 320
			},
			rawVs: 'sarmientodelabanda',
			vs: 'Sarmiento (Banda)'
		},
	},
	{
		copa: 'Torneo Apertura',
		date: '2025-03-01T19:15',
		fecha: 8,
		footballTeam: {
			footballStadium: 'Estadio Mâs Monumental Antonio Vespucio Liberti (river)',
			img: {
				alt: 'Escudo del Equipo River',
				src: 'assets/shields/River.webp',
				width: 100,
				height: 120
			},
			rawVs: 'riverplate',
			vs: 'River Plate'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Apertura',
		date: '2025-03-09T17:00',
		fecha: 9,
		footballTeam: {
			footballStadium: 'Estadio Norberto Tito Tomaghello (dyj)',
			img: {
				alt: 'Escudo del Equipo DyJ',
				src: 'assets/shields/DyJ.webp',
				width: 619,
				height: 729
			},
			rawVs: 'defensayjusticia',
			vs: 'DyJ'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Apertura',
		date: '2025-03-15T18:30',
		fecha: 10,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Newells',
				src: 'assets/shields/Newells.webp',
				width: 130,
				height: 160
			},
			rawVs: 'newells',
			vs: "Newell's"
		},
		isVisitor: false
	},
	{
		copa: 'Torneo Apertura',
		date: null, // '',
		fecha: 11,
		footballTeam: {
			footballStadium: 'Estadio Cludio Fabián Tapia (barracas)',
			img: {
				alt: 'Escudo del Equipo Barracas',
				src: 'assets/shields/Barracas.webp',
				width: 124,
				height: 160
			},
			rawVs: 'barracas',
			vs: 'Barracas'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Apertura',
		date: null, // '',
		fecha: 12,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Belgrano',
				src: '/assets/shields/Belgrano.webp',
				width: 129,
				height: 129
			},
			rawVs: 'belgrano',
			vs: 'Belgrano'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo Apertura',
		date: null, // '',
		fecha: 13,
		footballTeam: {
			footballStadium: 'Estadio Juan Carmello Zerillo (gimnasia)',
			img: {
				alt: 'Escudo del Equipo Gimnasia',
				src: '/assets/shields/Gimnasia.webp',
				width: 160,
				height: 160
			},
			rawVs: 'gimnasia',
			vs: 'Gimnasia'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Apertura',
		date: null, // '',
		fecha: 14,
		footballTeam: {
			footballStadium: 'Estadio Alberto José Armando (boca jrs)',
			img: {
				alt: 'Escudo del Equipo Boca',
				src: 'assets/shields/BocaJrs.webp',
				width: 138,
				height: 160
			},
			rawVs: 'bocajrs',
			vs: 'Boca Jrs'
		},
		isVisitor: true
	},
	{
		copa: 'Torneo Apertura',
		date: null, // '',
		fecha: 15,
		footballTeam: {
			footballStadium: null,
			img: {
				alt: 'Escudo del Equipo Tigre',
				src: 'assets/shields/Tigre.webp',
				width: 254,
				height: 400
			},
			rawVs: 'tigre',
			vs: 'Tigre'
		},
		isVisitor: false
	},
	{
		copa: 'Torneo Apertura',
		date: null, // '',
		fecha: 16,
		footballTeam: {
			footballStadium: 'Estadio Diego Armando Maradona (arg jrs)',
			img: {
				alt: 'Escudo del Equipo Arg Jrs',
				src: 'assets/shields/ArgentinosJrs.webp',
				width: 471,
				height: 566
			},
			rawVs: 'argentinosjrs',
			vs: 'Argentinos Jrs'
		},
		isVisitor: true
	}
	/*
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
				alt: 'Escudo del Equipo ',
				src: 'assets/shields/Aldosivi.webp',
			},
			rawVs: '',
			vs: ''
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
				alt: 'Escudo del Equipo ',
				src: 'assets/shields/CentralCba.webp',
			},
			rawVs: '',
			vs: ''
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
				alt: 'Escudo del Equipo ',
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
				alt: 'Escudo del Equipo ',
				src: 'assets/shields/DyJ.webp',
			},
			rawVs: '',
			vs: ''
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
				alt: 'Escudo del Equipo ',
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
				alt: 'Escudo del Equipo ',
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
				alt: 'Escudo del Equipo ',
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
				alt: 'Escudo del Equipo ',
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
				alt: 'Escudo del Equipo ',
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
				alt: 'Escudo del Equipo ',
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
				alt: 'Escudo del Equipo ',
				src: 'assets/shields/ArgentinosJrs.webp',
			},
			rawVs: 'argentinosjrs',
			vs: 'Argentinos Jrs'
		},
		isVisitor: true
	}
	*/
] satisfies Array<IPartidos>

/* const proximaFase = [ ] satisfies Array<IPartidos> */
