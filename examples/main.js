import Vue, { createApp } from 'vue'
import App from './App.vue'

import "../components/css/demo.scss";
import "../components/css/card.scss";
import Demo from "../components/lib/demo/index.js"
import Card from "../components/lib/card/index.js"

const app = createApp(App)
app.use(Demo)
app.use(Card)

app.mount('#app')
