import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import interceptor from './plugins/axios.interceptor';
const app = createApp(App);
app.use(interceptor)
app.mount('#app')
