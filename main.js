import {attach} from './store.js';
import App from './components/App.js'

// attach App component into root
attach(App, document.getElementById('root'));