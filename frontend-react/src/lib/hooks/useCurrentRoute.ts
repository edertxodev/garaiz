import { matchRoutes, useLocation } from 'react-router-dom'
import AppRoutes from 'lib/routes/routes'

const useCurrentRoute = () => {
  const location = useLocation()
  const matches = matchRoutes(AppRoutes, location)

  return matches?.[0]?.route
}

export default useCurrentRoute
