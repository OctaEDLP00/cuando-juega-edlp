import DiscordIcon from '@astro/icons/Discord.astro'
import GithubIcon from '@astro/icons/Github.astro'
import InstagramIcon from '@astro/icons/Instagram.astro'
import Threadsicon from '@astro/icons/Threads.astro'
import TwitterIcon from '@astro/icons/Twitter.astro'
import { REL, TARGET } from '../types/enum'
import { type ILinkProps } from '../types/main'

interface NetworkSocial extends ILinkProps {
  IconComponent: any
}

export const SOCIAL_NETWORKS: Array<NetworkSocial> = [
  {
    href: 'https://instagram.com/octaviocaro_22.tsx',
    IconComponent: InstagramIcon,
    target: TARGET.BLANK,
    rel: REL.NOOPENERNOREFERRER
  },
  {
    href: 'https://threads.net/octaviocaro_22.tsx',
    IconComponent: Threadsicon,
    target: TARGET.BLANK,
    rel: REL.NOOPENERNOREFERRER
  },
  {
    href: 'https://twitter.com/CaroOcta00',
    IconComponent: TwitterIcon,
    target: TARGET.BLANK,
    rel: REL.NOOPENERNOREFERRER
  },
  {
    href: 'https://github.com/OctaEDLP00/cuando-juega-edlp',
    IconComponent: GithubIcon,
    target: TARGET.BLANK,
    rel: REL.NOOPENERNOREFERRER
  },
  {
    href: 'https://discordapp.com/user/684060236549718132',
    IconComponent: DiscordIcon,
    target: TARGET.BLANK,
    rel: REL.NOOPENERNOREFERRER
  }
]
