import AppRoutes from 'lib/routes/routes'

export const getRoutePathByName = (name: string, params?: any) => {
  const path = AppRoutes.find((el) => el.name === name)?.path
  if (path) {
    let truncatedPath = path
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key]) {
          truncatedPath = truncatedPath.replace(`:${key}`, params[key])
        }
      })
    }

    return truncatedPath
  }

  return ''
}
