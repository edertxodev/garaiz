import moment from 'moment'

export const resolveMessageDateAndTime = (timestamp?: string) => {
  if (moment(timestamp).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
    return moment(timestamp).format('HH:mm')
  } else {
    return moment(timestamp).format('YYYY-MM-DD HH:mm')
  }
}
