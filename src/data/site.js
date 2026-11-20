import exterior from '../../assets/outside.png'
import logo from '../../assets/onafa_logo.svg'
import interior from '../../assets/onafã_ambientes-24.jpg'
import portrait from '../../assets/portrait.jpeg'
import table from '../../assets/food/onafã_shooting2-93 - Copia-crop.jpg'
import tart from '../../assets/food/onafã_shooting2-80-crop.jpg'
import spread from '../../assets/food/onafã_shooting2-64-crop.jpg'
import ember from '../../assets/food/ONAFÃ_shooting1_fev25-11-crop.jpg'
import smallPlates from '../../assets/food/onafã_shooting2-40-crop.jpg'
import dessert from '../../assets/food/ONAFÃ_shooting25-6-crop.jpg'
import market from '../../assets/food/onafã_shooting1-43-crop.jpg'
import toast from '../../assets/food/onafã_shooting2-48-crop.jpg'

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
