import * as Yup from 'yup'

const ProfileFormValidationSchema = Yup.object().shape({
  name: Yup.string().required().min(3),
  lastname: Yup.string().required().min(3),
})

export default ProfileFormValidationSchema
