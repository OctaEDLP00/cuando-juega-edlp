import { COPA_TYPE, FECHA_TYPE } from './types'

/**
 * El formato es de tipo Fecha
 * que lleva los siguientes valores
 * `año`-`mes`-`dia`T`hora`:`minutos` ó
 * `año`-`mes`-`dia`T`hora`:`minutos:segundos`
*/
type DateType =
	`${number}-${number}-${number}T${number}:${number}`
	| `${number}-${number}-${number}T${number}:${number}:${number}`
type Fecha = typeof FECHA_TYPE[keyof typeof FECHA_TYPE]
type Copa = typeof COPA_TYPE[keyof typeof COPA_TYPE]

interface ImgProps {
	alt: string
	height?: string | number
	src: string
	width?: string | number
}

interface IPartidos {
	copa: Copa
	date: DateType | null
	fecha: Fecha | number,
	img: ImgProps
	isSuspended?: boolean
	isVisitor?: boolean | null
	rawVs: string
	vs: string
}

// Segunda Fase: 27 Partidos, 13 de Local - 14 de Visitante
// Primer partido: vs Tigre
export const partidos: Array<IPartidos> = [
	{
		copa: 'Torneo de La Liga',
		date: '2024-05-19T19:00',
		fecha: 2,
		img: {
			alt: 'Escudo del Equipo Deportivo Riestra',
			src: '/assets/DRiestra.webp'
		},
		isVisitor: false,
		rawVs: 'riestra',
		vs: 'Riestra'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-05-26T21:15',
		fecha: 3,
		img: {
			alt: 'Escudo del Equipo Lanus',
			src: '/assets/Lanus.webp'
		},
		isVisitor: true,
		rawVs: 'lanus',
		vs: 'Lanus'
	},
	{
		copa: 'Copa Libertadores',
		date: '2024-05-29T19:00',
		fecha: 'fase de grupos',
		img: {
			alt: 'Escudo del Equipo Huachipato',
			src: '/assets/Huachipato.webp'
		},
		isVisitor: false,
		rawVs: 'huachipato',
		vs: 'Huachipato'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-06-02T21:15',
    fecha: 4,
		img: {
			alt: 'Escudo del Equipo Godoy Cruz',
			src: '/assets/GodoyCruz.webp'
		},
		isVisitor: false,
		rawVs: 'godoycruz',
		vs: 'Godoy Cruz'
	},
	{
		copa: 'Copa Libertadores',
		date: '2024-06-08T19:00',
		fecha: 'fase de grupos',
		img: {
			alt: 'Escudo del Equipo Gremio',
			src: '/assets/Gremio.webp'
		},
		isVisitor: true,
		rawVs: 'gremio',
		vs: 'Gremio'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-06-12T00:00',
    fecha: 5,
		img: {
			alt: 'Escudo del Equipo Sarmiento',
			src: '/assets/Sarmiento.webp'
		},
		isVisitor: true,
		rawVs: 'sarmiento',
		vs: 'Sarmiento'
  },
  {
		copa: 'Torneo de La Liga',
		date: '2024-07-21T00:00',
    fecha: 6,
		img: {
			alt: 'Escudo del Equipo Union',
			src: '/assets/Union.webp'
		},
		isVisitor: false,
		rawVs: 'union',
		vs: 'Union'
  },
  {
		copa: 'Torneo de La Liga',
		date: '2024-07-24T00:00',
    fecha: 7,
		img: {
			alt: 'Escudo del Equipo Huracan',
			src: '/assets/Huracan.webp'
		},
		isVisitor: true,
		rawVs: 'huracan',
		vs: 'Huracan'
  },
  {
		copa: 'Torneo de La Liga',
		date: '2024-07-28T00:00',
    fecha: 8,
		img: {
			alt: 'Escudo del Equipo Gimnasia Y Esgrima de La Plata',
			src: '/assets/Gimnasia.webp'
		},
		isVisitor: false,
		rawVs: 'gimnasia',
		vs: 'Gimnasia'
  },
  {
		copa: 'Torneo de La Liga',
		date: '2024-08-04T00:00',
    fecha: 9,
		img: {
			alt: 'Escudo del Equipo Newell`s',
			src: '/assets/Newells.webp'
		},
		isVisitor: true,
		rawVs: 'newells',
		vs: 'Newell`s'
  },
  {
		copa: 'Torneo de La Liga',
		date: '2024-08-11T00:00',
    fecha: 10,
		img: {
			alt: 'Escudo del Equipo Independiente',
			src: '/assets/Independiente.webp'
		},
		isVisitor: false,
		rawVs: 'independiente',
		vs: 'Independiente'
  },
  {
		copa: 'Torneo de La Liga',
		date: '2024-08-18T00:00',
    fecha: 11,
		img: {
			alt: 'Escudo del Equipo Atletico de Tucuman',
			src: '/assets/AtleTucuman.webp'
		},
		isVisitor: true,
		rawVs: 'atleticotucuman',
		vs: 'Atletico (Tuc)'
  },
  {
		copa: 'Torneo de La Liga',
		date: '2024-08-25T00:00',
    fecha: 12,
		img: {
			alt: 'Escudo del Equipo BocaJrs',
			src: '/assets/BocaJrs.webp'
		},
		isVisitor: false,
		rawVs: 'bocajrs',
		vs: 'Boca Jrs'
  },
  {
		copa: 'Torneo de La Liga',
		date: '2024-09-01T00:00',
    fecha: 13,
		img: {
			alt: 'Escudo del Equipo Talleres',
			src: '/assets/Talleres.webp'
		},
		isVisitor: true,
		rawVs: 'talleres',
		vs: 'Talleres'
  },
  {
		copa: 'Torneo de La Liga',
		date: '2024-09-15T00:00',
    fecha: 14,
		img: {
			alt: 'Escudo del Equipo Platense',
			src: '/assets/Platense.webp'
		},
		isVisitor: false,
		rawVs: 'platense',
		vs: 'Platense'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-09-22T00:00',
		fecha: 15,
		img: {
			alt: 'Escudo del Equipo Velez',
			src: '/assets/Velez.webp'
		},
		isVisitor: true,
		rawVs: 'velez',
		vs: 'Velez'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-09-29T00:00',
		fecha: 16,
		img: {
			alt: 'Escudo del Equipo Defensa y Justicia',
			src: '/assets/DyJ.webp'
		},
		isVisitor: false,
		rawVs: 'defensayjusticia',
		vs: 'Defensa y Justicia'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-10-06T00:00',
		fecha: 17,
		img: {
			alt: 'Escudo del Equipo Banfield',
			src: '/assets/Banfield.webp'
		},
		isVisitor: true,
		rawVs: 'banfield',
		vs: 'Banfield'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-10-20T00:00',
		fecha: 18,
		img: {
			alt: 'Escudo del Equipo Instituto',
			src: '/assets/Instituto.webp'
		},
		isVisitor: false,
		rawVs: 'instituto',
		vs: 'Instituto'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-10-27T00:00',
		fecha: 19,
		img: {
			alt: 'Escudo del Equipo Barracas',
			src: '/assets/Barracas.webp'
		},
		isVisitor: true,
		rawVs: 'barracascentral',
		vs: 'Barracas Central'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-11-03T00:00',
		fecha: 20,
		img: {
			alt: 'Escudo del Equipo Independiente(Mdz)',
			src: '/assets/Independiente(Mdz).webp'
		},
		isVisitor: false,
		rawVs: 'independientedemendoza',
		vs: 'Indep (Mdz)'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-11-06T00:00',
		fecha: 21,
		img: {
			alt: 'Escudo del Equipo San Lorenzo',
			src: '/assets/SanLorenzo.webp'
		},
		isVisitor: true,
		rawVs: 'sanlorenzo',
		vs: 'San Lorenzo'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-11-10T00:00',
		fecha: 22,
		img: {
			alt: 'Escudo del Equipo Central Cordoba',
			src: '/assets/CentralCba.webp'
		},
		isVisitor: true,
		rawVs: 'centralcordoba',
		vs: 'Central Cordoba'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-11-20T00:00',
		fecha: 23,
		img: {
			alt: 'Escudo del Equipo Rosario Central',
			src: '/assets/RosarioCentral.webp'
		},
		isVisitor: false,
		rawVs: 'rosariocentral',
		vs: 'Rosario Central'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-11-24T00:00',
		fecha: 24,
		img: {
			alt: 'Escudo del Equipo Racing',
			src: '/assets/Racing.webp'
		},
		isVisitor: true,
		rawVs: 'racing',
		vs: 'Racing'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-12-01T00:00',
		fecha: 25,
		img: {
			alt: 'Escudo del Equipo River Plate',
			src: '/assets/River.webp'
		},
		isVisitor: false,
		rawVs: 'riverplate',
		vs: 'River Plate'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-12-08T00:00',
		fecha: 26,
		img: {
			alt: 'Escudo del Equipo Belgrano',
			src: '/assets/Belgrano.webp'
		},
		isVisitor: true,
		rawVs: 'belgrano',
		vs: 'Belgrano'
	},
	{
		copa: 'Torneo de La Liga',
		date: '2024-12-15T00:00',
		fecha: 27,
		img: {
			alt: 'Escudo del Equipo Argentinos Jrs',
			src: '/assets/ArgentinosJrs.webp'
		},
		isVisitor: false,
		rawVs: 'argentinosjrs',
		vs: 'Argentinos Jrs'
	}
]

/*
const proximaFase: Array<IPartidos> = [

]
*/
