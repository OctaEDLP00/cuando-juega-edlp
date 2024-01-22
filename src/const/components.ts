import Badge from '@components/Badge.astro';
import Github from '@components/icons/Github.astro';
import Instagram from '@components/icons/Instagram.astro';
import Threads from '@components/icons/Threads.astro';
import Twitter from '@components/icons/Twitter.astro';
import Temporizador from '@components/Temporizador.tsx';
import { ToggleTheme as Toggle } from '@components/Toggle.tsx';

import { Components } from '@/types/main';

export const components: Array<Components> = [
  {
    name: 'github',
    ComponentDoc: Github
  },
  {
    name: 'instagram',
    ComponentDoc: Instagram
  },
  {
    name: 'threads',
    ComponentDoc: Threads
  },
  {
    name: 'twitter',
    ComponentDoc: Twitter
  },
  {
    name: 'badge',
    ComponentDoc: Badge
  },
  {
    name: 'temporizador',
    ComponentDoc: Temporizador
  },
  {
    name: 'toggle',
    ComponentDoc: Toggle
  }
]
