import { Feature } from 'api/graphql/generated/graphql'
import { atom } from 'recoil'

export default atom<Feature>({
  key: 'featureState',
  default: {},
})
