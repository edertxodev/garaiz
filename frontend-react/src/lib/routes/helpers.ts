import AppRoutes from 'lib/routes/routes'

export const getRoutePathByName = (name: string) => {
  return AppRoutes.find((el) => el.name === name)?.path ?? ''
}
