import type { IPartidos } from '@const/types.d'
import type { SportsEvent, WithContext } from 'schema-dts'

export function generateSchemaMarkup(
	{ isVisitor, date, isSuspended, copa, footballTeam }: IPartidos
): WithContext<SportsEvent> {
	const { vs, footballStadium, img: { src } } = footballTeam
	return {
		'@context': 'https://schema.org',
		'@type': 'SportsEvent',
		name: isVisitor ? `Partido de Fútbol: ${vs} vs Estudiantes de La Plata` : `Partido de Fútbol: Estudiantes de La Plata vs ${vs}`,
		startDate: date || '',
		eventStatus: isSuspended ? 'https://schema.org/EventPostponed' : 'https://schema.org/EventScheduled',
		location: {
			'@type': 'Place',
			name: isVisitor ? footballStadium : 'Estadio UNO (Jorge Luis Hirschi)'
		},
		performer: [
			{
				'@type': 'SportsTeam',
				name: 'Estudiantes de La Plata',
				logo: '/assets/Edlp.webp'
			},
			{
				'@type': 'SportsTeam',
				name: vs,
				logo: src
			}
		],
		subEvent: {
			'@type': 'SportsEvent',
			name: copa,
			startDate: date || ''
		}
	}
}

export function getSchemaScripts(
	partidos: Array<IPartidos>
): string {
	const schemaMarkups = partidos.map(partido => generateSchemaMarkup(partido))
	const schema = schemaMarkups.map(schemaMarkup => JSON.stringify(schemaMarkup)).join(',')
	return schema
}
