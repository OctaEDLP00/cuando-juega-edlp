import type { IPartidos } from './types.d'

export const partidos: Array<IPartidos> = [
  {
    theme: 'torneo-clausura',
    copa: 'Torneo Clausura',
    date: '2025-11-09T21:30:00',
    fecha: 15,
    footballTeam: {
      footballStadium: 'Estadio Jose Dellagiovanna (tigre)',
      img: {
        alt: 'Escudo del Equipo Tigre',
        src: 'assets/shields/Tigre.webp',
      },
      rawVs: 'tigre',
      vs: 'Tigre',
    },
    isVisitor: true,
  },
  {
    theme: 'torneo-clausura',
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
      vs: 'Argentinos Jrs',
    },
    isVisitor: false,
  },
] satisfies Array<IPartidos>

