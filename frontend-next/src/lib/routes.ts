type Route = {
  name: string
  path: string
}

export const routes: Route[] = [
  { name: 'home', path: '/' },
  { name: 'login', path: '/auth/login' },
  { name: 'product', path: '/product' },
  { name: 'features', path: '/features' },
  { name: 'marketplace', path: '/marketplace' },
  { name: 'company', path: '/company' },
]

export function getRouteByName(name: string) {
  return routes.find((el) => el.name === name) ?? routes[0]
}
