import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './styles/app.scss'
import App from './App.vue'

createApp(App)
  .use(Quasar, {
    config: {
      brand: {
        primary: '#17241f',
        secondary: '#b54b34',
        accent: '#d9ad57'
      }
    }
  })
  .mount('#app')
