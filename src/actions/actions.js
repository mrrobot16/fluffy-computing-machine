// Actions
// Here we import ActionTypes from types.js
export { SEND_DONATION } from './types'
export function sendDonation(donation){
  return { type: SEND_DONATION, donation }
}
