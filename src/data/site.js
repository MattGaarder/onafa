import exterior from '../../assets/outside.png'
import logo from '../../assets/onafa_logo.svg'
import interior from '../../assets/interior.jpg'
import portrait from '../../assets/portrait.jpeg'
import table from '../../assets/food/table.jpg'
import tart from '../../assets/food/tart.jpg'
import spread from '../../assets/food/spread.jpg'
import ember from '../../assets/food/ember.jpg'
import smallPlates from '../../assets/food/small-plates.jpg'
import dessert from '../../assets/food/dessert.jpg'
import market from '../../assets/food/market.jpg'
import toast from '../../assets/food/toast.jpg'

export const media = {
  logo,
  exterior,
  interior,
  portrait,
  table,
  tart,
  spread,
  ember,
  smallPlates,
  dessert,
  market,
  toast
}

export const restaurant = {
  city: 'Teresópolis, RJ',
  address: ['Rua Alfredo Rebello Filho, 1100', 'Alto, Teresópolis — RJ'],
  mapsUrl: 'https://maps.app.goo.gl/gNokjynuWwGKom5RA',
  whatsappPhone: '552130600258'
}

export function reservationUrl(message = '') {
  return `https://api.whatsapp.com/send?phone=${restaurant.whatsappPhone}&text=${encodeURIComponent(message)}`
}
