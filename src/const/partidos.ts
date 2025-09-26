import type { IPartidos } from './types.d'

export const partidos: Array<IPartidos> = [
  {
    theme: 'torneo-clausura',
    copa: 'Torneo Clausura',
    date: '2025-09-30T19:00:00',
    fecha: 10,
    footballTeam: {
      footballStadium: 'Estadio Marcelo Alberto Bielsa (newells)',
      img: {
        alt: 'Escudo del Equipo Newells',
        src: 'assets/shields/Newells.webp',
      },
      rawVs: 'newells',
      vs: "Newell's",
    },
    isVisitor: true,
  },
  {
    theme: 'torneo-clausura',
    copa: 'Torneo Clausura',
    date: '2025-10-05T16:30:00',
    fecha: 11,
    footballTeam: {
      footballStadium: null,
      img: {
        alt: 'Escudo del Equipo Barracas',
        src: 'assets/shields/Barracas.webp',
      },
      rawVs: 'barracas',
      vs: 'Barracas',
    },
    isVisitor: false,
  },
  {
    theme: 'torneo-clausura',
    copa: 'Torneo Clausura',
    date: '2025-10-11T21:15:00',
    fecha: 12,
    footballTeam: {
      footballStadium: 'Estadio Julio César Villagra (belgrano)',
      img: {
        alt: 'Escudo del Equipo Belgrano',
        src: '/assets/shields/Belgrano.webp',
      },
      rawVs: 'belgrano',
      vs: 'Belgrano',
    },
    isVisitor: true,
  },
  {
    theme: 'torneo-clausura',
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
      vs: 'Gimnasia',
    },
    isVisitor: false,
  },
  {
    theme: 'torneo-clausura',
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
      vs: 'Boca Jrs',
    },
    isVisitor: false,
  },
  {
    theme: 'torneo-clausura',
    copa: 'Torneo Clausura',
    date: null, // '',
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

