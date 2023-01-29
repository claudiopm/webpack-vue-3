//pegar instancia do vue
import { createApp } from 'vue';
import App from './App';
import routes from './routes';


const app = createApp(App);

app.use(routes)

//tudo sera montando dentro do index.html na div com id="app"
app.mount("#app")

