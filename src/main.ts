import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {installFortAwesome} from "./plugins/fortawesome.ts";

const app = createApp(App)

installFortAwesome(app)

app.mount('#app')
