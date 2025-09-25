import './style.css'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://github.com/OscarJulianCadena" target="_blank">
      <img src="https://img1.picmix.com/output/stamp/normal/6/0/4/1/2271406_9de3c.png" class="logo" alt="Vite logo" />
    </a>
    
    <h1>Oscar Cadena</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <h3 class="read-the-docs">
      Bienvenido a mi pagina web
    </h3>
  </div>
`

setupCounter(document.querySelector('#counter'))
