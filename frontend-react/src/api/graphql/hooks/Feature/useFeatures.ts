import { ApiResponse } from 'api/utils'
import { FeatureEntity, useGetFeaturesQuery } from 'api/graphql/generated/graphql'
import graphqlClient from 'api/graphql/graphqlClient'

const useFeatures = (): ApiResponse<FeatureEntity> => {
  const response = useGetFeaturesQuery(graphqlClient, {}, { refetchOnWindowFocus: false })

  return {
    data: response.data?.feature?.data,
    status: response.status,
    refetch: response.refetch,
  }
}

export default useFeatures
