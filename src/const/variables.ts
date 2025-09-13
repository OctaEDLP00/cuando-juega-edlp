const FECHA_TYPE = {
	FINAL: 'final',
	SEMIFINAL: 'semifinal',
	'4tos': '4tos',
	'8avos': '8vos',
	'16avos': '16avos',
	'32avos': '32avos',
	'64avos': '64avos',
	UNICA: 'unica',
	FASE_GRUPOS: 'fase de grupos'
} as const

const COPA_TYPE = {
	COPA_LIGA: 'Copa de La Liga',
	TORNEO_LIGA: 'Torneo de La Liga',
	LIBERATDORES: 'Copa Libertadores',
	SUDAMERICANA: 'Copa Sudamericana',
	COPA_ARGENTINA: 'Copa Argentina',
	NOCHE_DEL_LEON: 'Noche del León',
	SUPERCOPA_ARGENTINA: 'Supercopa Argentina',
	TROFEO_CAMPEONES: 'Trofeo de Campeones',
	TORNEO_APERTURA: 'Torneo Apertura',
	TORNEO_CLAUSURA: 'Torneo Clausura'
} as const

const COPA_TYPE_WITHOUT_SPACES = {
	COPA_LIGA: 'copa-de-la-liga',
	TORNEO_LIGA: 'torneo-de-la-liga',
	LIBERATDORES: 'copa-libertadores',
	SUDAMERICANA: 'copa-sudamericana',
	COPA_ARGENTINA: 'copa-argentina',
	NOCHE_DEL_LEON: 'noche-del-león',
	SUPERCOPA_ARGENTINA: 'supercopa-argentina',
	TROFEO_CAMPEONES: 'trofeo-de-campeones',
	TORNEO_APERTURA: 'torneo-apertura',
	TORNEO_CLAUSURA: 'torneo-clausura'
} as const

const REL_TYPE = {
	NOOPENERNOREFERRER: 'noopener noreferrer',
	NOOPENER: 'noopener',
	NOREFERRER: 'noreferrer'
} as const

const TARGET_TYPE = {
	BLANK: '_blank',
	PARENT: '_parent',
	SELF: '_self',
	TOP: '_top'
} as const

const FOOTBALL_STADIUM_LOCAL = {
	ALDOSIVI: 'Estadio José María Minella (aldosivi)',
	ARGENTINOS_JRS: 'Estadio Diego Armando Maradona (arg jrs)',
	ATLE_TUCUMAN: 'Estadio Monumental Presidente Jose Fierro (atle tucuman)',
	BANFIELD: 'Estadio Florencio Solá (banfield)',
	BARRACAS: 'Estadio Cludio Fabián Tapia (barracas)',
	BELGRANO: 'Estadio Julio César Villagra (belgrano)',
	BOCA_JRS: 'Estadio Alberto José Armando (boca jrs)',
	CENTRAL_CBA: 'Estadio Unico Madre de Ciudades (central cba)',
	D_RIESTRA: 'Estadio Guillermo Laza (riestra)',
	DEFENSA_Y_JUSTICIA: 'Estadio Norberto Tito Tomaghello (dyj)',
	GIMNASIA_ESGRIMA_LP: 'Estadio Juan Carmello Zerillo (gimnasia)',
	GODOY_CRUZ: 'Estadio Feliciano Gambarte (godoy cruz)',
	HURACAN: 'Estadio Tomás Adolfo Ducó (huracan)',
	INDEPENDIENTE_MDZ: 'Estadio Bautista Gargantini (independiente mdz)',
	INDEPENDIENTE: 'Estadio Libertadores de América (independiente)',
	INSTITUTO: 'Estadio Juan Domingo Perón (instituto)',
	LANUS: 'Estadio Ciudad de Lanus Néstor Díaz Pérez (lanus)',
	NEWELLS: 'Estadio Marcelo Alberto Bielsa (newells)',
	PLATENSE: 'Estadio Ciudad de Vicente López (platense)',
	RACING: 'Estadio Presidente Juan Domingo Perón (racing)',
	RIVER: 'Estadio Mâs Monumental Antonio Vespucio Liberti (river)',
	ROSARIO_CENTRAL: 'Estadio Gigante de Arroyito Antonio Rodenas (rosario central)',
	SAN_LORENZO: 'Estadio Pedro Bidegaín Nuevo Gasometro (san lorenzo)',
	SAN_MARTIN: 'Estadio Ingeniero Hilario Sánchez (san martin)',
	SARMIENTO: 'Estadio Eva Peron de Junin (sarmiento)',
	TALLERES: 'Estadio Mario Alberto Kempes (talleres)',
	TIGRE: 'Estadio Jose Dellagiovanna (tigre)',
	UNION: 'Estadio 15 de Abril (unión)',
	VELEZ: 'Estadio José Amalfiitani (velez)'
} as const

const FOOTBALL_STADIUM_INTERNAZIONAL = {
  BOTAFOGO: 'Estadio Olímpico Nilton Santos (Botafogo)',
  U_DE_CHILE: 'Estadio Nacional Julio Martinez Prádanos (U. de Chile)',
  CARABOBO: 'Estadio Polideportivo Misael Delgado (Carabobo)',
  FLAMENGO: 'Estadio Maracaná (Flamengo)',
} as const

export {
	COPA_TYPE,
	COPA_TYPE_WITHOUT_SPACES,
	FECHA_TYPE, FOOTBALL_STADIUM_LOCAL, FOOTBALL_STADIUM_INTERNAZIONAL, REL_TYPE, TARGET_TYPE
}

