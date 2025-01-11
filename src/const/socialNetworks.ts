// import DiscordIcon from '@components/icons/Discord.astro'
import GithubIcon from '@components/icons/Github.astro'
import InstagramIcon from '@components/icons/Instagram.astro'
import Threadsicon from '@components/icons/Threads.astro'
import TwitterIcon from '@components/icons/Twitter.astro'
import type { INetworkSocial } from './types.d'

export const SOCIAL_NETWORKS: Array<INetworkSocial> = [
  {
    href: 'https://instagram.com/octaviocaro_23.tsx',
    IconComponent: InstagramIcon,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
		href: 'https://threads.net/@octaviocaro_23.tsx',
    IconComponent: Threadsicon,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    href: 'https://twitter.com/CaroOcta00',
    IconComponent: TwitterIcon,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    href: 'https://github.com/OctaEDLP00/cuando-juega-edlp',
    IconComponent: GithubIcon,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  /*
  {
    href: 'https://discordapp.com/users/684060236549718132',
    IconComponent: DiscordIcon,
    target: '_blank',
    rel: 'noopener noreferrer',
    disabled: true
  }
  */
]
