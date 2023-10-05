import { getRoutePathByName } from 'lib/routes/helpers'

export const LOCAL_STORAGE_KEYS = {
  token: 'token',
  user: 'user',
  locale: 'locale',
}

export const DEFAULT_PAGE_SIZE = 25

interface LinkItem {
  name: string
  path: string
}

export const LINK_ITEMS: LinkItem[] = [
  { name: 'home', path: getRoutePathByName('home') },
  { name: 'chat', path: getRoutePathByName('chatList') },
]
